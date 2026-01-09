import React from 'react';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import AppreciationGradeForm from '../Components/AppreciationGradeForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppreciationGrade, useUpdateAppreciationGrade } from '../Services/appreciationGrade.service';
import { toast } from 'sonner';
import { AppreciationGradeFormData } from '../Types/appreciationGrade.types';

const EditAppreciationGrade = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data: grade, isLoading: isGradeLoading } = useAppreciationGrade(Number(id));
    const updateMutation = useUpdateAppreciationGrade();

    const handleSubmit = async (data: AppreciationGradeFormData) => {
        if (!id) return;
        try {
            await updateMutation.mutateAsync({ id: Number(id), data });
            toast.success('تم تحديث التقدير بنجاح');
            navigate('/dashboard/appreciation-grades');
        } catch (error) {
            toast.error('حدث خطأ أثناء تحديث التقدير');
            console.error(error);
        }
    };

    if (isGradeLoading) return <div className="p-8 text-center">جاري التحميل...</div>;

    return (
        <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
            <CustomFormTitle title='تعديل التقدير' />
            <div className="mt-6">
                <AppreciationGradeForm 
                    defaultValues={grade} 
                    onSubmit={handleSubmit} 
                    isLoading={updateMutation.isPending}
                    mode="edit"
                />
            </div>
        </div>
    );
};

export default EditAppreciationGrade;
