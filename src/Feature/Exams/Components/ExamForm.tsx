import { useState, FormEvent } from 'react';
import CustomButton from '@/Components/CustomButton';
import { Input } from '@/Components/ShadCn/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ShadCn/select';
import { Textarea } from '@/Components/ShadCn/textarea';
import { ExamFormData, ExamCategory } from '../Types/exam.types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL, HALAQAS, MANHAJS, USERS } from '@/Constant/route';

interface SimpleList {
    id: number;
    name: string;
}

interface SimpleUser {
    id: number;
    userName: string;
}

type ExamFormProps = {
  mode: 'add' | 'edit';
  defaultValues?: ExamFormData;
  onSubmit: (data: ExamFormData) => void;
  isLoading?: boolean;
};

const INITIAL_STATE: ExamFormData = {
  examDegree: 100,
  halaqaId: 0,
  manhajId: null,
  startDateTime: '',
  endDateTime: '',
  userId: 0,
  notes: '',
  examTypeId: 0,
  examCategory: 'Memorization',
};

const ExamForm = ({ mode, defaultValues, onSubmit, isLoading }: ExamFormProps) => {
  const [formData, setFormData] = useState<ExamFormData>(defaultValues || INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof ExamFormData, string>>>({});

  // Fetch Dropdowns
  const { data: halaqas } = useQuery({
    queryKey: ['simpleHalaqas'],
    queryFn: async () => {
        const res = await axios.get(`${BASE_URL}/${HALAQAS}?pageSize=100`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = (res.data.data || res.data) as any[];
        // Map to SimpleList to handle varying response structures
        return data.map(d => ({ id: d.halaqaId || d.id, name: d.name }));
    }
  });

  const { data: manhajs } = useQuery({
    queryKey: ['simpleManhajs'],
    queryFn: async () => {
        const res = await axios.get(`${BASE_URL}/${MANHAJS}?pageSize=100`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = (res.data.data || res.data) as any[];
        return data.map(d => ({ id: d.manhajId || d.id, name: d.name }));
    }
  });

  // Fetch Users (e.g. Teachers)
  const { data: users } = useQuery({
    queryKey: ['simpleUsers'],
    queryFn: async () => {
        const res = await axios.get(`${BASE_URL}/${USERS}`);
        // Filter for specific roles if needed, or just return all
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (res.data as any[]).map(u => ({ id: u.id, userName: u.userName })) as SimpleUser[];
    }
  });

  // Mock Exam Types since no endpoint specified
  // In a real app, this should come from API
  const examTypes = [
    { id: 1, name: 'اختبار نصفي' },
    { id: 2, name: 'اختبار نهائي' },
    { id: 3, name: 'سبر' },
  ];

  const validate = () => {
    const newErrors: typeof errors = {};
    if (formData.examDegree <= 0) newErrors.examDegree = 'الدرجة يجب أن تكون أكبر من 0';
    if (!formData.halaqaId) newErrors.halaqaId = 'الحلقة مطلوبة';
    if (!formData.examTypeId) newErrors.examTypeId = 'نوع الاختبار مطلوب';
    if (!formData.startDateTime) newErrors.startDateTime = 'تاريخ البداية مطلوب';
    if (!formData.endDateTime) newErrors.endDateTime = 'تاريخ النهاية مطلوب';
    
    if (formData.startDateTime && formData.endDateTime) {
        if (new Date(formData.startDateTime) >= new Date(formData.endDateTime)) {
            newErrors.endDateTime = 'تاريخ النهاية يجب أن يكون بعد البداية';
        }
    }

    if (formData.examCategory === 'Manhaj' && !formData.manhajId) {
        newErrors.manhajId = 'المنهج مطلوب في اختبار المناهج';
    }

    if (!formData.userId) newErrors.userId = 'المشرف مطلوب';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Force null manhajId for Memorization category
      const submissionData = {
          ...formData,
          manhajId: formData.examCategory === 'Memorization' ? null : formData.manhajId
      };
      onSubmit(submissionData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 pb-5 px-10">
      
      {/* Category & Halaqa */}
      <div className="flex justify-between gap-x-10">
        <label className="w-1/2">
            <span className="text-xl font-semibold mb-2 block">تصنيف الاختبار</span>
            <Select 
                value={formData.examCategory} 
                onValueChange={(val) => setFormData({...formData, examCategory: val as ExamCategory})}
            >
            <SelectTrigger>
                <SelectValue placeholder="اختر التصنيف" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Memorization">حفظ (Memorization)</SelectItem>
                <SelectItem value="Manhaj">منهج (Manhaj)</SelectItem>
            </SelectContent>
            </Select>
        </label>
        
        <label className="w-1/2">
            <span className="text-xl font-semibold mb-2 block">الحلقة</span>
            <Select 
                value={formData.halaqaId?.toString()} 
                onValueChange={(val) => setFormData({...formData, halaqaId: Number(val)})}
            >
            <SelectTrigger className={errors.halaqaId ? 'border-red-500' : ''}>
                <SelectValue placeholder="اختر الحلقة" />
            </SelectTrigger>
            <SelectContent>
                {halaqas?.map(h => (
                    <SelectItem key={h.id} value={h.id.toString()}>{h.name}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            {errors.halaqaId && <span className="text-red-500 text-sm">{errors.halaqaId}</span>}
        </label>
      </div>

      {/* Conditionally Render Manhaj */}
      {formData.examCategory === 'Manhaj' && (
        <div className="flex justify-between gap-x-10">
             <label className="w-full">
            <span className="text-xl font-semibold mb-2 block">المنهج</span>
            <Select 
                value={formData.manhajId?.toString() || ''} 
                onValueChange={(val) => setFormData({...formData, manhajId: Number(val)})}
            >
            <SelectTrigger className={errors.manhajId ? 'border-red-500' : ''}>
                <SelectValue placeholder="اختر المنهج" />
            </SelectTrigger>
            <SelectContent>
                {manhajs?.map(m => (
                    <SelectItem key={m.id} value={m.id.toString()}>{m.name}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            {errors.manhajId && <span className="text-red-500 text-sm">{errors.manhajId}</span>}
        </label>
        </div>
      )}

      {/* Exam Type & Teacher/User */}
      <div className="flex justify-between gap-x-10">
        <label className="w-1/2">
            <span className="text-xl font-semibold mb-2 block">نوع الاختبار</span>
            <Select 
                value={formData.examTypeId?.toString()} 
                onValueChange={(val) => setFormData({...formData, examTypeId: Number(val)})}
            >
            <SelectTrigger className={errors.examTypeId ? 'border-red-500' : ''}>
                <SelectValue placeholder="اختر النوع" />
            </SelectTrigger>
            <SelectContent>
                {examTypes.map(t => (
                    <SelectItem key={t.id} value={t.id.toString()}>{t.name}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            {errors.examTypeId && <span className="text-red-500 text-sm">{errors.examTypeId}</span>}
        </label>

        <label className="w-1/2">
            <span className="text-xl font-semibold mb-2 block">المشرف / المسؤول</span>
             <Select 
                value={formData.userId?.toString()} 
                onValueChange={(val) => setFormData({...formData, userId: Number(val)})}
            >
            <SelectTrigger className={errors.userId ? 'border-red-500' : ''}>
                <SelectValue placeholder="اختر المشرف" />
            </SelectTrigger>
            <SelectContent>
                {users?.map(u => (
                    <SelectItem key={u.id} value={u.id.toString()}>{u.userName}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            {errors.userId && <span className="text-red-500 text-sm">{errors.userId}</span>}
        </label>
      </div>

       {/* Dates & Degree */}
       <div className="flex justify-between gap-x-10">
        <label className="w-1/3">
          <span className="text-xl font-semibold mb-2 block">تاريخ ووقت البداية</span>
          <Input 
            type="datetime-local"
            value={formData.startDateTime}
            onChange={(e) => setFormData({...formData, startDateTime: e.target.value})}
            className={errors.startDateTime ? 'border-red-500' : ''}
          />
           {errors.startDateTime && <span className="text-red-500 text-sm">{errors.startDateTime}</span>}
        </label>
        
        <label className="w-1/3">
          <span className="text-xl font-semibold mb-2 block">تاريخ ووقت النهاية</span>
          <Input 
            type="datetime-local"
            value={formData.endDateTime}
            onChange={(e) => setFormData({...formData, endDateTime: e.target.value})}
            className={errors.endDateTime ? 'border-red-500' : ''}
          />
           {errors.endDateTime && <span className="text-red-500 text-sm">{errors.endDateTime}</span>}
        </label>

         <label className="w-1/3">
          <span className="text-xl font-semibold mb-2 block">الدرجة الكلية</span>
          <Input 
            type="number"
            min={1}
            value={formData.examDegree}
            onChange={(e) => setFormData({...formData, examDegree: Number(e.target.value)})}
            className={errors.examDegree ? 'border-red-500' : ''}
          />
           {errors.examDegree && <span className="text-red-500 text-sm">{errors.examDegree}</span>}
        </label>
      </div>

      {/* Notes */}
      <div className="flex justify-between gap-x-10">
        <label className="w-full">
            <span className="text-xl font-semibold mb-2 block">ملاحظات</span>
            <Textarea 
                value={formData.notes || ''}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows={4}
            />
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

export default ExamForm;
