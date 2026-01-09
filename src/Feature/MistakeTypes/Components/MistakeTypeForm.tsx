import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/Components/ShadCn/input';
import { Button } from '@/Components/ShadCn/button';
import { MistakeType, MistakeTypeFormData } from '../Types/mistakeType.types';

interface MistakeTypeFormProps {
    defaultValues?: MistakeType;
    onSubmit: (data: MistakeTypeFormData) => void;
    isLoading?: boolean;
    mode: 'create' | 'edit' | 'view';
}

const MistakeTypeForm: React.FC<MistakeTypeFormProps> = ({ defaultValues, onSubmit, isLoading = false, mode }) => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm<MistakeTypeFormData>({
        defaultValues: {
            name: '',
            penaltyPerMistake: 0,
        }
    });

    const isViewMode = mode === 'view';

    useEffect(() => {
        if (defaultValues) {
            reset({
                name: defaultValues.name,
                penaltyPerMistake: defaultValues.degree, // Map read model 'degree' to write model 'penaltyPerMistake'
            });
        }
    }, [defaultValues, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Mistake Name */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>اسم الخطأ</label>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'اسم الخطأ مطلوب' }}
                        render={({ field }) => (
                            <Input 
                                {...field} 
                                disabled={isViewMode} 
                                placeholder="مثلاً: خطأ خفي" 
                            />
                        )}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                {/* Penalty Degree / penaltyPerMistake */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>مقدار الخصم (درجة)</label>
                    <Controller
                        name="penaltyPerMistake"
                        control={control}
                        rules={{ 
                            required: 'الدرجة مطلوبة',
                            min: { value: 0.1, message: 'يجب أن يكون أكبر من 0' },
                            max: { value: 10, message: 'القيمة مرتفعة جداً' }
                        }}
                        render={({ field }) => (
                            <Input 
                                {...field} 
                                type="number"
                                step="0.1"
                                disabled={isViewMode} 
                                placeholder="0.5" 
                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                        )}
                    />
                    {errors.penaltyPerMistake && <span className="text-red-500 text-sm">{errors.penaltyPerMistake.message}</span>}
                </div>
            </div>

            {!isViewMode && (
                <div className="flex justify-center mt-6">
                    <Button type="submit" className='w-1/4' disabled={isLoading}>
                        {isLoading ? 'جاري الحفظ...' : (mode === 'create' ? 'إضافة' : 'تحديث')}
                    </Button>
                </div>
            )}
        </form>
    );
};

export default MistakeTypeForm;
