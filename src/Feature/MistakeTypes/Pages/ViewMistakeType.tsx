import React from 'react';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import MistakeTypeForm from '../Components/MistakeTypeForm';
import { useParams } from 'react-router-dom';
import { useMistakeTypeDetails } from '../Services/mistakeType.service';

const ViewMistakeType = () => {
    const { id } = useParams<{ id: string }>();
    const { data: mistake, isLoading } = useMistakeTypeDetails(Number(id));

    if (isLoading) return <div className="p-8 text-center">جاري التحميل...</div>;

    return (
        <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
            <CustomFormTitle title='تفاصيل نوع الخطأ' />
            <div className="mt-6">
                <MistakeTypeForm 
                    defaultValues={mistake} 
                    onSubmit={() => {}} 
                    isLoading={false}
                    mode="view"
                />
            </div>
        </div>
    );
};

export default ViewMistakeType;
