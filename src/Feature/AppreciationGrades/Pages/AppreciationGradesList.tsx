import React from 'react';
import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import CustomPagination from '@/Components/SideBar/CustomPagination';
import { useAppreciationGrades } from '../Services/appreciationGrade.service';
import { Button } from '@/Components/ShadCn/button';
import AppreciationGradesTable from '../Components/AppreciationGradesTable';

const AppreciationGradesList = () => {
    // Assuming pagination is handled by query params in real app, defaulting to page 1 for now
    const { data: response, isLoading, isError, error } = useAppreciationGrades();

    // Handling response structure. Assuming response is the array or { data: [] }
    const grades = Array.isArray(response) ? response : (response?.data || []);

    if (isLoading) {
        return <div className="p-8 text-center">جاري التحميل...</div>;
    }

    if (isError) {
        return (
            <div className="p-8 text-center text-red-500">
                حدث خطأ أثناء جلب البيانات: {error?.message}
                <br />
                <Button variant="outline" onClick={() => window.location.reload()} className="mt-4">
                    إعادة المحاولة
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            <CustomFormTitle title='قائمة التقديرات' />
            <CustomAddButtonAndSearch 
                path='add' 
                textButton='إضافة تقدير جديد'
            />
            
            <AppreciationGradesTable grades={grades} />
            
            <CustomPagination />
        </div>
    );
};

export default AppreciationGradesList;
