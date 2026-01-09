import { useState } from 'react';
import { useMemorizationPaths } from '../Services/memorizationPath.service';
import MemorizationPathsTable from '../Components/MemorizationPathsTable';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
import CustomPagination from '@/Components/SideBar/CustomPagination';

const AllMemorizationPaths = () => {
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    // Assuming search might be supported later, but for now just pass page/size
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: responseData, isLoading, isError, error } = useMemorizationPaths({
      page,
      pageSize,
    });
  
    // Defensive access to data
    // If backend returns { items: [...] } or { data: [...] } or just [...]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paths = (responseData as any)?.data || (responseData as any)?.items || (Array.isArray(responseData) ? responseData : []);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const totalPages = (responseData as any)?.totalPages || 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hasNext = (responseData as any)?.hasNextPage ?? (page < totalPages);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hasPrevious = (responseData as any)?.hasPreviousPage ?? (page > 1);

    if (isError) {
        return <div className="text-center text-red-500 py-10">حدث خطأ أثناء تحميل البيانات</div>;
    }

    return (
        <div className='flex flex-col gap-5 p-5 bg-background h-full'>
            <CustomFormTitle text='إدارة مسارات الحفظ' />
            
            <CustomAddButtonAndSearch 
                link='/dashboard/memorization-paths/add' 
                placeholder='بحث باسم المسار...' // Search visual only for now as not connected
            />

            {isLoading ? (
                <div className="text-center py-10">جاري التحميل...</div>
            ) : (
                <>
                    <MemorizationPathsTable listOfPaths={paths} />
                    
                    {/* Reuse CustomPagination if possible, or construct Shadcn pagination */}
                    {/* Checking CustomPagination props: it likely takes setPage or links. 
                        Let's use the Shadcn one inline or verify CustomPagination */}
                    <CustomPagination 
                        page={page}
                        setPage={setPage} // Assuming it accepts setPage
                        totalPages={totalPages}
                        hasNext={hasNext}
                        hasPrevious={hasPrevious}
                    />
                </>
            )}
        </div>
    );
};

export default AllMemorizationPaths;
