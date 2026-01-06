import CustomButton from '@/Components/CustomButton';
import {Input} from '@/Components/ShadCn/input';

function UserForm() {
  return (
    <form className='flex flex-col gap-y-4 pb-5 px-10'>
      {/* userName and Id */}
      <div className='flex justify-between gap-x-10'>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>الاسم الرباعي</span>
          <Input />
        </label>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>رقم الهوية</span>
          <Input />
        </label>
      </div>

      {/* birthDay and qualification */}
      <div className='flex justify-between gap-x-10'>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>تاريخ الميلاد</span>
          <Input />
        </label>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>المؤهل العلمي</span>
          <Input />
        </label>
      </div>

      {/* phoneNumber and experience */}
      <div className='flex justify-between gap-x-10'>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>رقم الجوال</span>
          <Input />
        </label>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>الخبرة</span>
          <Input />
        </label>
      </div>

      {/* address and courses */}
      <div className='flex justify-between gap-x-10'>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>العنوان</span>
          <Input />
        </label>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>الدورات</span>
          <Input />
        </label>
      </div>

      {/* email and status */}
      <div className='flex justify-between gap-x-10'>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>الإيميل</span>
          <Input />
        </label>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>الحالة الإجتماعية</span>
          <Input />
        </label>
      </div>

      {/* password and amountOfSave */}
      <div className='flex justify-between gap-x-10'>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>كلمة المرور</span>
          <Input />
        </label>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>مقدار الحفظ</span>
          <Input />
        </label>
      </div>

      {/* passportNumber and job */}
      <div className='flex justify-between gap-x-10'>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>رقم الجواز</span>
          <Input />
        </label>
        <label htmlFor='' className='w-1/2'>
          <span className='text-xl font-semibold mb-2 block'>الوظيفة</span>
          <Input />
        </label>
      </div>
      <CustomButton className='self-center'>اضافة</CustomButton>
    </form>
  );
}

export default UserForm;
