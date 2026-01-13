import { useState, FormEvent } from 'react';
import CustomButton from '@/Components/CustomButton';
import { Input } from '@/Components/ShadCn/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ShadCn/select';
import { Checkbox } from '@/Components/ShadCn/checkbox';
import { StudentFormData } from '../Types/student.types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL, HALAQAS, USERS } from '@/Constant/route';

// Simple types for dropdowns to avoid large dependency chains
interface SimpleHalaqa {
    halaqaId: number;
    name: string;
}

interface SimpleParent {
    id: number;
    userName: string;
}

type StudentFormProps = {
  mode: 'add' | 'edit';
  defaultValues?: StudentFormData;
  onSubmit: (data: StudentFormData) => void;
  isLoading?: boolean;
};

const INITIAL_STATE: StudentFormData = {
  name: '',
  birthDate: '',
  phoneNumber: '',
  address: '',
  beginOfMemorize: '',
  currentEducationalLevel: '',
  educationalQualification: '',
  halaqaId: 0,
  parentId: 0,
  addNewParent: false,
  newParent: {
    name: '',
    phoneNumber: ''
  }
};

const StudentForm = ({ mode, defaultValues, onSubmit, isLoading }: StudentFormProps) => {
  const [formData, setFormData] = useState<StudentFormData>(defaultValues || INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof StudentFormData | 'newParentName' | 'newParentPhone', string>>>({});

  // Fetch Halaqas for Dropdown
  const { data: halaqas } = useQuery({
    queryKey: ['simpleHalaqas'],
    queryFn: async () => {
        const res = await axios.get(`${BASE_URL}/${HALAQAS}?pageSize=100`); // Fetch mostly all for dropdown
        // Handle paginated response structure if exists, else direct array
        return (res.data.data || res.data) as SimpleHalaqa[];
    }
  });

  // Fetch Parents for Dropdown
  const { data: parents } = useQuery({
    queryKey: ['simpleParents'],
    queryFn: async () => {
        // Assuming getting all users and filtering or a dedicated endpoint. 
        // Using general users endpoint filtering by role if possible, or just all for now based on available API info
        // Since we don't have a strict 'getParents' spec, let's assume grabbing users and showing them is the way.
        const res = await axios.get(`${BASE_URL}/${USERS}`);
        // Filter for roles if applicable on client side if API doesn't support it
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (res.data as any[]).filter((u: any) => u.role === 'ولي أمر' || u.role === 'Parent') as SimpleParent[];
    }
  });

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'اسم الطالبة مطلوب';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'رقم الجوال مطلوب';
    if (!formData.halaqaId) newErrors.halaqaId = 'اختيار الحلقة مطلوب';
    
    if (formData.addNewParent) {
        if (!formData.newParent?.name) newErrors['newParentName'] = 'اسم ولي الأمر مطلوب';
        if (!formData.newParent?.phoneNumber) newErrors['newParentPhone'] = 'جوال ولي الأمر مطلوب';
    } else {
        if (!formData.parentId) newErrors.parentId = 'اختيار ولي الأمر مطلوب';
    }

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
      {/* Personal Info */}
      <div className="flex justify-between gap-x-10">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم الطالبة</span>
          <Input 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </label>
        
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">رقم الجوال</span>
          <Input 
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            className={errors.phoneNumber ? 'border-red-500' : ''}
          />
          {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
        </label>
      </div>

      <div className="flex justify-between gap-x-10">
        <label className="w-1/2">
            <span className="text-xl font-semibold mb-2 block">الحلقة</span>
            <Select 
                value={formData.halaqaId.toString()} 
                onValueChange={(val) => setFormData({...formData, halaqaId: Number(val)})}
            >
            <SelectTrigger className={errors.halaqaId ? 'border-red-500' : ''}>
                <SelectValue placeholder="اختر الحلقة" />
            </SelectTrigger>
            <SelectContent>
                {halaqas?.map(h => (
                    <SelectItem key={h.halaqaId} value={h.halaqaId.toString()}>{h.name}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            {errors.halaqaId && <span className="text-red-500 text-sm">{errors.halaqaId}</span>}
        </label>

        <label className="w-1/2">
            <span className="text-xl font-semibold mb-2 block">العنوان</span>
            <Input 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
        </label>
      </div>

       <div className="flex justify-between gap-x-10">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
          <Input 
            type="date"
            value={formData.birthDate ? new Date(formData.birthDate).toISOString().split('T')[0] : ''}
            onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
          />
        </label>
        
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">تاريخ بدء الحفظ</span>
          <Input 
            type="date"
            value={formData.beginOfMemorize ? new Date(formData.beginOfMemorize).toISOString().split('T')[0] : ''}
            onChange={(e) => setFormData({...formData, beginOfMemorize: e.target.value})}
          />
        </label>
      </div>

      <div className="flex justify-between gap-x-10">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
          <Input 
            value={formData.currentEducationalLevel}
            onChange={(e) => setFormData({...formData, currentEducationalLevel: e.target.value})}
          />
        </label>
        
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
          <Input 
            value={formData.educationalQualification}
            onChange={(e) => setFormData({...formData, educationalQualification: e.target.value})}
          />
        </label>
      </div>

      {/* Parent Section */}
      <div className="border p-4 rounded-md mt-4">
        <div className="flex items-center space-x-2 mb-4 rtl:space-x-reverse">
            <Checkbox 
                id="addNewParent" 
                checked={formData.addNewParent}
                onCheckedChange={(checked) => setFormData({...formData, addNewParent: checked as boolean})}
            />
            <label htmlFor="addNewParent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                إضافة ولي أمر جديد؟
            </label>
        </div>

        {formData.addNewParent ? (
            <div className="flex justify-between gap-x-10">
                <label className="w-1/2">
                    <span className="text-xl font-semibold mb-2 block">اسم ولي الأمر</span>
                    <Input 
                        value={formData.newParent?.name}
                        onChange={(e) => setFormData({...formData, newParent: {...formData.newParent!, name: e.target.value}})}
                        className={errors['newParentName'] ? 'border-red-500' : ''}
                    />
                    {errors['newParentName'] && <span className="text-red-500 text-sm">{errors['newParentName']}</span>}
                </label>
                <label className="w-1/2">
                    <span className="text-xl font-semibold mb-2 block">جوال ولي الأمر</span>
                    <Input 
                        value={formData.newParent?.phoneNumber}
                        onChange={(e) => setFormData({...formData, newParent: {...formData.newParent!, phoneNumber: e.target.value}})}
                        className={errors['newParentPhone'] ? 'border-red-500' : ''}
                    />
                    {errors['newParentPhone'] && <span className="text-red-500 text-sm">{errors['newParentPhone']}</span>}
                </label>
            </div>
        ) : (
             <label className="w-full">
                <span className="text-xl font-semibold mb-2 block">اختر ولي الأمر</span>
                 <Select 
                    value={formData.parentId?.toString()} 
                    onValueChange={(val) => setFormData({...formData, parentId: Number(val)})}
                >
                <SelectTrigger className={errors.parentId ? 'border-red-500' : ''}>
                    <SelectValue placeholder="بحث عن ولي أمر..." />
                </SelectTrigger>
                <SelectContent>
                    {parents?.map(p => (
                        <SelectItem key={p.id} value={p.id.toString()}>{p.userName}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}
            </label>
        )}
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

export default StudentForm;
