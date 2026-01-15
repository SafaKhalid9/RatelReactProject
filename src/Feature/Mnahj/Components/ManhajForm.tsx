// import React, { useEffect } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { Input } from '@/Components/ShadCn/input';
// import { Button } from '@/Components/ShadCn/button';
// import { ManhajFormData } from '../Types/manhaj.types';

// interface ManhajFormProps {
//     defaultValues?: Partial<ManhajFormData>;
//     onSubmit: (data: ManhajFormData) => void;
//     isLoading?: boolean;
//     mode: 'create' | 'edit';
// }

// const ManhajForm: React.FC<ManhajFormProps> = ({ defaultValues, onSubmit, isLoading = false, mode }) => {
//     const { control, handleSubmit, register, reset, formState: { errors } } = useForm<ManhajFormData>({
//         defaultValues: {
//             name: '',
//             authorName: '',
//             targetAudience: '',
//             numberOfLessons: '',
//             goals: '',
//             ...defaultValues
//         }
//     });

//     useEffect(() => {
//         if (defaultValues) {
//             reset(defaultValues);
//         }
//     }, [defaultValues, reset]);

//     const handleFormSubmit = (data: any) => {
//         const processedData: ManhajFormData = { ...data };
        
//         if (data.imageFile && data.imageFile.length > 0) {
//             processedData.imageFile = data.imageFile[0];
//         } else {
//             delete processedData.imageFile;
//         }

//         if (data.pdfFile && data.pdfFile.length > 0) {
//             processedData.pdfFile = data.pdfFile[0];
//         } else {
//             delete processedData.pdfFile;
//         }

//         onSubmit(processedData);
//     };

//     return (
//         <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-y-4 pb-5 px-10'>
//             <div className='grid grid-cols-2 gap-x-10 gap-y-4'>
//                 {/* Name */}
//                 <div className='flex flex-col gap-2'>
//                     <label className='text-lg font-semibold'>اسم المنهج</label>
//                     <Controller
//                         name="name"
//                         control={control}
//                         rules={{ required: 'اسم المنهج مطلوب' }}
//                         render={({ field }) => (
//                             <Input {...field} placeholder="اسم المنهج" />
//                         )}
//                     />
//                     {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
//                 </div>

//                 {/* Author Name */}
//                 <div className='flex flex-col gap-2'>
//                     <label className='text-lg font-semibold'>اسم الكاتب</label>
//                     <Controller
//                         name="authorName"
//                         control={control}
//                         rules={{ required: 'اسم الكاتب مطلوب' }}
//                         render={({ field }) => (
//                             <Input {...field} placeholder="اسم الكاتب" />
//                         )}
//                     />
//                     {errors.authorName && <span className="text-red-500 text-sm">{errors.authorName.message}</span>}
//                 </div>

//                 {/* Target Audience */}
//                 <div className='flex flex-col gap-2'>
//                     <label className='text-lg font-semibold'>الفئة المستهدفة</label>
//                     <Controller
//                         name="targetAudience"
//                         control={control}
//                         rules={{ required: 'الفئة المستهدفة مطلوبة' }}
//                         render={({ field }) => (
//                             <Input {...field} placeholder="الفئة المستهدفة" />
//                         )}
//                     />
//                     {errors.targetAudience && <span className="text-red-500 text-sm">{errors.targetAudience.message}</span>}
//                 </div>

//                 {/* Number of Lessons */}
//                 <div className='flex flex-col gap-2'>
//                     <label className='text-lg font-semibold'>عدد الدروس</label>
//                     <Controller
//                         name="numberOfLessons"
//                         control={control}
//                         rules={{ required: 'عدد الدروس مطلوب' }}
//                         render={({ field }) => (
//                             <Input {...field} type="number" placeholder="عدد الدروس" />
//                         )}
//                     />
//                     {errors.numberOfLessons && <span className="text-red-500 text-sm">{errors.numberOfLessons.message}</span>}
//                 </div>

//                 {/* Goals */}
//                 <div className='flex flex-col gap-2 col-span-2'>
//                     <label className='text-lg font-semibold'>الأهداف</label>
//                     <Controller
//                         name="goals"
//                         control={control}
//                         rules={{ required: 'الأهداف مطلوبة' }}
//                         render={({ field }) => (
//                             <Input {...field} placeholder="الأهداف" />
//                         )}
//                     />
//                     {errors.goals && <span className="text-red-500 text-sm">{errors.goals.message}</span>}
//                 </div>

//                 {/* Image File */}
//                 <div className='flex flex-col gap-2'>
//                     <label className='text-lg font-semibold'>صورة الغلاف</label>
//                     <Input 
//                         type="file" 
//                         accept="image/*"
//                          {...register('imageFile')} // Register file input directly
//                     />
//                 </div>

//                  {/* PDF File */}
//                  <div className='flex flex-col gap-2'>
//                     <label className='text-lg font-semibold'>ملف المنهج (PDF)</label>
//                     <Input 
//                         type="file" 
//                         accept=".pdf"
//                         {...register('pdfFile')} // Register file input directly
//                     />
//                 </div>
//             </div>

//             <Button type="submit" className='self-center mt-6 w-1/4' disabled={isLoading}>
//                 {isLoading ? 'جاري الحفظ...' : (mode === 'create' ? 'إضافة' : 'تحديث')}
//             </Button>
//         </form>
//     );
// };

// export default ManhajForm;
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append('name', form.name);
// //     formData.append('authorName', form.authorName);
// //     formData.append('targetAudionce', form.targetAudionce);
// //     formData.append('numberOfLessons', form.numberOfLessons);
// //     formData.append('goals', form.goals);

// //     if (image) formData.append('image', image);
// //     if (pdf) formData.append('pdf', pdf);

// //     onSubmit(formData);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className='flex flex-col gap-y-6 px-10 pb-6'>
// //       {/* name + author */}
// //       <div className='flex gap-x-10'>
// //         <label className='w-1/2'>
// //           <span className='text-xl font-semibold mb-2 block'>اسم المنهج</span>
// //           <Input
// //             required
// //             value={form.name}
// //             onChange={e => handleChange('name', e.target.value)}
// //           />
// //         </label>

// //         <label className='w-1/2'>
// //           <span className='text-xl font-semibold mb-2 block'>اسم الكاتب</span>
// //           <Input
// //             required
// //             value={form.authorName}
// //             onChange={e => handleChange('authorName', e.target.value)}
// //           />
// //         </label>
// //       </div>

// //       {/* target + lessons */}
// //       <div className='flex gap-x-10'>
// //         <label className='w-1/2'>
// //           <span className='text-xl font-semibold mb-2 block'>الفئة المستهدفة</span>
// //           <Input
// //             required
// //             value={form.targetAudionce}
// //             onChange={e => handleChange('targetAudionce', e.target.value)}
// //           />
// //         </label>

// //         <label className='w-1/2'>
// //           <span className='text-xl font-semibold mb-2 block'>عدد الدروس</span>
// //           <Input
// //             required
// //             type='number'
// //             value={form.numberOfLessons}
// //             onChange={e => handleChange('numberOfLessons', e.target.value)}
// //           />
// //         </label>
// //       </div>

// //       {/* goals + image */}
// //       <div className='flex gap-x-10'>
// //         <label className='w-1/2'>
// //           <span className='text-xl font-semibold mb-2 block'>الأهداف</span>
// //           <Input
// //             required
// //             value={form.goals}
// //             onChange={e => handleChange('goals', e.target.value)}
// //           />
// //         </label>

// //         <label className='w-1/2'>
// //           <span className='text-xl font-semibold mb-2 block'>ملف الصورة</span>
// //           <Input
// //             type='file'
// //             accept='image/*'
// //             onChange={e => setImage(e.target.files?.[0] ?? null)}
// //           />
// //         </label>
// //       </div>

// //       {/* pdf */}
// //       <div className='w-1/2'>
// //         <span className='text-xl font-semibold mb-2 block'>ملف PDF</span>
// //         <Input
// //           type='file'
// //           accept='application/pdf'
// //           onChange={e => setPdf(e.target.files?.[0] ?? null)}
// //         />
// //       </div>

// //       {/* submit */}
// //       <div className='flex justify-center pt-4'>
// //         <CustomButton type='submit'>
// //           {submitText}
// //         </CustomButton>
// //       </div>
// //     </form>
// //   );
// // }

// // export default ManhajForm;





// import { useState } from 'react';
// import { Input } from '@/Components/ShadCn/input';
// import CustomButton from '@/Components/CustomButton';

// type ManhajFormValues = {
//   name: string;
//   authorName: string;
//   targetAudionce: string;
//   numberOfLessons: string;
//   goals: string;
// };

// type ManhajFormProps = {
//   onSubmit: (data: FormData) => void;
//   submitText: string;
//   mode: 'add' | 'edit';
//   defaultValues?: {
//     name: string;
//     authorName: string;
//     targetAudionce: string;
//     numberOfLessons: number;
//     goals: string;
//   };
// };

// function ManhajForm({ onSubmit, submitText, defaultValues }: ManhajFormProps) {
//   const [form, setForm] = useState<ManhajFormValues>({
//     name: defaultValues?.name ?? '',
//     authorName: defaultValues?.authorName ?? '',
//     targetAudionce: defaultValues?.targetAudionce ?? '',
//     numberOfLessons: defaultValues?.numberOfLessons?.toString() ?? '',
//     goals: defaultValues?.goals ?? '',
//   });

//   const [image, setImage] = useState<File | null>(null);
//   const [pdf, setPdf] = useState<File | null>(null);

//   const handleChange = (key: keyof ManhajFormValues, value: string) => {
//     setForm(prev => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', form.name);
//     formData.append('authorName', form.authorName);
//     formData.append('targetAudionce', form.targetAudionce);
//     formData.append('numberOfLessons', form.numberOfLessons);
//     formData.append('goals', form.goals);

//     // رفع الملفات إذا موجودة
//     if (image) formData.append('image', image); // سيرفر يستقبل الملف ويخزن مساره
//     if (pdf) formData.append('pdf', pdf);       // اختياري

//     onSubmit(formData); // ترسل الفورم للباك
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 px-10 pb-6">
//       {/* name + author */}
//       <div className="flex gap-x-10">
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">اسم المنهج</span>
//           <Input
//             required
//             value={form.name}
//             onChange={e => handleChange('name', e.target.value)}
//           />
//         </label>

//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">اسم الكاتب</span>
//           <Input
//             required
//             value={form.authorName}
//             onChange={e => handleChange('authorName', e.target.value)}
//           />
//         </label>
//       </div>

//       {/* target + lessons */}
//       <div className="flex gap-x-10">
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">الفئة المستهدفة</span>
//           <Input
//             required
//             value={form.targetAudionce}
//             onChange={e => handleChange('targetAudionce', e.target.value)}
//           />
//         </label>

//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">عدد الدروس</span>
//           <Input
//             required
//             type="number"
//             value={form.numberOfLessons}
//             onChange={e => handleChange('numberOfLessons', e.target.value)}
//           />
//         </label>
//       </div>

//       {/* goals + image */}
//       <div className="flex gap-x-10">
//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">الأهداف</span>
//           <Input
//             required
//             value={form.goals}
//             onChange={e => handleChange('goals', e.target.value)}
//           />
//         </label>

//         <label className="w-1/2">
//           <span className="text-xl font-semibold mb-2 block">ملف الصورة</span>
//           <Input
//             type="file"
//             accept="image/*"
//             onChange={e => setImage(e.target.files?.[0] ?? null)}
//             required
//           />
//         </label>
//       </div>

//       {/* pdf */}
//       <div className="w-1/2">
//         <span className="text-xl font-semibold mb-2 block">ملف PDF</span>
//         <Input
//           type="file"
//           accept="application/pdf"
//           onChange={e => setPdf(e.target.files?.[0] ?? null)}
//         />
//       </div>

//       {/* submit */}
//       <div className="flex justify-center pt-4">
//         <CustomButton type="submit">{submitText}</CustomButton>
//       </div>
//     </form>
//   );
// }

// export default ManhajForm;
