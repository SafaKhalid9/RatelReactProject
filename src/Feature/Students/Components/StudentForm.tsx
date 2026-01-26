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

// // ✅ النوع الجديد للأخطاء يشمل الحقول الخاصة بالولي الجديد
// type StudentFormErrors = Partial<
//   Record<keyof StudentFormData | "newParentName" | "newParentPhone", string>
// >;

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
//   const [errors, setErrors] = useState<StudentFormErrors>({});

//   useEffect(() => {
//     if (defaultValues) setForm(defaultValues);
//   }, [defaultValues]);

//   const validate = () => {
//     const newErrors: StudentFormErrors = {};

//     // الحقول الأساسية
//     if (!form.name) newErrors.name = "الاسم مطلوب";
//     if (!form.birthDate) newErrors.birthDate = "تاريخ الميلاد مطلوب";
//     if (!form.phoneNumber) newErrors.phoneNumber = "رقم الهاتف مطلوب";
//     if (!form.address) newErrors.address = "العنوان مطلوب";
//     if (!form.beginOfMemorize) newErrors.beginOfMemorize = "حقل بداية الحفظ مطلوب";
//     if (!form.currentEducationalLevel) newErrors.currentEducationalLevel = "المرحلة الدراسية مطلوبة";
//     if (!form.educationalQualification) newErrors.educationalQualification = "المؤهل العلمي مطلوب";
//     if (form.halaqaId === 0) newErrors.halaqaId = "اختر الحلقة";

//     // ولي الأمر
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
//         {/* <Select
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
//         </Select> */}
//         <Select
//           value={form.halaqaId.toString()}
//           onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
//           >
//           <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//             <SelectValue placeholder="اختر الحلقة" />
//           </SelectTrigger>
//           <SelectContent>
//             {halaqaList.map((h) => (
//               <SelectItem key={h.id} value={h.id.toString()}>
//                 {h.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         {errors.halaqaId && <span className="text-red-500 text-sm">{errors.halaqaId}</span>}
//       </div>

//       {/* ولي الأمر */}
//       <div className="flex flex-col gap-y-2">
//         {/* اختيار ولي أمر موجود */}
//         {!form.addNewParent && (
//           // <Select
//           //   key={form.parentId}
//           //   value={form.parentId?.toString() || ""}
//           //   onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//           // >
//           //   <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//           //     <SelectValue placeholder="اختر ولي الأمر" />
//           //   </SelectTrigger>
//           //   <SelectContent className={selectStyle}>
//           //     {parentsList.map((p) => (
//           //       <SelectItem key={p.id} value={p.id.toString()}>{p.name}</SelectItem>
//           //     ))}
//           //   </SelectContent>
//           // </Select>
//           <Select
//             value={form.parentId?.toString() || ""}
//             onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//             >
//             <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//               <SelectValue placeholder="اختر ولي الأمر" />
//             </SelectTrigger>
//             <SelectContent>
//               {parentsList.map((p) => (
//                 <SelectItem key={p.id} value={p.id.toString()}>
//                   {p.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//         )}
//         {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}

//         {/* إضافة ولي أمر جديد */}
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

// // ✅ النوع الجديد للأخطاء يشمل الحقول الخاصة بالولي الجديد
// type StudentFormErrors = Partial<
//   Record<keyof StudentFormData | "newParentName" | "newParentPhone", string>
// >;

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
//   // isLoading,
//   parentsList = [],
//   halaqaList = [],
// }: StudentFormProps) => {
//   const [form, setForm] = useState<StudentFormData>(INITIAL_STATE);
//   const [errors, setErrors] = useState<StudentFormErrors>({});

//   useEffect(() => {
//     if (defaultValues) setForm(defaultValues);
//   }, [defaultValues]);

//   const validate = () => {
//     const newErrors: StudentFormErrors = {};

//     // الحقول الأساسية
//     if (!form.name) newErrors.name = "الاسم مطلوب";
//     if (!form.birthDate) newErrors.birthDate = "تاريخ الميلاد مطلوب";
//     if (!form.phoneNumber) newErrors.phoneNumber = "رقم الهاتف مطلوب";
//     if (!form.address) newErrors.address = "العنوان مطلوب";
//     if (!form.beginOfMemorize) newErrors.beginOfMemorize = "حقل بداية الحفظ مطلوب";
//     if (!form.currentEducationalLevel) newErrors.currentEducationalLevel = "المرحلة الدراسية مطلوبة";
//     if (!form.educationalQualification) newErrors.educationalQualification = "المؤهل العلمي مطلوب";
//     if (form.halaqaId === 0) newErrors.halaqaId = "اختر الحلقة";

//     // ولي الأمر
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

//   // const selectStyle =
//   //   "text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]";

//   return (
//     // <form onSubmit={handleSubmit} dir="rtl" className="flex flex-col gap-y-6 px-6 pb-5">
//     //   <div className="flex justify-between gap-x-6">
//     //   {/* اسم الطالبة */}
//     //   <label className="w-1/2">
//     //     <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//     //     <Input
//     //       value={form.name}
//     //       onChange={(e) => setForm({ ...form, name: e.target.value })}
//     //       className={`bg-white ${errors.name ? "border-red-500" : ""}`}
//     //     />
//     //     {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//     //   </label>

//     //   {/* تاريخ الميلاد */}
//     //   <label >
//     //     <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
//     //     <Input
//     //       type="date"
//     //       value={form.birthDate}
//     //       onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
//     //       className={`bg-white ${errors.birthDate ? "border-red-500" : ""}`}
//     //     />
//     //     {errors.birthDate && <span className="text-red-500 text-sm">{errors.birthDate}</span>}
//     //   </label>
//     //   </div>
//     //   <div className="flex justify-between gap-x-6">
//     //     {/* الهاتف */}
//     //   <label className="w-1/2">
//     //     <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
//     //     <Input
//     //       value={form.phoneNumber}
//     //       onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
//     //       className={`bg-white ${errors.phoneNumber ? "border-red-500" : ""}`}
//     //     />
//     //     {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
//     //   </label>

//     //   {/* العنوان */}
//     //   <label className="w-1/2">
//     //     <span className="text-xl font-semibold mb-2 block">العنوان</span>
//     //     <Input
//     //       value={form.address}
//     //       onChange={(e) => setForm({ ...form, address: e.target.value })}
//     //       className={`bg-white ${errors.address ? "border-red-500" : ""}`}
//     //     />
//     //     {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
//     //   </label>

//     //   </div>
//     //   <div className="flex gap-x-6">
//     //       {/* بداية الحفظ */}
//     //       <div className="w-1/2">
//     //         <span className="text-xl font-semibold mb-2 block">بداية الحفظ</span>
//     //         <Select
//     //           key={form.beginOfMemorize}
//     //           value={form.beginOfMemorize}
//     //           onValueChange={(val) => setForm({ ...form, beginOfMemorize: val })}
//     //         >
//     //           <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//     //             <SelectValue placeholder="اختر السورة" />
//     //           </SelectTrigger>
//     //           <SelectContent className={selectStyle}>
//     //             {QURAN_SURAS.map((sura) => (
//     //               <SelectItem key={sura} value={sura}>{sura}</SelectItem>
//     //             ))}
//     //           </SelectContent>
//     //         </Select>
//     //         {errors.beginOfMemorize && <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>}
//     //       </div>

//     //       {/* المرحلة الدراسية / المؤهل العلمي */}
          
//     //         <div className="w-1/2">
//     //           <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
//     //           <Select
//     //             key={form.currentEducationalLevel}
//     //             value={form.currentEducationalLevel}
//     //             onValueChange={(val) => setForm({ ...form, currentEducationalLevel: val })}
//     //           >
//     //             <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//     //               <SelectValue placeholder="اختر المرحلة" />
//     //             </SelectTrigger>
//     //             <SelectContent className={selectStyle}>
//     //               {EDUCATIONAL_LEVELS.map((level) => (
//     //                 <SelectItem key={level} value={level}>{level}</SelectItem>
//     //               ))}
//     //             </SelectContent>
//     //           </Select>
//     //           {errors.currentEducationalLevel && <span className="text-red-500 text-sm">{errors.currentEducationalLevel}</span>}
//     //         </div>
//     //     </div>  
//     //     <div className="flex gap-x-6">
//     //     <div className="w-1/2">
//     //       <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
//     //       <Select
//     //         key={form.educationalQualification}
//     //         value={form.educationalQualification}
//     //         onValueChange={(val) => setForm({ ...form, educationalQualification: val })}
//     //       >
//     //         <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//     //           <SelectValue placeholder="اختر المؤهل" />
//     //         </SelectTrigger>
//     //         <SelectContent className={selectStyle}>
//     //           {EDUCATIONAL_QUALIFICATIONS.map((q) => (
//     //             <SelectItem key={q} value={q}>{q}</SelectItem>
//     //           ))}
//     //         </SelectContent>
//     //       </Select>
//     //       {errors.educationalQualification && <span className="text-red-500 text-sm">{errors.educationalQualification}</span>}
//     //     </div>
      

//     //   {/* الحلقة */}
//     //   <div className="w-1/2">
//     //     <span className="text-xl font-semibold mb-2 block">الحلقة</span>
//     //     {/* <Select
//     //       key={form.halaqaId}
//     //       value={form.halaqaId.toString()}
//     //       onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
//     //     >
//     //       <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//     //         <SelectValue placeholder="اختر الحلقة" />
//     //       </SelectTrigger>
//     //       <SelectContent className={selectStyle}>
//     //         {halaqaList.map((h) => (
//     //           <SelectItem key={h.id} value={h.id.toString()}>{h.name}</SelectItem>
//     //         ))}
//     //       </SelectContent>
//     //     </Select> */}
//     //     <Select
//     //       value={form.halaqaId.toString()}
//     //       onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
//     //       >
//     //       <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//     //         <SelectValue placeholder="اختر الحلقة" />
//     //       </SelectTrigger>
//     //       <SelectContent>
//     //         {halaqaList.map((h) => (
//     //           <SelectItem key={h.id} value={h.id.toString()}>
//     //             {h.name}
//     //           </SelectItem>
//     //         ))}
//     //       </SelectContent>
//     //     </Select>

//     //     {errors.halaqaId && <span className="text-red-500 text-sm">{errors.halaqaId}</span>}
//     //   </div>
//     //   </div>

//     //   {/* ولي الأمر */}
//     //   <div className="flex flex-col gap-y-2">
//     //     {/* اختيار ولي أمر موجود */}
//     //     {!form.addNewParent && (
//     //       // <Select
//     //       //   key={form.parentId}
//     //       //   value={form.parentId?.toString() || ""}
//     //       //   onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//     //       // >
//     //       //   <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//     //       //     <SelectValue placeholder="اختر ولي الأمر" />
//     //       //   </SelectTrigger>
//     //       //   <SelectContent className={selectStyle}>
//     //       //     {parentsList.map((p) => (
//     //       //       <SelectItem key={p.id} value={p.id.toString()}>{p.name}</SelectItem>
//     //       //     ))}
//     //       //   </SelectContent>
//     //       // </Select>
//     //       <Select
//     //         value={form.parentId?.toString() || ""}
//     //         onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//     //         >
//     //         <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//     //           <SelectValue placeholder="اختر ولي الأمر" />
//     //         </SelectTrigger>
//     //         <SelectContent>
//     //           {parentsList.map((p) => (
//     //             <SelectItem key={p.id} value={p.id.toString()}>
//     //               {p.name}
//     //             </SelectItem>
//     //           ))}
//     //         </SelectContent>
//     //       </Select>

//     //     )}
//     //     {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}

//     //     {/* إضافة ولي أمر جديد */}
//     //     <label className="flex items-center gap-x-2 cursor-pointer mt-1">
//     //       <input
//     //         type="checkbox"
//     //         checked={form.addNewParent}
//     //         onChange={(e) =>
//     //           setForm({
//     //             ...form,
//     //             addNewParent: e.target.checked,
//     //             parentId: undefined,
//     //             newParent: e.target.checked ? { name: "", phoneNumber: "" } : undefined,
//     //           })
//     //         }
//     //         className="w-4 h-4 accent-[var(--primary)]"
//     //       />
//     //       <span className="text-sm font-medium">إضافة ولي أمر جديد</span>
//     //     </label>

//     //     {form.addNewParent && form.newParent && (
//     //       <div className="flex gap-x-6 mt-2">
//     //         <Input
//     //           placeholder="اسم ولي الأمر"
//     //           value={form.newParent.name}
//     //           onChange={(e) =>
//     //             setForm({ ...form, newParent: { ...form.newParent!, name: e.target.value } })
//     //           }
//     //           className={`bg-white w-1/2 ${errors.newParentName ? "border-red-500" : ""}`}
//     //         />
//     //         <Input
//     //           placeholder="هاتف ولي الأمر"
//     //           value={form.newParent.phoneNumber}
//     //           onChange={(e) =>
//     //             setForm({ ...form, newParent: { ...form.newParent!, phoneNumber: e.target.value } })
//     //           }
//     //           className={`bg-white w-1/2 ${errors.newParentPhone ? "border-red-500" : ""}`}
//     //         />
//     //       </div>
//     //     )}
//     //     {errors.newParentName && <span className="text-red-500 text-sm">{errors.newParentName}</span>}
//     //     {errors.newParentPhone && <span className="text-red-500 text-sm">{errors.newParentPhone}</span>}
//     //   </div>

//     //   <CustomButton
//     //     type="submit"
//     //     disabled={isLoading}
//     //     className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--light-green)] hover:text-[var(--primary)]"
//     //   >
//     //     {mode === "add" ? "إضافة الطالبة" : "تحديث البيانات"}
//     //   </CustomButton>
//     // </form>

    
//     <form
//       onSubmit={handleSubmit}
//       dir="rtl"
//       className="flex flex-col gap-y-6 pb-5 px-6"
//     >
//       {/* الاسم وتاريخ الميلاد */}
//       <div className="flex justify-between gap-x-6">
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//           <Input
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className={`w-full bg-white ${errors.name ? "border-red-500" : ""}`}
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm">{errors.name}</span>
//           )}
//         </label>

//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
//           <Input 
//             type="date"
//             value={form.birthDate}
//             onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
//             className={`w-full bg-white ${errors.birthDate ? "border-red-500" : ""}`}
//           />
//           {errors.birthDate && (
//             <span className="text-red-500 text-sm">{errors.birthDate}</span>
//           )}
//         </label>
//       </div>

//       {/* رقم الهاتف والعنوان */}
//         <div className="flex justify-between gap-x-6">
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
//           <Input
//             value={form.phoneNumber}
//             onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
//             className={`w-full bg-white ${errors.phoneNumber ? "border-red-500" : ""}`}
//           />
//           {errors.phoneNumber && (
//             <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
//           )}
//         </label>

//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">العنوان</span>
//           <Input 
//             value={form.address}
//             onChange={(e) => setForm({ ...form, address: e.target.value })}
//             className={`w-full bg-white ${errors.address ? "border-red-500" : ""}`}
//           />
//           {errors.address && (
//             <span className="text-red-500 text-sm">{errors.address}</span>
//           )}
//         </label>
//       </div>
//       <div className="flex justify-between gap-x-6">
//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">بداية الحفظ </span>
//           <Select
//             key={form.beginOfMemorize}
//             value={form.beginOfMemorize}
//             onValueChange={(val) =>
//               setForm({ ...form, beginOfMemorize: val })
//             }
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر السورة" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//             {QURAN_SURAS.map((sura) => (
//              <SelectItem key={sura} value={sura}>{sura}</SelectItem>
//            ))}
//             </SelectContent>
//           </Select>
//           {errors.beginOfMemorize && (
//             <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>
//           )}
//         </div>

//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
//           <Select
//             key={form.currentEducationalLevel}
//             value={form.currentEducationalLevel}
//             onValueChange={(val) =>
//               setForm({ ...form, currentEducationalLevel: val })
//             }
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر مرحلة" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//               {EDUCATIONAL_LEVELS.map((level) => (
//               <SelectItem key={level} value={level}>{level}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.currentEducationalLevel && (
//             <span className="text-red-500 text-sm">{errors.currentEducationalLevel}</span>
//           )}
//         </div>
//       </div>
//       <div className="flex justify-between gap-x-6">
//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
//           <Select
//             key={form.educationalQualification}
//             value={form.educationalQualification}
//             onValueChange={(val) =>
//               setForm({ ...form, educationalQualification: val })
//             }
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر المؤهل" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//             {EDUCATIONAL_QUALIFICATIONS.map((q) => (
//             <SelectItem key={q} value={q}>{q}</SelectItem>
//             ))}
//             </SelectContent>
//           </Select>
//           {errors.educationalQualification && (
//             <span className="text-red-500 text-sm">{errors.educationalQualification}</span>
//           )}
//         </div>

//         <div className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">اسم الحلقة</span>
//           <Select
//             key={form.halaqaId}
//             value={form.halaqaId.toString()}
//             onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر الحلقة" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//              {halaqaList.map((h) => (
//               <SelectItem key={h.id} value={h.id.toString()}>{h.name}</SelectItem>
//              ))}
//             </SelectContent>
//           </Select>
//           {errors.halaqaId && (
//             <span className="text-red-500 text-sm">{errors.halaqaId}</span>
//           )}
//         </div>
//       </div>

    
//       {/* <div className="w-full">
//         <span className="text-xl font-semibold mb-2 block">اسم ولي الأمر</span> */}
//           {/* <Select
//             key={form.parentId}
//             value={form.parentId.toString()}
//             onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر ولي الأمر" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//             {parentsList.map((p) => (
//               <SelectItem key={p.id} value={p.id.toString()}>
//                 {p.name}
//               </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.parentId && (
//             <span className="text-red-500 text-sm">{errors.parentId}</span>
//           )} */}
//       {/* </div> */}


//       {/* ولي الأمر */}
//       <div className="w-full">
//         <span className="text-xl font-semibold mb-2 block">اسم ولي الأمر</span>
//         {/* اختيار ولي أمر موجود */}
//         {!form.addNewParent && (
//           // <Select
//           //   key={form.parentId}
//           //   value={form.parentId?.toString() || ""}
//           //   onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//           // >
//           //   <SelectTrigger className="bg-white w-full flex flex-row justify-between items-center text-right border rounded-md cursor-pointer">
//           //     <SelectValue placeholder="اختر ولي الأمر" />
//           //   </SelectTrigger>
//           //   <SelectContent className={selectStyle}>
//           //     {parentsList.map((p) => (
//           //       <SelectItem key={p.id} value={p.id.toString()}>{p.name}</SelectItem>
//           //     ))}
//           //   </SelectContent>
//           // </Select>
//           <Select
//             value={form.parentId?.toString() || ""}
//             onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//             >
//             <SelectTrigger className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl">
//               <SelectValue placeholder="اختر ولي الأمر" />
//             </SelectTrigger>
//             <SelectContent dir="rtl"
//               className="text-right bg-white shadow-md rounded-md">
//               {parentsList.map((p) => (
//                 <SelectItem key={p.id} value={p.id.toString()}>
//                   {p.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//         )}
//         {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}

//         {/* إضافة ولي أمر جديد */}
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

      

//       <div className="pt-4">
//         <CustomButton
//           type="submit"
//           className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:text-[var(--primary)] hover:bg-[var(--light-green)]"
//         >
//           {mode === "add" ? "إضافة الحلقة" : "تحديث الحلقة"}
//         </CustomButton>
//       </div>
//     </form>
//   );
// };

// export default StudentForm;







//هذا الي انا سويته بيدي نفس تنسيق الحلقات
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
  // isLoading,
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
  return (
    <form
      onSubmit={handleSubmit}
      dir="rtl"
      className="flex flex-col gap-y-6 pb-5 px-6"
    >
      {/* الاسم وتاريخ الميلاد */}
      <div className="flex justify-between gap-x-6">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full bg-white ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
          <Input 
            type="date"
            value={form.birthDate}
            onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
            className={`w-full bg-white ${errors.birthDate ? "border-red-500" : ""}`}
          />
          {errors.birthDate && (
            <span className="text-red-500 text-sm">{errors.birthDate}</span>
          )}
        </label>
      </div>

      {/* رقم الهاتف والعنوان */}
        <div className="flex justify-between gap-x-6">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
          <Input
            value={form.phoneNumber}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            className={`w-full bg-white ${errors.phoneNumber ? "border-red-500" : ""}`}
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
          )}
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">العنوان</span>
          <Input 
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className={`w-full bg-white ${errors.address ? "border-red-500" : ""}`}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">{errors.address}</span>
          )}
        </label>
      </div>
      <div className="flex justify-between gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">بداية الحفظ </span>
          <Select
            key={form.beginOfMemorize}
            value={form.beginOfMemorize}
            onValueChange={(val) =>
              setForm({ ...form, beginOfMemorize: val })
            }
          >
            <SelectTrigger
              className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
              dir="rtl"
            >
            <SelectValue placeholder="اختر السورة" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
            {QURAN_SURAS.map((sura) => (
             <SelectItem key={sura} value={sura}>{sura}</SelectItem>
           ))}
            </SelectContent>
          </Select>
          {errors.beginOfMemorize && (
            <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>
          )}
        </div>

        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
          <Select
            key={form.currentEducationalLevel}
            value={form.currentEducationalLevel}
            onValueChange={(val) =>
              setForm({ ...form, currentEducationalLevel: val })
            }
          >
            <SelectTrigger
              className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
              dir="rtl"
            >
            <SelectValue placeholder="اختر مرحلة" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
              {EDUCATIONAL_LEVELS.map((level) => (
              <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.currentEducationalLevel && (
            <span className="text-red-500 text-sm">{errors.currentEducationalLevel}</span>
          )}
        </div>
      </div>
      <div className="flex justify-between gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
          <Select
            key={form.educationalQualification}
            value={form.educationalQualification}
            onValueChange={(val) =>
              setForm({ ...form, educationalQualification: val })
            }
          >
            <SelectTrigger
              className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
              dir="rtl"
            >
            <SelectValue placeholder="اختر المؤهل" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
            {EDUCATIONAL_QUALIFICATIONS.map((q) => (
            <SelectItem key={q} value={q}>{q}</SelectItem>
            ))}
            </SelectContent>
          </Select>
          {errors.educationalQualification && (
            <span className="text-red-500 text-sm">{errors.educationalQualification}</span>
          )}
        </div>

        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم الحلقة</span>
          <Select
            key={form.halaqaId}
            value={form.halaqaId.toString()}
            onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
          >
            <SelectTrigger
              className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
              dir="rtl"
            >
            <SelectValue placeholder="اختر الحلقة" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
             {halaqaList.map((h) => (
              <SelectItem key={h.id} value={h.id.toString()}>{h.name}</SelectItem>
             ))}
            </SelectContent>
          </Select>
          {errors.halaqaId && (
            <span className="text-red-500 text-sm">{errors.halaqaId}</span>
          )}
        </div>
      </div>
      {/* ولي الأمر */}
      <div className="w-full">
        <span className="text-xl font-semibold mb-2 block">اسم ولي الأمر</span>
        {/* اختيار ولي أمر موجود */}
        {!form.addNewParent && (
          <Select
            value={form.parentId?.toString() || ""}
            onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
            >
            <SelectTrigger className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
              dir="rtl">
              <SelectValue placeholder="اختر ولي الأمر" />
            </SelectTrigger>
            <SelectContent dir="rtl"
              className="text-right bg-white shadow-md rounded-md">
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

      

      <div className="pt-4">
        <CustomButton
          type="submit"
          className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:text-[var(--primary)] hover:bg-[var(--light-green)]"
        >
          {mode === "add" ? "إضافة الطالبة" : "تحديث الطالبة"}
        </CustomButton>
      </div>
    </form>
  );
};

export default StudentForm;

















// //هذا الشات سواه بالضبط نفس تنسق الحلقات
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

// type StudentFormErrors = Partial<
//   Record<keyof StudentFormData | "newParentName" | "newParentPhone", string>
// >;

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
//   parentsList = [],
//   halaqaList = [],
// }: StudentFormProps) => {
//   const [form, setForm] = useState<StudentFormData>(INITIAL_STATE);
//   const [errors, setErrors] = useState<StudentFormErrors>({});

//   useEffect(() => {
//     if (defaultValues) setForm(defaultValues);
//   }, [defaultValues]);

//   const validate = () => {
//     const newErrors: StudentFormErrors = {};
//     if (!form.name) newErrors.name = "الاسم مطلوب";
//     if (!form.birthDate) newErrors.birthDate = "تاريخ الميلاد مطلوب";
//     if (!form.phoneNumber) newErrors.phoneNumber = "رقم الهاتف مطلوب";
//     if (!form.address) newErrors.address = "العنوان مطلوب";
//     if (!form.beginOfMemorize) newErrors.beginOfMemorize = "بداية الحفظ مطلوبة";
//     if (!form.currentEducationalLevel)
//       newErrors.currentEducationalLevel = "اختر المرحلة الدراسية";
//     if (!form.educationalQualification)
//       newErrors.educationalQualification = "اختر المؤهل العلمي";
//     if (form.halaqaId === 0) newErrors.halaqaId = "اختر الحلقة";

//     if (form.addNewParent) {
//       if (!form.newParent?.name) newErrors.newParentName = "اسم ولي الأمر مطلوب";
//       if (!form.newParent?.phoneNumber)
//         newErrors.newParentPhone = "هاتف ولي الأمر مطلوب";
//     } else {
//       if (!form.parentId) newErrors.parentId = "اختر ولي أمر أو أضف جديد";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     onSubmit(form);
//   };

//   return (
//     <form onSubmit={handleSubmit} dir="rtl" className="flex flex-col gap-y-6 pb-5 px-6">
//       {/* الاسم وتاريخ الميلاد */}
//       <div className="flex flex-col gap-y-4">
//         <div>
//           <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//           <Input
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className={`w-full bg-white ${errors.name ? "border-red-500" : ""}`}
//           />
//           {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//         </div>
//         <div>
//           <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
//           <Input
//             type="date"
//             value={form.birthDate}
//             onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
//             className={`w-full bg-white ${errors.birthDate ? "border-red-500" : ""}`}
//           />
//           {errors.birthDate && (
//             <span className="text-red-500 text-sm">{errors.birthDate}</span>
//           )}
//         </div>
//       </div>

//       {/* الهاتف والعنوان */}
//       <div className="flex flex-col gap-y-4">
//         <div>
//           <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
//           <Input
//             value={form.phoneNumber}
//             onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
//             className={`w-full bg-white ${errors.phoneNumber ? "border-red-500" : ""}`}
//           />
//           {errors.phoneNumber && (
//             <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
//           )}
//         </div>
//         <div>
//           <span className="text-xl font-semibold mb-2 block">العنوان</span>
//           <Input
//             value={form.address}
//             onChange={(e) => setForm({ ...form, address: e.target.value })}
//             className={`w-full bg-white ${errors.address ? "border-red-500" : ""}`}
//           />
//           {errors.address && (
//             <span className="text-red-500 text-sm">{errors.address}</span>
//           )}
//         </div>
//       </div>

//       {/* بداية الحفظ والمرحلة الدراسية */}
//       <div className="flex flex-col gap-y-4">
//         <div>
//           <span className="text-xl font-semibold mb-2 block">بداية الحفظ</span>
//           <Select
//             key={form.beginOfMemorize}
//             value={form.beginOfMemorize}
//             onValueChange={(val) => setForm({ ...form, beginOfMemorize: val })}
//           >
//             <SelectTrigger className="w-full bg-white text-right">
//               <SelectValue placeholder="اختر السورة" />
//             </SelectTrigger>
//             <SelectContent dir="rtl" className="bg-white shadow-md rounded-md">
//               {QURAN_SURAS.map((sura) => (
//                 <SelectItem key={sura} value={sura}>
//                   {sura}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.beginOfMemorize && (
//             <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>
//           )}
//         </div>

//         <div>
//           <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
//           <Select
//             key={form.currentEducationalLevel}
//             value={form.currentEducationalLevel}
//             onValueChange={(val) =>
//               setForm({ ...form, currentEducationalLevel: val })
//             }
//           >
//             <SelectTrigger className="w-full bg-white text-right">
//               <SelectValue placeholder="اختر المرحلة" />
//             </SelectTrigger>
//             <SelectContent dir="rtl" className="bg-white shadow-md rounded-md">
//               {EDUCATIONAL_LEVELS.map((level) => (
//                 <SelectItem key={level} value={level}>
//                   {level}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.currentEducationalLevel && (
//             <span className="text-red-500 text-sm">
//               {errors.currentEducationalLevel}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* المؤهل العلمي والحلقة */}
//       <div className="flex flex-col gap-y-4">
//         <div>
//           <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
//           <Select
//             key={form.educationalQualification}
//             value={form.educationalQualification}
//             onValueChange={(val) =>
//               setForm({ ...form, educationalQualification: val })
//             }
//           >
//             <SelectTrigger className="w-full bg-white text-right">
//               <SelectValue placeholder="اختر المؤهل" />
//             </SelectTrigger>
//             <SelectContent dir="rtl" className="bg-white shadow-md rounded-md">
//               {EDUCATIONAL_QUALIFICATIONS.map((q) => (
//                 <SelectItem key={q} value={q}>
//                   {q}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.educationalQualification && (
//             <span className="text-red-500 text-sm">
//               {errors.educationalQualification}
//             </span>
//           )}
//         </div>

//         <div>
//           <span className="text-xl font-semibold mb-2 block">الحلقة</span>
//           <Select
//             key={form.halaqaId}
//             value={form.halaqaId.toString()}
//             onValueChange={(val) =>
//               setForm({ ...form, halaqaId: parseInt(val) })
//             }
//           >
//             <SelectTrigger className="w-full bg-white text-right">
//               <SelectValue placeholder="اختر الحلقة" />
//             </SelectTrigger>
//             <SelectContent dir="rtl" className="bg-white shadow-md rounded-md">
//               {halaqaList.map((h) => (
//                 <SelectItem key={h.id} value={h.id.toString()}>
//                   {h.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.halaqaId && (
//             <span className="text-red-500 text-sm">{errors.halaqaId}</span>
//           )}
//         </div>
//       </div>

//       {/* ولي الأمر */}
//       <div className="flex flex-col gap-y-4">
//         <div>
//           <span className="text-xl font-semibold mb-2 block">ولي الأمر</span>
//           {!form.addNewParent && (
//             <Select
//               value={form.parentId?.toString() || ""}
//               onValueChange={(val) =>
//                 setForm({ ...form, parentId: parseInt(val) })
//               }
//             >
//               <SelectTrigger className="w-full text-right bg-white">
//                 <SelectValue placeholder="اختر ولي الأمر" />
//               </SelectTrigger>
//               <SelectContent dir="rtl" className="bg-white shadow-md rounded-md">
//                 {parentsList.map((p) => (
//                   <SelectItem key={p.id} value={p.id.toString()}>
//                     {p.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           )}
//           {errors.parentId && (
//             <span className="text-red-500 text-sm">{errors.parentId}</span>
//           )}

//           <label className="flex items-center gap-x-2 cursor-pointer mt-1">
//             <input
//               type="checkbox"
//               checked={form.addNewParent}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   addNewParent: e.target.checked,
//                   parentId: undefined,
//                   newParent: e.target.checked ? { name: "", phoneNumber: "" } : undefined,
//                 })
//               }
//               className="w-4 h-4 accent-[var(--primary)]"
//             />
//             <span className="text-sm font-medium">إضافة ولي أمر جديد</span>
//           </label>

//           {form.addNewParent && form.newParent && (
//             <div className="flex flex-col gap-y-2 mt-2">
//               <Input
//                 placeholder="اسم ولي الأمر"
//                 value={form.newParent.name}
//                 onChange={(e) =>
//                   setForm({ ...form, newParent: { ...form.newParent!, name: e.target.value } })
//                 }
//                 className={`bg-white ${errors.newParentName ? "border-red-500" : ""}`}
//               />
//               <Input
//                 placeholder="هاتف ولي الأمر"
//                 value={form.newParent.phoneNumber}
//                 onChange={(e) =>
//                   setForm({ ...form, newParent: { ...form.newParent!, phoneNumber: e.target.value } })
//                 }
//                 className={`bg-white ${errors.newParentPhone ? "border-red-500" : ""}`}
//               />
//               {errors.newParentName && (
//                 <span className="text-red-500 text-sm">{errors.newParentName}</span>
//               )}
//               {errors.newParentPhone && (
//                 <span className="text-red-500 text-sm">{errors.newParentPhone}</span>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="pt-4">
//         <CustomButton
//           type="submit"
//           className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:text-[var(--primary)] hover:bg-[var(--light-green)]"
//         >
//           {mode === "add" ? "إضافة الطالبة" : "تحديث الطالبة"}
//         </CustomButton>
//       </div>
//     </form>
//   );
// };

// export default StudentForm;













// // هذا الثالث جربيه
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

// // ✅ النوع الجديد للأخطاء يشمل الحقول الخاصة بالولي الجديد
// type StudentFormErrors = Partial<
//   Record<keyof StudentFormData | "newParentName" | "newParentPhone", string>
// >;

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
//   // isLoading,
//   parentsList = [],
//   halaqaList = [],
// }: StudentFormProps) => {
//   const [form, setForm] = useState<StudentFormData>(INITIAL_STATE);
//   const [errors, setErrors] = useState<StudentFormErrors>({});

//   useEffect(() => {
//     if (defaultValues) setForm(defaultValues);
//   }, [defaultValues]);

//   const validate = () => {
//     const newErrors: StudentFormErrors = {};

//     // الحقول الأساسية
//     if (!form.name) newErrors.name = "الاسم مطلوب";
//     if (!form.birthDate) newErrors.birthDate = "تاريخ الميلاد مطلوب";
//     if (!form.phoneNumber) newErrors.phoneNumber = "رقم الهاتف مطلوب";
//     if (!form.address) newErrors.address = "العنوان مطلوب";
//     if (!form.beginOfMemorize) newErrors.beginOfMemorize = "حقل بداية الحفظ مطلوب";
//     if (!form.currentEducationalLevel) newErrors.currentEducationalLevel = "المرحلة الدراسية مطلوبة";
//     if (!form.educationalQualification) newErrors.educationalQualification = "المؤهل العلمي مطلوب";
//     if (form.halaqaId === 0) newErrors.halaqaId = "اختر الحلقة";

//     // ولي الأمر
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
//   return (
//     <form
//       onSubmit={handleSubmit}
//       dir="rtl"
//       className="flex flex-col gap-y-6 pb-5 px-6"
//     >
//       {/* الاسم وتاريخ الميلاد */}
//       <div className="grid grid-cols-2 gap-6">
//         <label>
//           <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//           <Input
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className={`w-full bg-white ${errors.name ? "border-red-500" : ""}`}
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm">{errors.name}</span>
//           )}
//         </label>

//         <label>
//           <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
//           <Input 
//             type="date"
//             value={form.birthDate}
//             onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
//             className={`w-full bg-white ${errors.birthDate ? "border-red-500" : ""}`}
//           />
//           {errors.birthDate && (
//             <span className="text-red-500 text-sm">{errors.birthDate}</span>
//           )}
//         </label>
//       </div>

//       {/* رقم الهاتف والعنوان */}
//         <div className="grid grid-cols-2 gap-6">
//         <label>
//           <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
//           <Input
//             value={form.phoneNumber}
//             onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
//             className={`w-full bg-white ${errors.phoneNumber ? "border-red-500" : ""}`}
//           />
//           {errors.phoneNumber && (
//             <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
//           )}
//         </label>

//         <label>
//           <span className="text-xl font-semibold mb-2 block">العنوان</span>
//           <Input 
//             value={form.address}
//             onChange={(e) => setForm({ ...form, address: e.target.value })}
//             className={`w-full bg-white ${errors.address ? "border-red-500" : ""}`}
//           />
//           {errors.address && (
//             <span className="text-red-500 text-sm">{errors.address}</span>
//           )}
//         </label>
//       </div>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <span className="text-xl font-semibold mb-2 block">بداية الحفظ </span>
//           <Select
//             key={form.beginOfMemorize}
//             value={form.beginOfMemorize}
//             onValueChange={(val) =>
//               setForm({ ...form, beginOfMemorize: val })
//             }
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر السورة" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//             {QURAN_SURAS.map((sura) => (
//              <SelectItem key={sura} value={sura}>{sura}</SelectItem>
//            ))}
//             </SelectContent>
//           </Select>
//           {errors.beginOfMemorize && (
//             <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>
//           )}
//         </div>

//         <div>
//           <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
//           <Select
//             key={form.currentEducationalLevel}
//             value={form.currentEducationalLevel}
//             onValueChange={(val) =>
//               setForm({ ...form, currentEducationalLevel: val })
//             }
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر مرحلة" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//               {EDUCATIONAL_LEVELS.map((level) => (
//               <SelectItem key={level} value={level}>{level}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.currentEducationalLevel && (
//             <span className="text-red-500 text-sm">{errors.currentEducationalLevel}</span>
//           )}
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
//           <Select
//             key={form.educationalQualification}
//             value={form.educationalQualification}
//             onValueChange={(val) =>
//               setForm({ ...form, educationalQualification: val })
//             }
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر المؤهل" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//             {EDUCATIONAL_QUALIFICATIONS.map((q) => (
//             <SelectItem key={q} value={q}>{q}</SelectItem>
//             ))}
//             </SelectContent>
//           </Select>
//           {errors.educationalQualification && (
//             <span className="text-red-500 text-sm">{errors.educationalQualification}</span>
//           )}
//         </div>

//         <div>
//           <span className="text-xl font-semibold mb-2 block">اسم الحلقة</span>
//           <Select
//             key={form.halaqaId}
//             value={form.halaqaId.toString()}
//             onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
//           >
//             <SelectTrigger
//               className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl"
//             >
//             <SelectValue placeholder="اختر الحلقة" />
//             </SelectTrigger>
//             <SelectContent
//               dir="rtl"
//               className="text-right bg-white shadow-md rounded-md"
//             >
//              {halaqaList.map((h) => (
//               <SelectItem key={h.id} value={h.id.toString()}>{h.name}</SelectItem>
//              ))}
//             </SelectContent>
//           </Select>
//           {errors.halaqaId && (
//             <span className="text-red-500 text-sm">{errors.halaqaId}</span>
//           )}
//         </div>
//       </div>
//       {/* ولي الأمر */}
//       <div className="w-full">
//         <span className="text-xl font-semibold mb-2 block">اسم ولي الأمر</span>
//         {/* اختيار ولي أمر موجود */}
//         {!form.addNewParent && (
//           <Select
//             value={form.parentId?.toString() || ""}
//             onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//             >
//             <SelectTrigger className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
//               dir="rtl">
//               <SelectValue placeholder="اختر ولي الأمر" />
//             </SelectTrigger>
//             <SelectContent dir="rtl"
//               className="text-right bg-white shadow-md rounded-md">
//               {parentsList.map((p) => (
//                 <SelectItem key={p.id} value={p.id.toString()}>
//                   {p.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//         )}
//         {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}

//         {/* إضافة ولي أمر جديد */}
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

      

//       <div className="pt-4">
//         <CustomButton
//           type="submit"
//           className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:text-[var(--primary)] hover:bg-[var(--light-green)]"
//         >
//           {mode === "add" ? "إضافة الطالبة" : "تحديث الطالبة"}
//         </CustomButton>
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
//   onSubmit: (data: StudentFormData) => Promise<void> | void;
//   isLoading?: boolean;
//   parentsList?: { id: number; name: string }[];
//   halaqaList?: { id: number; name: string }[];
// };

// type StudentFormErrors = Partial<
//   Record<keyof StudentFormData | "newParentName" | "newParentPhone", string>
// >;

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
//   const [errors, setErrors] = useState<StudentFormErrors>({});

//   useEffect(() => {
//     if (defaultValues) setForm(defaultValues);
//   }, [defaultValues]);

//   const validate = () => {
//     const newErrors: StudentFormErrors = {};

//     // الحقول الأساسية
//     if (!form.name) newErrors.name = "الاسم مطلوب";
//     if (!form.birthDate) newErrors.birthDate = "تاريخ الميلاد مطلوب";
//     if (!form.phoneNumber) newErrors.phoneNumber = "رقم الهاتف مطلوب";
//     if (!form.address) newErrors.address = "العنوان مطلوب";
//     if (!form.beginOfMemorize) newErrors.beginOfMemorize = "حقل بداية الحفظ مطلوب";
//     if (!form.currentEducationalLevel) newErrors.currentEducationalLevel = "المرحلة الدراسية مطلوبة";
//     if (!form.educationalQualification) newErrors.educationalQualification = "المؤهل العلمي مطلوب";
//     if (form.halaqaId === 0) newErrors.halaqaId = "اختر الحلقة";

//     // ولي الأمر
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
      
//       {/* صف 1: اسم الطالبة + تاريخ الميلاد */}
//       <div className="flex flex-wrap gap-x-6 gap-y-4">
//         <label className="flex-1 min-w-[200px]">
//           <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
//           <Input
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className={`w-full bg-white ${errors.name ? "border-red-500" : ""}`}
//           />
//           {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//         </label>

//         <label className="flex-1 min-w-[200px]">
//           <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
//           <Input
//             type="date"
//             value={form.birthDate}
//             onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
//             className={`w-full bg-white ${errors.birthDate ? "border-red-500" : ""}`}
//           />
//           {errors.birthDate && <span className="text-red-500 text-sm">{errors.birthDate}</span>}
//         </label>
//       </div>

//       {/* صف 2: رقم الهاتف + العنوان */}
//       <div className="flex flex-wrap gap-x-6 gap-y-4">
//         <label className="flex-1 min-w-[200px]">
//           <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
//           <Input
//             value={form.phoneNumber}
//             onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
//             className={`w-full bg-white ${errors.phoneNumber ? "border-red-500" : ""}`}
//           />
//           {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
//         </label>

//         <label className="flex flex-wrap gap-x-6 gap-y-4">
//           <span className="text-xl font-semibold mb-2 block">العنوان</span>
//           <Input
//             value={form.address}
//             onChange={(e) => setForm({ ...form, address: e.target.value })}
//             className={`w-full bg-white ${errors.address ? "border-red-500" : ""}`}
//           />
//           {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
//         </label>
//       </div>

//       {/* صف 3: بداية الحفظ + المرحلة الدراسية */}
//       <div className="flex flex-wrap gap-x-6 gap-y-4">
//         <div className="flex-1 min-w-[200px]">
//           <span className="text-xl font-semibold mb-2 block">بداية الحفظ</span>
//           <Select
//             key={form.beginOfMemorize}
//             value={form.beginOfMemorize}
//             onValueChange={(val) => setForm({ ...form, beginOfMemorize: val })}
//           >
//             <SelectTrigger className="w-full flex justify-between items-center text-right border rounded-md cursor-pointer bg-white">
//               <SelectValue placeholder="اختر السورة" />
//             </SelectTrigger>
//             <SelectContent className={selectStyle}>
//               {QURAN_SURAS.map((sura) => (
//                 <SelectItem key={sura} value={sura}>{sura}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.beginOfMemorize && <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>}
//         </div>

//         <div className="flex-1 min-w-[200px]">
//           <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
//           <Select
//             key={form.currentEducationalLevel}
//             value={form.currentEducationalLevel}
//             onValueChange={(val) => setForm({ ...form, currentEducationalLevel: val })}
//           >
//             <SelectTrigger className="w-full flex justify-between items-center text-right border rounded-md cursor-pointer bg-white">
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
//       </div>

//       {/* صف 4: المؤهل العلمي + الحلقة */}
//       <div className="flex flex-wrap gap-x-6 gap-y-4">
//         <div className="flex-1 min-w-[200px]">
//           <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
//           <Select
//             key={form.educationalQualification}
//             value={form.educationalQualification}
//             onValueChange={(val) => setForm({ ...form, educationalQualification: val })}
//           >
//             <SelectTrigger className="w-full flex justify-between items-center text-right border rounded-md cursor-pointer bg-white">
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

//         <div className="flex-1 min-w-[200px]">
//           <span className="text-xl font-semibold mb-2 block">الحلقة</span>
//           <Select
//             value={form.halaqaId.toString()}
//             onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
//           >
//             <SelectTrigger className="w-full flex justify-between items-center text-right border rounded-md cursor-pointer bg-white">
//               <SelectValue placeholder="اختر الحلقة" />
//             </SelectTrigger>
//             <SelectContent className={selectStyle}>
//               {halaqaList.map((h) => (
//                 <SelectItem key={h.id} value={h.id.toString()}>{h.name}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.halaqaId && <span className="text-red-500 text-sm">{errors.halaqaId}</span>}
//         </div>
//       </div>

//       {/* صف 5: ولي الأمر */}
//       <div className="flex flex-col gap-y-2">
//         {!form.addNewParent && (
//           <Select
//             value={form.parentId?.toString() || ""}
//             onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
//           >
//             <SelectTrigger className="w-full flex justify-between items-center text-right border rounded-md cursor-pointer bg-white">
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
//               className={`w-1/2 bg-white ${errors.newParentName ? "border-red-500" : ""}`}
//             />
//             <Input
//               placeholder="هاتف ولي الأمر"
//               value={form.newParent.phoneNumber}
//               onChange={(e) =>
//                 setForm({ ...form, newParent: { ...form.newParent!, phoneNumber: e.target.value } })
//               }
//               className={`w-1/2 bg-white ${errors.newParentPhone ? "border-red-500" : ""}`}
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
