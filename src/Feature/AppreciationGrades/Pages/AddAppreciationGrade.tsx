import React from 'react';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import AppreciationGradeForm from '../Components/AppreciationGradeForm';
import { useAddAppreciationGrade } from '../Services/appreciationGrade.service';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AppreciationGradeFormData } from '../Types/appreciationGrade.types';

const AddAppreciationGrade = () => {
    const addMutation = useAddAppreciationGrade();
    const navigate = useNavigate();

    const handleSubmit = async (data: AppreciationGradeFormData) => {
        try {
            await addMutation.mutateAsync(data);
            toast.success('تم إضافة التقدير بنجاح');
            navigate('/dashboard/appreciation-grades');
        } catch (error) {
            toast.error('حدث خطأ أثناء إضافة التقدير');
            console.error(error);
        }
    };

    return (
        <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
            <CustomFormTitle title='إضافة تقدير جديد' />
            <div className="mt-6">
                <AppreciationGradeForm 
                    onSubmit={handleSubmit} 
                    isLoading={addMutation.isPending}
                    mode="create"
                />
            </div>
        </div>
    );
};

export default AddAppreciationGrade;
