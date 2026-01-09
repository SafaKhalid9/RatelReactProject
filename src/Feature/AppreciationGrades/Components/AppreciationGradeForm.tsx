import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/Components/ShadCn/input';
import { Button } from '@/Components/ShadCn/button';
import { AppreciationGradeFormData } from '../Types/appreciationGrade.types';

interface AppreciationGradeFormProps {
    defaultValues?: Partial<AppreciationGradeFormData>;
    onSubmit: (data: AppreciationGradeFormData) => void;
    isLoading?: boolean;
    mode: 'create' | 'edit' | 'view';
}

const AppreciationGradeForm: React.FC<AppreciationGradeFormProps> = ({ defaultValues, onSubmit, isLoading = false, mode }) => {
    const { control, handleSubmit, reset, watch, formState: { errors } } = useForm<AppreciationGradeFormData>({
        defaultValues: {
            appreciationId: 0,
            minimumScore: 0,
            maximumScore: 100,
            ...defaultValues
        }
    });

    const isViewMode = mode === 'view';

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const minimumScore = watch('minimumScore');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Appreciation ID */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>رمز التقدير (Appreciation ID)</label>
                    <Controller
                        name="appreciationId"
                        control={control}
                        rules={{ required: 'رمز التقدير مطلوب' }}
                        render={({ field }) => (
                            <Input 
                                {...field} 
                                type="number" 
                                disabled={isViewMode} 
                                placeholder="مثلاً: 1 (ممتاز)" 
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                    {errors.appreciationId && <span className="text-red-500 text-sm">{errors.appreciationId.message}</span>}
                </div>

                {/* Spacer */}
                <div className="hidden md:block"></div>

                {/* Minimum Score */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الحد الأدنى للدرجة</label>
                    <Controller
                        name="minimumScore"
                        control={control}
                        rules={{ 
                            required: 'الحد الأدنى مطلوب',
                            min: { value: 0, message: 'يجب أن يكون أكبر من أو يساوي 0' },
                            max: { value: 100, message: 'يجب أن يكون أقل من أو يساوي 100' }
                        }}
                        render={({ field }) => (
                            <Input 
                                {...field} 
                                type="number" 
                                disabled={isViewMode} 
                                placeholder="0" 
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                    {errors.minimumScore && <span className="text-red-500 text-sm">{errors.minimumScore.message}</span>}
                </div>

                {/* Maximum Score */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الحد الأعلى للدرجة</label>
                    <Controller
                        name="maximumScore"
                        control={control}
                        rules={{ 
                            required: 'الحد الأعلى مطلوب',
                            min: { value: 0, message: 'يجب أن يكون أكبر من أو يساوي 0' },
                            max: { value: 100, message: 'يجب أن يكون أقل من أو يساوي 100' },
                            validate: (value) => Number(value) > Number(minimumScore) || 'يجب أن يكون الحد الأعلى أكبر من الحد الأدنى'
                        }}
                        render={({ field }) => (
                            <Input 
                                {...field} 
                                type="number" 
                                disabled={isViewMode} 
                                placeholder="100" 
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                    {errors.maximumScore && <span className="text-red-500 text-sm">{errors.maximumScore.message}</span>}
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

export default AppreciationGradeForm;
