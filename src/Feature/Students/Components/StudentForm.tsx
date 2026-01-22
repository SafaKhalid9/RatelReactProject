// import { useState, FormEvent } from 'react';
// import CustomButton from '@/Components/CustomButton';
// import { Input } from '@/Components/ShadCn/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ShadCn/select';
// import { Checkbox } from '@/Components/ShadCn/checkbox';
// import { StudentFormData } from '../Types/student.types';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { BASE_URL, HALAQAS, USERS } from '@/Constant/route';

// // Simple types for dropdowns to avoid large dependency chains
// interface SimpleHalaqa {
//     halaqaId: number;
//     name: string;
// }

// interface SimpleParent {
//     id: number;
//     userName: string;
// }

// type StudentFormProps = {
//   mode: 'add' | 'edit';
//   defaultValues?: StudentFormData;
//   onSubmit: (data: StudentFormData) => void;
//   isLoading?: boolean;
// };

// const INITIAL_STATE: StudentFormData = {
//   name: '',
//   birthDate: '',
//   phoneNumber: '',
//   address: '',
//   beginOfMemorize: '',
//   currentEducationalLevel: '',
//   educationalQualification: '',
//   halaqaId: 0,
//   parentId: 0,
//   addNewParent: false,
//   newParent: {
//     name: '',
//     phoneNumber: ''
//   }
// };

// const StudentForm = ({ mode, defaultValues, onSubmit, isLoading }: StudentFormProps) => {
//   const [formData, setFormData] = useState<StudentFormData>(defaultValues || INITIAL_STATE);
//   const [errors, setErrors] = useState<Partial<Record<keyof StudentFormData | 'newParentName' | 'newParentPhone', string>>>({});

//   // Fetch Halaqas for Dropdown
//   const { data: halaqas } = useQuery({
//     queryKey: ['simpleHalaqas'],
//     queryFn: async () => {
//         const res = await axios.get(`${BASE_URL}/${HALAQAS}?pageSize=100`); // Fetch mostly all for dropdown
//         // Handle paginated response structure if exists, else direct array
//         return (res.data.data || res.data) as SimpleHalaqa[];
//     }
//   });

//   // Fetch Parents for Dropdown
//   const { data: parents } = useQuery({
//     queryKey: ['simpleParents'],
//     queryFn: async () => {
//         // Assuming getting all users and filtering or a dedicated endpoint. 
//         // Using general users endpoint filtering by role if possible, or just all for now based on available API info
//         // Since we don't have a strict 'getParents' spec, let's assume grabbing users and showing them is the way.
//         const res = await axios.get(`${BASE_URL}/${USERS}`);
//         // Filter for roles if applicable on client side if API doesn't support it
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         return (res.data as any[]).filter((u: any) => u.role === 'ولي أمر' || u.role === 'Parent') as SimpleParent[];
//     }
//   });

//   const validate = () => {
//     const newErrors: typeof errors = {};
//     if (!formData.name.trim()) newErrors.name = 'اسم الطالبة مطلوب';
//     if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'رقم الجوال مطلوب';
//     if (!formData.halaqaId) newErrors.halaqaId = 'اختيار الحلقة مطلوب';
    
//     if (formData.addNewParent) {
//         if (!formData.newParent?.name) newErrors['newParentName'] = 'اسم ولي الأمر مطلوب';
//         if (!formData.newParent?.phoneNumber) newErrors['newParentPhone'] = 'جوال ولي الأمر مطلوب';
//     } else {
//         if (!formData.parentId) newErrors.parentId = 'اختيار ولي الأمر مطلوب';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       onSubmit(formData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 pb-5 px-10">
//       {/* Personal Info */}
//       <div className="flex justify-between gap-x-10">
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//           <Input 
//             value={formData.name}
//             onChange={(e) => setFormData({...formData, name: e.target.value})}
//             className={errors.name ? 'border-red-500' : ''}
//           />
//           {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//         </label>
        
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">رقم الجوال</span>
//           <Input 
//             value={formData.phoneNumber}
//             onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
//             className={errors.phoneNumber ? 'border-red-500' : ''}
//           />
//           {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
//         </label>
//       </div>

//       <div className="flex justify-between gap-x-10">
//         <label className="w-1/2">
//             <span className="text-xl font-semibold mb-2 block">اسم الحلقة</span>
//             <Select 
//                 value={formData.halaqaId.toString()} 
//                 onValueChange={(val) => setFormData({...formData, halaqaId: Number(val)})}
//             >
//             <SelectTrigger className={errors.halaqaId ? 'border-red-500' : ''}>
//                 <SelectValue placeholder="اختر الحلقة" />
//             </SelectTrigger>
//             <SelectContent>
//                 {halaqas?.map(h => (
//                     <SelectItem key={h.halaqaId} value={h.halaqaId.toString()}>{h.name}</SelectItem>
//                 ))}
//             </SelectContent>
//             </Select>
//             {errors.halaqaId && <span className="text-red-500 text-sm">{errors.halaqaId}</span>}
//         </label>

//         <label className="w-1/2">
//             <span className="text-xl font-semibold mb-2 block">العنوان</span>
//             <Input 
//                 value={formData.address}
//                 onChange={(e) => setFormData({...formData, address: e.target.value})}
//             />
//         </label>
//       </div>

//        <div className="flex justify-between gap-x-10">
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
//           <Input 
//             type="date"
//             value={formData.birthDate ? new Date(formData.birthDate).toISOString().split('T')[0] : ''}
//             onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
//           />
//         </label>
        
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block"> بدء الحفظ</span>
//           <Input 
//             type="date"
//             value={formData.beginOfMemorize ? new Date(formData.beginOfMemorize).toISOString().split('T')[0] : ''}
//             onChange={(e) => setFormData({...formData, beginOfMemorize: e.target.value})}
//           />
//         </label>
//       </div>

//       <div className="flex justify-between gap-x-10">
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
//           <Input 
//             value={formData.currentEducationalLevel}
//             onChange={(e) => setFormData({...formData, currentEducationalLevel: e.target.value})}
//           />
//         </label>
        
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
//           <Input 
//             value={formData.educationalQualification}
//             onChange={(e) => setFormData({...formData, educationalQualification: e.target.value})}
//           />
//         </label>
//       </div>

//       {/* Parent Section */}
//       <div className="border p-4 rounded-md mt-4">
//         <div className="flex items-center space-x-2 mb-4 rtl:space-x-reverse">
//             <Checkbox 
//                 id="addNewParent" 
//                 checked={formData.addNewParent}
//                 onCheckedChange={(checked) => setFormData({...formData, addNewParent: checked as boolean})}
//             />
//             <label htmlFor="addNewParent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                 إضافة ولي أمر جديد؟
//             </label>
//         </div>

//         {formData.addNewParent ? (
//             <div className="flex justify-between gap-x-10">
//                 <label className="w-1/2">
//                     <span className="text-xl font-semibold mb-2 block">اسم ولي الأمر</span>
//                     <Input 
//                         value={formData.newParent?.name}
//                         onChange={(e) => setFormData({...formData, newParent: {...formData.newParent!, name: e.target.value}})}
//                         className={errors['newParentName'] ? 'border-red-500' : ''}
//                     />
//                     {errors['newParentName'] && <span className="text-red-500 text-sm">{errors['newParentName']}</span>}
//                 </label>
//                 <label className="w-1/2">
//                     <span className="text-xl font-semibold mb-2 block">جوال ولي الأمر</span>
//                     <Input 
//                         value={formData.newParent?.phoneNumber}
//                         onChange={(e) => setFormData({...formData, newParent: {...formData.newParent!, phoneNumber: e.target.value}})}
//                         className={errors['newParentPhone'] ? 'border-red-500' : ''}
//                     />
//                     {errors['newParentPhone'] && <span className="text-red-500 text-sm">{errors['newParentPhone']}</span>}
//                 </label>
//             </div>
//         ) : (
//              <label className="w-full">
//                 <span className="text-xl font-semibold mb-2 block">اختر ولي الأمر</span>
//                  <Select 
//                     value={formData.parentId?.toString()} 
//                     onValueChange={(val) => setFormData({...formData, parentId: Number(val)})}
//                 >
//                 <SelectTrigger className={errors.parentId ? 'border-red-500' : ''}>
//                     <SelectValue placeholder="بحث عن ولي أمر..." />
//                 </SelectTrigger>
//                 <SelectContent>
//                     {parents?.map(p => (
//                         <SelectItem key={p.id} value={p.id.toString()}>{p.userName}</SelectItem>
//                     ))}
//                 </SelectContent>
//                 </Select>
//                 {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}
//             </label>
//         )}
//       </div>

//       <div className="flex justify-start mt-5">
//         <CustomButton 
//             title={mode === 'add' ? 'إضافة' : 'حفظ التعديلات'}
//             onClick={() => {}} // Form submit handles this
//             type="submit"
//             disabled={isLoading} 
//             className="w-1/3"
//         />
//       </div>
//     </form>
//   );
// };

// export default StudentForm;





// import { useEffect, useState, type FormEvent } from "react";
// import CustomButton from "@/Components/CustomButton";
// import { Input } from "@/Components/ShadCn/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ShadCn/select";
// import {
//   QURAN_SURAS,
//   EDUCATIONAL_LEVELS,
//   EDUCATIONAL_QUALIFICATIONS,
// } from "@/Constant/student.constants";
// import type { StudentFormData } from "../Types/student.types";

// type StudentFormProps = {
//   mode: "add" | "edit";
//   defaultValues?: StudentFormData;
// //   onSubmit: (data: StudentFormData) => void;
// onSubmit: (data: StudentFormData) => Promise<void> | void;
//   isLoading?: boolean;
// };

// /* ================== Initial State ================== */

// const INITIAL_STATE: StudentFormData = {
//   fullName: "",
//   memorizeFrom: "",
//   memorizeTo: "",
//   currentEducationalLevel: "",
//   educationalQualification: "",
//   addNewParent: false,
// };

// /* ================== Component ================== */

// const StudentForm = ({
//   mode,
//   defaultValues,
//   onSubmit,
//   isLoading,
// }: StudentFormProps) => {
//   const [form, setForm] = useState<StudentFormData>(INITIAL_STATE);

//   useEffect(() => {
//     if (defaultValues) setForm(defaultValues);
//   }, [defaultValues]);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onSubmit(form);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       dir="rtl"
//       className="flex flex-col gap-y-6 px-6 pb-5"
//     >
//       {/* اسم الطالبة */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//         <Input
//           value={form.fullName}
//           onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//           className="bg-white"
//         />
//       </label>

//       {/* من / إلى */}
//       <div className="flex gap-x-6">
//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">من</span>
//           <Select
//             value={form.memorizeFrom}
//             onValueChange={(val) =>
//               setForm({ ...form, memorizeFrom: val })
//             }
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="اختر السورة" />
//             </SelectTrigger>
//             <SelectContent className="bg-white max-h-60 overflow-y-auto">
//               {QURAN_SURAS.map((sura) => (
//                 <SelectItem key={sura} value={sura}>
//                   {sura}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">إلى</span>
//           <Select
//             value={form.memorizeTo}
//             onValueChange={(val) =>
//               setForm({ ...form, memorizeTo: val })
//             }
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="اختر السورة" />
//             </SelectTrigger>
//             <SelectContent className="bg-white max-h-60 overflow-y-auto">
//               {QURAN_SURAS.map((sura) => (
//                 <SelectItem key={sura} value={sura}>
//                   {sura}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* المرحلة / المؤهل */}
//       <div className="flex gap-x-6">
//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">
//             المرحلة الدراسية
//           </span>
//           <Select
//             value={form.currentEducationalLevel}
//             onValueChange={(val) =>
//               setForm({ ...form, currentEducationalLevel: val })
//             }
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="اختر المرحلة" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {EDUCATIONAL_LEVELS.map((level) => (
//                 <SelectItem key={level} value={level}>
//                   {level}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">
//             المؤهل العلمي
//           </span>
//           <Select
//             value={form.educationalQualification}
//             onValueChange={(val) =>
//               setForm({ ...form, educationalQualification: val })
//             }
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="اختر المؤهل" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {EDUCATIONAL_QUALIFICATIONS.map((q) => (
//                 <SelectItem key={q} value={q}>
//                   {q}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* ولي الأمر */}
//       <label className="flex items-center gap-x-2 cursor-pointer">
//         <input
//           type="checkbox"
//           checked={form.addNewParent}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               addNewParent: e.target.checked,
//               parentId: undefined,
//             })
//           }
//           className="w-4 h-4 accent-[var(--primary)]"
//         />
//         <span className="text-sm font-medium">
//           إضافة ولي أمر جديد
//         </span>
//       </label>

//       <CustomButton
//         type="submit"
//         disabled={isLoading}
//         className="w-full py-2 bg-[var(--primary)] text-white rounded-md"
//       >
//         {mode === "add" ? "إضافة الطالبة" : "تحديث البيانات"}
//       </CustomButton>
//     </form>
//   );
// };

// export default StudentForm;



// import { useEffect, useState, type FormEvent } from "react";
// import CustomButton from "@/Components/CustomButton";
// import { Input } from "@/Components/ShadCn/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ShadCn/select";
// import {
//   QURAN_SURAS,
//   EDUCATIONAL_LEVELS,
//   EDUCATIONAL_QUALIFICATIONS,
// } from "@/Constant/student.constants";
// import type { StudentFormData } from "../Types/student.types";

// type StudentFormProps = {
//   mode: "add" | "edit";
//   defaultValues?: StudentFormData;
//   onSubmit: (data: StudentFormData) => Promise<void> | void;
//   isLoading?: boolean;
//   parentsList?: { id: number; name: string }[]; // قائمة أولياء الأمور
//   halaqaList?: { id: number; name: string }[]; // قائمة الحلقات
// };

// const INITIAL_STATE: StudentFormData = {
//   halaqaId: 0,
//   name: "",
//   birthDate: "",
//   phoneNumber: "",
//   address: "",
//   beginOfMemorize: "",
//   currentEducationalLevel: "",
//   educationalQualification: "",
//   parentId: undefined,
//   addNewParent: false,
//   newParent: undefined,
// };

// const StudentForm = ({
//   mode,
//   defaultValues,
//   onSubmit,
//   isLoading,
//   parentsList = [],
//   halaqaList = [],
// }: StudentFormProps) => {
//   const [form, setForm] = useState<StudentFormData>(INITIAL_STATE);

//   useEffect(() => {
//     if (defaultValues) setForm(defaultValues);
//   }, [defaultValues]);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onSubmit(form);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       dir="rtl"
//       className="flex flex-col gap-y-6 px-6 pb-5"
//     >
//       {/* اسم الطالبة */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//         <Input
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="bg-white"
//         />
//       </label>

//       {/* تاريخ الميلاد */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
//         <Input
//           type="date"
//           value={form.birthDate}
//           onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
//           className="bg-white"
//         />
//       </label>

//       {/* الهاتف */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
//         <Input
//           value={form.phoneNumber}
//           onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
//           className="bg-white"
//         />
//       </label>

//       {/* العنوان */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">العنوان</span>
//         <Input
//           value={form.address}
//           onChange={(e) => setForm({ ...form, address: e.target.value })}
//           className="bg-white"
//         />
//       </label>

//       {/* من القرآن */}
//       <div className="w-full">
//         <span className="text-xl font-semibold mb-2 block">بداية الحفظ</span>
//         <Select
//           value={form.beginOfMemorize}
//           onValueChange={(val) => setForm({ ...form, beginOfMemorize: val })}
//         >
//           <SelectTrigger className="bg-white">
//             <SelectValue placeholder="اختر السورة" />
//           </SelectTrigger>
//           <SelectContent className="bg-white max-h-60 overflow-y-auto">
//             {QURAN_SURAS.map((sura) => (
//               <SelectItem key={sura} value={sura}>
//                 {sura}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* المرحلة الدراسية / المؤهل */}
//       <div className="flex gap-x-6">
//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">
//             المرحلة الدراسية
//           </span>
//           <Select
//             value={form.currentEducationalLevel}
//             onValueChange={(val) =>
//               setForm({ ...form, currentEducationalLevel: val })
//             }
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="اختر المرحلة" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {EDUCATIONAL_LEVELS.map((level) => (
//                 <SelectItem key={level} value={level}>
//                   {level}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">
//             المؤهل العلمي
//           </span>
//           <Select
//             value={form.educationalQualification}
//             onValueChange={(val) =>
//               setForm({ ...form, educationalQualification: val })
//             }
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="اختر المؤهل" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {EDUCATIONAL_QUALIFICATIONS.map((q) => (
//                 <SelectItem key={q} value={q}>
//                   {q}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* الحلقة */}
//       <div className="w-full">
//         <span className="text-xl font-semibold mb-2 block">الحلقة</span>
//         <Select
//           value={form.halaqaId.toString()}
//           onValueChange={(val) =>
//             setForm({ ...form, halaqaId: parseInt(val) })
//           }
//         >
//           <SelectTrigger className="bg-white">
//             <SelectValue placeholder="اختر الحلقة" />
//           </SelectTrigger>
//           <SelectContent className="bg-white">
//             {halaqaList.map((h) => (
//               <SelectItem key={h.id} value={h.id.toString()}>
//                 {h.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* ولي الأمر */}
//       <div className="flex flex-col gap-y-2">
//         {!form.addNewParent && (
//           <Select
//             value={form.parentId?.toString() || ""}
//             onValueChange={(val) =>
//               setForm({ ...form, parentId: parseInt(val) })
//             }
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="اختر ولي الأمر" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               {parentsList.map((p) => (
//                 <SelectItem key={p.id} value={p.id.toString()}>
//                   {p.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         )}

//         <label className="flex items-center gap-x-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={form.addNewParent}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 addNewParent: e.target.checked,
//                 parentId: undefined,
//                 newParent: e.target.checked ? { name: "", phoneNumber: "" } : undefined,
//               })
//             }
//             className="w-4 h-4 accent-[var(--primary)]"
//           />
//           <span className="text-sm font-medium">إضافة ولي أمر جديد</span>
//         </label>

//         {form.addNewParent && form.newParent && (
//           <div className="flex gap-x-6">
//             <Input
//               placeholder="اسم ولي الأمر"
//               value={form.newParent.name}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   newParent: { ...form.newParent!, name: e.target.value },
//                 })
//               }
//               className="bg-white w-1/2"
//             />
//             <Input
//               placeholder="هاتف ولي الأمر"
//               value={form.newParent.phoneNumber}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   newParent: { ...form.newParent!, phoneNumber: e.target.value },
//                 })
//               }
//               className="bg-white w-1/2"
//             />
//           </div>
//         )}
//       </div>

//       <CustomButton
//         type="submit"
//         disabled={isLoading}
//         className="w-full py-2 bg-[var(--primary)] text-white rounded-md"
//       >
//         {mode === "add" ? "إضافة الطالبة" : "تحديث البيانات"}
//       </CustomButton>
//     </form>
//   );
// };

// export default StudentForm;






















// import { useEffect, useState, type FormEvent } from "react";
// import CustomButton from "@/Components/CustomButton";
// import { Input } from "@/Components/ShadCn/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ShadCn/select";
// import {
//   QURAN_SURAS,
//   EDUCATIONAL_LEVELS,
//   EDUCATIONAL_QUALIFICATIONS,
// } from "@/Constant/student.constants";
// import type { StudentFormData } from "../Types/student.types";

// type StudentFormProps = {
//   mode: "add" | "edit";
//   defaultValues?: StudentFormData;
//   onSubmit: (data: StudentFormData) => Promise<void> | void;
//   isLoading?: boolean;
//   parentsList?: { id: number; name: string }[];
//   halaqaList?: { id: number; name: string }[];
// };

// const INITIAL_STATE: StudentFormData = {
//   halaqaId: 0,
//   name: "",
//   birthDate: "",
//   phoneNumber: "",
//   address: "",
//   beginOfMemorize: "",
//   currentEducationalLevel: "",
//   educationalQualification: "",
//   parentId: undefined,
//   addNewParent: false,
//   newParent: undefined,
// };

// const StudentForm = ({
//   mode,
//   defaultValues,
//   onSubmit,
//   isLoading,
//   parentsList = [],
//   halaqaList = [],
// }: StudentFormProps) => {
//   const [form, setForm] = useState<StudentFormData>(INITIAL_STATE);
//   const [errors, setErrors] = useState<Partial<Record<keyof StudentFormData, string>>>({});

//   useEffect(() => {
//     if (defaultValues) setForm(defaultValues);
//   }, [defaultValues]);

//   const validate = () => {
//     const newErrors: typeof errors = {};

//     // ✅ الحقول الأساسية
//     if (!form.name) newErrors.name = "الاسم مطلوب";
//     if (!form.birthDate) newErrors.birthDate = "تاريخ الميلاد مطلوب";
//     if (!form.phoneNumber) newErrors.phoneNumber = "رقم الهاتف مطلوب";
//     if (!form.address) newErrors.address = "العنوان مطلوب";
//     if (!form.beginOfMemorize) newErrors.beginOfMemorize = "حقل بداية الحفظ مطلوب";
//     if (!form.currentEducationalLevel) newErrors.currentEducationalLevel = "المرحلة الدراسية مطلوبة";
//     if (!form.educationalQualification) newErrors.educationalQualification = "المؤهل العلمي مطلوب";
//     if (form.halaqaId === 0) newErrors.halaqaId = "اختر الحلقة";

    

//     // ✅ ولي الأمر: إما تختار من القائمة أو تضيف جديد
//     if (form.addNewParent) {
//       if (!form.newParent?.name) newErrors.newParentName = "اسم ولي الأمر مطلوب";
//       if (!form.newParent?.phoneNumber) newErrors.newParentPhone = "هاتف ولي الأمر مطلوب";
//     } else {
//       if (!form.parentId) newErrors.parentId = "اختر ولي أمر من القائمة أو أضف جديد";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     onSubmit(form);
//   };

//   const selectStyle =
//     "text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]";

//   return (
//     <form onSubmit={handleSubmit} dir="rtl" className="flex flex-col gap-y-6 px-6 pb-5">

//       {/* اسم الطالبة */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//         <Input
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className={`bg-white ${errors.name ? "border-red-500" : ""}`}
//         />
//         {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//       </label>

//       {/* تاريخ الميلاد */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
//         <Input
//           type="date"
//           value={form.birthDate}
//           onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
//           className={`bg-white ${errors.birthDate ? "border-red-500" : ""}`}
//         />
//         {errors.birthDate && <span className="text-red-500 text-sm">{errors.birthDate}</span>}
//       </label>

//       {/* الهاتف */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
//         <Input
//           value={form.phoneNumber}
//           onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
//           className={`bg-white ${errors.phoneNumber ? "border-red-500" : ""}`}
//         />
//         {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
//       </label>

//       {/* العنوان */}
//       <label>
//         <span className="text-xl font-semibold mb-2 block">العنوان</span>
//         <Input
//           value={form.address}
//           onChange={(e) => setForm({ ...form, address: e.target.value })}
//           className={`bg-white ${errors.address ? "border-red-500" : ""}`}
//         />
//         {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
//       </label>

//       {/* بداية الحفظ */}
//       <div className="w-full">
//         <span className="text-xl font-semibold mb-2 block">بداية الحفظ</span>
//         <Select
//           key={form.beginOfMemorize}
//           value={form.beginOfMemorize}
//           onValueChange={(val) => setForm({ ...form, beginOfMemorize: val })}
//         >
//           <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//             <SelectValue placeholder="اختر السورة" />
//           </SelectTrigger>
//           <SelectContent className={selectStyle}>
//             {QURAN_SURAS.map((sura) => (
//               <SelectItem key={sura} value={sura}>{sura}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         {errors.beginOfMemorize && <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>}
//       </div>

//       {/* المرحلة الدراسية / المؤهل العلمي */}
//       <div className="flex gap-x-6">
//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
//           <Select
//             key={form.currentEducationalLevel}
//             value={form.currentEducationalLevel}
//             onValueChange={(val) => setForm({ ...form, currentEducationalLevel: val })}
//           >
//             <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//               <SelectValue placeholder="اختر المرحلة" />
//             </SelectTrigger>
//             <SelectContent className={selectStyle}>
//               {EDUCATIONAL_LEVELS.map((level) => (
//                 <SelectItem key={level} value={level}>{level}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.currentEducationalLevel && <span className="text-red-500 text-sm">{errors.currentEducationalLevel}</span>}
//         </div>

//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
//           <Select
//             key={form.educationalQualification}
//             value={form.educationalQualification}
//             onValueChange={(val) => setForm({ ...form, educationalQualification: val })}
//           >
//             <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//               <SelectValue placeholder="اختر المؤهل" />
//             </SelectTrigger>
//             <SelectContent className={selectStyle}>
//               {EDUCATIONAL_QUALIFICATIONS.map((q) => (
//                 <SelectItem key={q} value={q}>{q}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.educationalQualification && <span className="text-red-500 text-sm">{errors.educationalQualification}</span>}
//         </div>
//       </div>

//       {/* الحلقة */}
//       <div className="w-full">
//         <span className="text-xl font-semibold mb-2 block">الحلقة</span>
//         <Select
//           key={form.halaqaId}
//           value={form.halaqaId.toString()}
//           onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
//         >
//           <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//             <SelectValue placeholder="اختر الحلقة" />
//           </SelectTrigger>
//           <SelectContent className={selectStyle}>
//             {halaqaList.map((h) => (
//               <SelectItem key={h.id} value={h.id.toString()}>{h.name}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         {errors.halaqaId && <span className="text-red-500 text-sm">{errors.halaqaId}</span>}
//       </div>

//       {/* ولي الأمر */}
//       <div className="flex flex-col gap-y-2">
//         {!form.addNewParent && (
//           <Select
//             key={form.parentId}
//             value={form.parentId?.toString() || ""}
//             onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//           >
//             <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//               <SelectValue placeholder="اختر ولي الأمر" />
//             </SelectTrigger>
//             <SelectContent className={selectStyle}>
//               {parentsList.map((p) => (
//                 <SelectItem key={p.id} value={p.id.toString()}>{p.name}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         )}
//         {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}

//         <label className="flex items-center gap-x-2 cursor-pointer mt-1">
//           <input
//             type="checkbox"
//             checked={form.addNewParent}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 addNewParent: e.target.checked,
//                 parentId: undefined,
//                 newParent: e.target.checked ? { name: "", phoneNumber: "" } : undefined,
//               })
//             }
//             className="w-4 h-4 accent-[var(--primary)]"
//           />
//           <span className="text-sm font-medium">إضافة ولي أمر جديد</span>
//         </label>

//         {form.addNewParent && form.newParent && (
//           <div className="flex gap-x-6 mt-2">
//             <Input
//               placeholder="اسم ولي الأمر"
//               value={form.newParent.name}
//               onChange={(e) =>
//                 setForm({ ...form, newParent: { ...form.newParent!, name: e.target.value } })
//               }
//               className={`bg-white w-1/2 ${errors.newParentName ? "border-red-500" : ""}`}
//             />
//             <Input
//               placeholder="هاتف ولي الأمر"
//               value={form.newParent.phoneNumber}
//               onChange={(e) =>
//                 setForm({ ...form, newParent: { ...form.newParent!, phoneNumber: e.target.value } })
//               }
//               className={`bg-white w-1/2 ${errors.newParentPhone ? "border-red-500" : ""}`}
//             />
//           </div>
//         )}
//         {errors.newParentName && <span className="text-red-500 text-sm">{errors.newParentName}</span>}
//         {errors.newParentPhone && <span className="text-red-500 text-sm">{errors.newParentPhone}</span>}
//       </div>

//       <CustomButton
//         type="submit"
//         disabled={isLoading}
//         className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--light-green)] hover:text-[var(--primary)]"
//       >
//         {mode === "add" ? "إضافة الطالبة" : "تحديث البيانات"}
//       </CustomButton>
//     </form>
//   );
// };

// export default StudentForm;









import { useEffect, useState, type FormEvent } from "react";
import CustomButton from "@/Components/CustomButton";
import { Input } from "@/Components/ShadCn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";
import {
  QURAN_SURAS,
  EDUCATIONAL_LEVELS,
  EDUCATIONAL_QUALIFICATIONS,
} from "@/Constant/student.constants";
import type { StudentFormData } from "../Types/student.types";

type StudentFormProps = {
  mode: "add" | "edit";
  defaultValues?: StudentFormData;
  onSubmit: (data: StudentFormData) => Promise<void> | void;
  isLoading?: boolean;
  parentsList?: { id: number; name: string }[];
  halaqaList?: { id: number; name: string }[];
};

// ✅ النوع الجديد للأخطاء يشمل الحقول الخاصة بالولي الجديد
type StudentFormErrors = Partial<
  Record<keyof StudentFormData | "newParentName" | "newParentPhone", string>
>;

const INITIAL_STATE: StudentFormData = {
  halaqaId: 0,
  name: "",
  birthDate: "",
  phoneNumber: "",
  address: "",
  beginOfMemorize: "",
  currentEducationalLevel: "",
  educationalQualification: "",
  parentId: undefined,
  addNewParent: false,
  newParent: undefined,
};

const StudentForm = ({
  mode,
  defaultValues,
  onSubmit,
  isLoading,
  parentsList = [],
  halaqaList = [],
}: StudentFormProps) => {
  const [form, setForm] = useState<StudentFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<StudentFormErrors>({});

  useEffect(() => {
    if (defaultValues) setForm(defaultValues);
  }, [defaultValues]);

  const validate = () => {
    const newErrors: StudentFormErrors = {};

    // الحقول الأساسية
    if (!form.name) newErrors.name = "الاسم مطلوب";
    if (!form.birthDate) newErrors.birthDate = "تاريخ الميلاد مطلوب";
    if (!form.phoneNumber) newErrors.phoneNumber = "رقم الهاتف مطلوب";
    if (!form.address) newErrors.address = "العنوان مطلوب";
    if (!form.beginOfMemorize) newErrors.beginOfMemorize = "حقل بداية الحفظ مطلوب";
    if (!form.currentEducationalLevel) newErrors.currentEducationalLevel = "المرحلة الدراسية مطلوبة";
    if (!form.educationalQualification) newErrors.educationalQualification = "المؤهل العلمي مطلوب";
    if (form.halaqaId === 0) newErrors.halaqaId = "اختر الحلقة";

    // ولي الأمر
    if (form.addNewParent) {
      if (!form.newParent?.name) newErrors.newParentName = "اسم ولي الأمر مطلوب";
      if (!form.newParent?.phoneNumber) newErrors.newParentPhone = "هاتف ولي الأمر مطلوب";
    } else {
      if (!form.parentId) newErrors.parentId = "اختر ولي أمر من القائمة أو أضف جديد";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(form);
  };

  const selectStyle =
    "text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]";

  return (
    <form onSubmit={handleSubmit} dir="rtl" className="flex flex-col gap-y-6 px-6 pb-5">

      {/* اسم الطالبة */}
      <label>
        <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
        <Input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`bg-white ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </label>

      {/* تاريخ الميلاد */}
      <label>
        <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
        <Input
          type="date"
          value={form.birthDate}
          onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
          className={`bg-white ${errors.birthDate ? "border-red-500" : ""}`}
        />
        {errors.birthDate && <span className="text-red-500 text-sm">{errors.birthDate}</span>}
      </label>

      {/* الهاتف */}
      <label>
        <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
        <Input
          value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          className={`bg-white ${errors.phoneNumber ? "border-red-500" : ""}`}
        />
        {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
      </label>

      {/* العنوان */}
      <label>
        <span className="text-xl font-semibold mb-2 block">العنوان</span>
        <Input
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className={`bg-white ${errors.address ? "border-red-500" : ""}`}
        />
        {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
      </label>

      {/* بداية الحفظ */}
      <div className="w-full">
        <span className="text-xl font-semibold mb-2 block">بداية الحفظ</span>
        <Select
          key={form.beginOfMemorize}
          value={form.beginOfMemorize}
          onValueChange={(val) => setForm({ ...form, beginOfMemorize: val })}
        >
          <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
            <SelectValue placeholder="اختر السورة" />
          </SelectTrigger>
          <SelectContent className={selectStyle}>
            {QURAN_SURAS.map((sura) => (
              <SelectItem key={sura} value={sura}>{sura}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.beginOfMemorize && <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>}
      </div>

      {/* المرحلة الدراسية / المؤهل العلمي */}
      <div className="flex gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
          <Select
            key={form.currentEducationalLevel}
            value={form.currentEducationalLevel}
            onValueChange={(val) => setForm({ ...form, currentEducationalLevel: val })}
          >
            <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
              <SelectValue placeholder="اختر المرحلة" />
            </SelectTrigger>
            <SelectContent className={selectStyle}>
              {EDUCATIONAL_LEVELS.map((level) => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.currentEducationalLevel && <span className="text-red-500 text-sm">{errors.currentEducationalLevel}</span>}
        </div>

        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
          <Select
            key={form.educationalQualification}
            value={form.educationalQualification}
            onValueChange={(val) => setForm({ ...form, educationalQualification: val })}
          >
            <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
              <SelectValue placeholder="اختر المؤهل" />
            </SelectTrigger>
            <SelectContent className={selectStyle}>
              {EDUCATIONAL_QUALIFICATIONS.map((q) => (
                <SelectItem key={q} value={q}>{q}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.educationalQualification && <span className="text-red-500 text-sm">{errors.educationalQualification}</span>}
        </div>
      </div>

      {/* الحلقة */}
      <div className="w-full">
        <span className="text-xl font-semibold mb-2 block">الحلقة</span>
        {/* <Select
          key={form.halaqaId}
          value={form.halaqaId.toString()}
          onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
        >
          <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
            <SelectValue placeholder="اختر الحلقة" />
          </SelectTrigger>
          <SelectContent className={selectStyle}>
            {halaqaList.map((h) => (
              <SelectItem key={h.id} value={h.id.toString()}>{h.name}</SelectItem>
            ))}
          </SelectContent>
        </Select> */}
        <Select
          value={form.halaqaId.toString()}
          onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
          >
          <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
            <SelectValue placeholder="اختر الحلقة" />
          </SelectTrigger>
          <SelectContent>
            {halaqaList.map((h) => (
              <SelectItem key={h.id} value={h.id.toString()}>
                {h.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {errors.halaqaId && <span className="text-red-500 text-sm">{errors.halaqaId}</span>}
      </div>

      {/* ولي الأمر */}
      <div className="flex flex-col gap-y-2">
        {/* اختيار ولي أمر موجود */}
        {!form.addNewParent && (
          // <Select
          //   key={form.parentId}
          //   value={form.parentId?.toString() || ""}
          //   onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
          // >
          //   <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
          //     <SelectValue placeholder="اختر ولي الأمر" />
          //   </SelectTrigger>
          //   <SelectContent className={selectStyle}>
          //     {parentsList.map((p) => (
          //       <SelectItem key={p.id} value={p.id.toString()}>{p.name}</SelectItem>
          //     ))}
          //   </SelectContent>
          // </Select>
          <Select
            value={form.parentId?.toString() || ""}
            onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
            >
            <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
              <SelectValue placeholder="اختر ولي الأمر" />
            </SelectTrigger>
            <SelectContent>
              {parentsList.map((p) => (
                <SelectItem key={p.id} value={p.id.toString()}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        )}
        {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}

        {/* إضافة ولي أمر جديد */}
        <label className="flex items-center gap-x-2 cursor-pointer mt-1">
          <input
            type="checkbox"
            checked={form.addNewParent}
            onChange={(e) =>
              setForm({
                ...form,
                addNewParent: e.target.checked,
                parentId: undefined,
                newParent: e.target.checked ? { name: "", phoneNumber: "" } : undefined,
              })
            }
            className="w-4 h-4 accent-[var(--primary)]"
          />
          <span className="text-sm font-medium">إضافة ولي أمر جديد</span>
        </label>

        {form.addNewParent && form.newParent && (
          <div className="flex gap-x-6 mt-2">
            <Input
              placeholder="اسم ولي الأمر"
              value={form.newParent.name}
              onChange={(e) =>
                setForm({ ...form, newParent: { ...form.newParent!, name: e.target.value } })
              }
              className={`bg-white w-1/2 ${errors.newParentName ? "border-red-500" : ""}`}
            />
            <Input
              placeholder="هاتف ولي الأمر"
              value={form.newParent.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, newParent: { ...form.newParent!, phoneNumber: e.target.value } })
              }
              className={`bg-white w-1/2 ${errors.newParentPhone ? "border-red-500" : ""}`}
            />
          </div>
        )}
        {errors.newParentName && <span className="text-red-500 text-sm">{errors.newParentName}</span>}
        {errors.newParentPhone && <span className="text-red-500 text-sm">{errors.newParentPhone}</span>}
      </div>

      <CustomButton
        type="submit"
        disabled={isLoading}
        className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--light-green)] hover:text-[var(--primary)]"
      >
        {mode === "add" ? "إضافة الطالبة" : "تحديث البيانات"}
      </CustomButton>
    </form>
  );
};

export default StudentForm;
