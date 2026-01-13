import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/Components/ShadCn/input';
import { Button } from '@/Components/ShadCn/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ShadCn/select';
import { UserFormData } from '../Types/user.types';

interface UserFormProps {
    defaultValues?: Partial<UserFormData>;
    onSubmit: (data: UserFormData) => void;
    isLoading?: boolean;
    mode: 'create' | 'edit' | 'view';
}

const UserForm: React.FC<UserFormProps> = ({ defaultValues, onSubmit, isLoading = false, mode }) => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm<UserFormData>({
        defaultValues: {
            name: '',
            identityNumber: '',
            birthDate: '',
            qualification: '',
            phoneNumber: '',
            experience: '',
            address: '',
            courses: '',
            email: '',
            socialStatus: '',
            password: '',
            savingAmount: '',
            passportNumber: '',
            job: '',
            role: 'User',
            ...defaultValues
        }
    });

    useEffect(() => {
        if (defaultValues) {
            reset({ ...defaultValues, password: '' }); 
        }
    }, [defaultValues, reset]);

    const isViewMode = mode === 'view';

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 pb-5 px-10'>
            <div className='grid grid-cols-2 gap-x-10 gap-y-4'>
                {/* Name */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الاسم الرباعي</label>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'الاسم مطلوب' }}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="الاسم الرباعي" />
                        )}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                {/* Identity Number */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>رقم الهوية</label>
                    <Controller
                        name="identityNumber"
                        control={control}
                        rules={{ required: 'رقم الهوية مطلوب' }}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="رقم الهوية" />
                        )}
                    />
                    {errors.identityNumber && <span className="text-red-500 text-sm">{errors.identityNumber.message}</span>}
                </div>

                 {/* Role */}
                 <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الصلاحية</label>
                    <Controller
                        name="role"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isViewMode}>
                                <SelectTrigger>
                                    <SelectValue placeholder="اختر الصلاحية" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Admin">مسؤول النظام (Admin)</SelectItem>
                                    <SelectItem value="User">مستخدم (User)</SelectItem>
                                    <SelectItem value="Teacher">معلم (Teacher)</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                {/* Birth Day */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>تاريخ الميلاد</label>
                    <Controller
                        name="birthDate"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} type="date" disabled={isViewMode} />
                        )}
                    />
                </div>

                {/* Qualification */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>المؤهل العلمي</label>
                    <Controller
                        name="qualification"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="المؤهل العلمي" />
                        )}
                    />
                </div>

                {/* Phone Number */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>رقم الجوال</label>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{ required: 'رقم الجوال مطلوب' }}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="رقم الجوال" />
                        )}
                    />
                    {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
                </div>

                {/* Experience */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الخبرة</label>
                    <Controller
                        name="experience"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="الخبرة" />
                        )}
                    />
                </div>

                {/* Address */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>العنوان</label>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="العنوان" />
                        )}
                    />
                </div>

                {/* Courses */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الدورات</label>
                    <Controller
                        name="courses"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="الدورات" />
                        )}
                    />
                </div>

                {/* Email */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الإيميل</label>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: 'الإيميل مطلوب', pattern: { value: /^\S+@\S+$/i, message: 'بريد إلكتروني غير صالح' } }}
                        render={({ field }) => (
                            <Input {...field} type="email" disabled={isViewMode} placeholder="example@mail.com" />
                        )}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

                {/* Social Status */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الحالة الإجتماعية</label>
                    <Controller
                        name="socialStatus"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="متزوج / أعزب" />
                        )}
                    />
                </div>

                {/* Password (Only show in create or if explicitly needed, usually handled separately for update, but kept here as per original form) */}
                {!isViewMode && (
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>كلمة المرور {mode === 'edit' && '(اتركها فارغة إذا لم ترد التغيير)'}</label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: mode === 'create' ? 'كلمة المرور مطلوبة' : false }}
                            render={({ field }) => (
                                <Input {...field} type="password" disabled={isViewMode} placeholder="********" />
                            )}
                        />
                         {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                )}


                {/* Saving Amount */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>مقدار الحفظ</label>
                    <Controller
                        name="savingAmount"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="مقدار الحفظ" />
                        )}
                    />
                </div>

                {/* Passport Number */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>رقم الجواز</label>
                    <Controller
                        name="passportNumber"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="رقم الجواز" />
                        )}
                    />
                </div>

                {/* Job */}
                <div className='flex flex-col gap-2'>
                    <label className='text-lg font-semibold'>الوظيفة</label>
                    <Controller
                        name="job"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} disabled={isViewMode} placeholder="الوظيفة" />
                        )}
                    />
                </div>
            </div>

            {!isViewMode && (
                <Button type="submit" className='self-center mt-6 w-1/4' disabled={isLoading}>
                    {isLoading ? 'جاري الحفظ...' : (mode === 'create' ? 'إضافة' : 'تحديث')}
                </Button>
            )}
        </form>
    );
};

export default UserForm;
