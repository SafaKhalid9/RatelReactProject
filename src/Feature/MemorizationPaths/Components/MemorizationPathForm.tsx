import { useState, FormEvent } from 'react';
import CustomButton from '@/Components/CustomButton';
import { Input } from '@/Components/ShadCn/input';
import { MemorizationPathFormData } from '../Types/memorizationPath.types';

type MemorizationPathFormProps = {
  mode: 'add' | 'edit';
  defaultValues?: MemorizationPathFormData;
  onSubmit: (data: MemorizationPathFormData) => void;
  isLoading?: boolean;
};

const INITIAL_STATE: MemorizationPathFormData = {
  name: '',
  memorizeFrom: '',
  memorizeTo: '',
};

const MemorizationPathForm = ({ mode, defaultValues, onSubmit, isLoading }: MemorizationPathFormProps) => {
  const [formData, setFormData] = useState<MemorizationPathFormData>(defaultValues || INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof MemorizationPathFormData, string>>>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'اسم المسار مطلوب';
    if (!formData.memorizeFrom.trim()) newErrors.memorizeFrom = 'بداية الحفظ مطلوبة';
    if (!formData.memorizeTo.trim()) newErrors.memorizeTo = 'نهاية الحفظ مطلوبة';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 pb-5 px-10">
      <div className="flex justify-between gap-x-10">
        <label className="w-full">
          <span className="text-xl font-semibold mb-2 block">اسم المسار</span>
          <Input 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={errors.name ? 'border-red-500' : ''}
            placeholder="مثال: مسار جزء عم"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </label>
      </div>

      <div className="flex justify-between gap-x-10">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">من</span>
          <Input 
            value={formData.memorizeFrom}
            onChange={(e) => setFormData({...formData, memorizeFrom: e.target.value})}
            className={errors.memorizeFrom ? 'border-red-500' : ''}
            placeholder="مثال: سورة الناس"
          />
          {errors.memorizeFrom && <span className="text-red-500 text-sm">{errors.memorizeFrom}</span>}
        </label>
        
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">إلى</span>
          <Input 
            value={formData.memorizeTo}
            onChange={(e) => setFormData({...formData, memorizeTo: e.target.value})}
            className={errors.memorizeTo ? 'border-red-500' : ''}
            placeholder="مثال: سورة النبأ"
          />
          {errors.memorizeTo && <span className="text-red-500 text-sm">{errors.memorizeTo}</span>}
        </label>
      </div>

      <div className="flex justify-start mt-5">
        <CustomButton 
            title={mode === 'add' ? 'إضافة' : 'حفظ التعديلات'}
            onClick={() => {}} // Form submit handles this
            type="submit"
            disabled={isLoading} 
            className="w-1/3"
        />
      </div>
    </form>
  );
};

export default MemorizationPathForm;
