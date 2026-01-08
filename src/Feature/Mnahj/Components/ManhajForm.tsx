// import {Input} from '@/Components/ShadCn/input';


// function ManhajForm() {
//   return (
//     <form className='flex flex-col gap-y-4 pb-5 px-10'>
//       {/* manhajName and authorName */}
//       <div className='flex justify-between gap-x-10'>
//         <label htmlFor='' className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>اسم المنهج</span>
//           <Input required />
//         </label>
//         <label htmlFor='' className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>اسم الكاتب</span>
//           <Input required />
//         </label>
//       </div>

//       {/* targetAudionce and numberOfLessons */}
//       <div className='flex justify-between gap-x-10'>
//         <label htmlFor='' className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>الفئة المستهدفة </span>
//           <Input required />
//         </label>
//         <label htmlFor='' className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>عدد الدروس</span>
//           <Input required />
//         </label>
//       </div>

//       {/* goals and imageFile */}
//       <div className='flex justify-between gap-x-10'>
//         <label htmlFor='' className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>الأهداف</span>
//           <Input required />
//         </label>
//         <label htmlFor='' className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>ملف الصورة</span>
//           <Input type="file" accept="image/*" required />
//         </label>
//       </div>

//       {/* pdfFile */}
//       <div className='flex justify-between gap-x-10'>
//         <label htmlFor='' className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>ملف PDF</span>
//           <Input type="file" accept="application/pdf" />
//         </label>
//       </div>
//     </form>
//   );
// }

// export default ManhajForm;




// import {useState} from 'react';
// import {Input} from '@/Components/ShadCn/input';
// import CustomButton from '@/Components/CustomButton';

// type ManhajFormValues = {
//   name: string;
//   authorName: string;
//   targetAudionce: string; // ⚠️ نفس اسم الباك
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

// function ManhajForm({onSubmit, submitText, defaultValues}: ManhajFormProps) {
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
//     setForm(prev => ({...prev, [key]: value}));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', form.name);
//     formData.append('authorName', form.authorName);
//     formData.append('targetAudionce', form.targetAudionce);
//     formData.append('numberOfLessons', form.numberOfLessons);
//     formData.append('goals', form.goals);

//     if (image) formData.append('image', image);
//     if (pdf) formData.append('pdf', pdf);

//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className='flex flex-col gap-y-6 px-10 pb-6'>
//       {/* name + author */}
//       <div className='flex gap-x-10'>
//         <label className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>اسم المنهج</span>
//           <Input
//             required
//             value={form.name}
//             onChange={e => handleChange('name', e.target.value)}
//           />
//         </label>

//         <label className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>اسم الكاتب</span>
//           <Input
//             required
//             value={form.authorName}
//             onChange={e => handleChange('authorName', e.target.value)}
//           />
//         </label>
//       </div>

//       {/* target + lessons */}
//       <div className='flex gap-x-10'>
//         <label className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>الفئة المستهدفة</span>
//           <Input
//             required
//             value={form.targetAudionce}
//             onChange={e => handleChange('targetAudionce', e.target.value)}
//           />
//         </label>

//         <label className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>عدد الدروس</span>
//           <Input
//             required
//             type='number'
//             value={form.numberOfLessons}
//             onChange={e => handleChange('numberOfLessons', e.target.value)}
//           />
//         </label>
//       </div>

//       {/* goals + image */}
//       <div className='flex gap-x-10'>
//         <label className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>الأهداف</span>
//           <Input
//             required
//             value={form.goals}
//             onChange={e => handleChange('goals', e.target.value)}
//           />
//         </label>

//         <label className='w-1/2'>
//           <span className='text-xl font-semibold mb-2 block'>ملف الصورة</span>
//           <Input
//             type='file'
//             accept='image/*'
//             onChange={e => setImage(e.target.files?.[0] ?? null)}
//           />
//         </label>
//       </div>

//       {/* pdf */}
//       <div className='w-1/2'>
//         <span className='text-xl font-semibold mb-2 block'>ملف PDF</span>
//         <Input
//           type='file'
//           accept='application/pdf'
//           onChange={e => setPdf(e.target.files?.[0] ?? null)}
//         />
//       </div>

//       {/* submit */}
//       <div className='flex justify-center pt-4'>
//         <CustomButton type='submit'>
//           {submitText}
//         </CustomButton>
//       </div>
//     </form>
//   );
// }

// export default ManhajForm;





import { useState } from 'react';
import { Input } from '@/Components/ShadCn/input';
import CustomButton from '@/Components/CustomButton';

type ManhajFormValues = {
  name: string;
  authorName: string;
  targetAudionce: string;
  numberOfLessons: string;
  goals: string;
};

type ManhajFormProps = {
  onSubmit: (data: FormData) => void;
  submitText: string;
  mode: 'add' | 'edit';
  defaultValues?: {
    name: string;
    authorName: string;
    targetAudionce: string;
    numberOfLessons: number;
    goals: string;
  };
};

function ManhajForm({ onSubmit, submitText, defaultValues }: ManhajFormProps) {
  const [form, setForm] = useState<ManhajFormValues>({
    name: defaultValues?.name ?? '',
    authorName: defaultValues?.authorName ?? '',
    targetAudionce: defaultValues?.targetAudionce ?? '',
    numberOfLessons: defaultValues?.numberOfLessons?.toString() ?? '',
    goals: defaultValues?.goals ?? '',
  });

  const [image, setImage] = useState<File | null>(null);
  const [pdf, setPdf] = useState<File | null>(null);

  const handleChange = (key: keyof ManhajFormValues, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('authorName', form.authorName);
    formData.append('targetAudionce', form.targetAudionce);
    formData.append('numberOfLessons', form.numberOfLessons);
    formData.append('goals', form.goals);

    // رفع الملفات إذا موجودة
    if (image) formData.append('image', image); // سيرفر يستقبل الملف ويخزن مساره
    if (pdf) formData.append('pdf', pdf);       // اختياري

    onSubmit(formData); // ترسل الفورم للباك
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 px-10 pb-6">
      {/* name + author */}
      <div className="flex gap-x-10">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم المنهج</span>
          <Input
            required
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
          />
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم الكاتب</span>
          <Input
            required
            value={form.authorName}
            onChange={e => handleChange('authorName', e.target.value)}
          />
        </label>
      </div>

      {/* target + lessons */}
      <div className="flex gap-x-10">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">الفئة المستهدفة</span>
          <Input
            required
            value={form.targetAudionce}
            onChange={e => handleChange('targetAudionce', e.target.value)}
          />
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">عدد الدروس</span>
          <Input
            required
            type="number"
            value={form.numberOfLessons}
            onChange={e => handleChange('numberOfLessons', e.target.value)}
          />
        </label>
      </div>

      {/* goals + image */}
      <div className="flex gap-x-10">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">الأهداف</span>
          <Input
            required
            value={form.goals}
            onChange={e => handleChange('goals', e.target.value)}
          />
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">ملف الصورة</span>
          <Input
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files?.[0] ?? null)}
            required
          />
        </label>
      </div>

      {/* pdf */}
      <div className="w-1/2">
        <span className="text-xl font-semibold mb-2 block">ملف PDF</span>
        <Input
          type="file"
          accept="application/pdf"
          onChange={e => setPdf(e.target.files?.[0] ?? null)}
        />
      </div>

      {/* submit */}
      <div className="flex justify-center pt-4">
        <CustomButton type="submit">{submitText}</CustomButton>
      </div>
    </form>
  );
}

export default ManhajForm;
