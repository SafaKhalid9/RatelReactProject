import React from 'react';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import MistakeTypeForm from '../Components/MistakeTypeForm';
import { useAddMistakeType } from '../Services/mistakeType.service';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { MistakeTypeFormData } from '../Types/mistakeType.types';

const AddMistakeType = () => {
    const addMutation = useAddMistakeType();
    const navigate = useNavigate();

    const handleSubmit = async (data: MistakeTypeFormData) => {
        try {
            await addMutation.mutateAsync(data);
            toast.success('تم إضافة نوع الخطأ بنجاح');
            navigate('/dashboard/mistake-types');
        } catch (error) {
            toast.error('حدث خطأ أثناء إضافة نوع الخطأ');
            console.error(error);
        }
    };

    return (
        <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
            <CustomFormTitle title='إضافة نوع خطأ جديد' />
            <div className="mt-6">
                <MistakeTypeForm 
                    onSubmit={handleSubmit} 
                    isLoading={addMutation.isPending}
                    mode="create"
                />
            </div>
        </div>
    );
};

export default AddMistakeType;
