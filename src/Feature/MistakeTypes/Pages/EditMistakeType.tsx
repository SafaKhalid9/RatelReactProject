import React from 'react';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import MistakeTypeForm from '../Components/MistakeTypeForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useMistakeTypeDetails, useUpdateMistakeType } from '../Services/mistakeType.service';
import { toast } from 'sonner';
import { MistakeTypeFormData } from '../Types/mistakeType.types';

const EditMistakeType = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data: mistake, isLoading: isMistakeLoading } = useMistakeTypeDetails(Number(id));
    const updateMutation = useUpdateMistakeType();

    const handleSubmit = async (data: MistakeTypeFormData) => {
        if (!id) return;
        try {
            await updateMutation.mutateAsync({ id: Number(id), data });
            toast.success('تم تحديث نوع الخطأ بنجاح');
            navigate('/dashboard/mistake-types');
        } catch (error) {
            toast.error('حدث خطأ أثناء تحديث نوع الخطأ');
            console.error(error);
        }
    };

    if (isMistakeLoading) return <div className="p-8 text-center">جاري التحميل...</div>;

    return (
        <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
            <CustomFormTitle title='تعديل نوع الخطأ' />
            <div className="mt-6">
                <MistakeTypeForm 
                    defaultValues={mistake} 
                    onSubmit={handleSubmit} 
                    isLoading={updateMutation.isPending}
                    mode="edit"
                />
            </div>
        </div>
    );
};

export default EditMistakeType;
