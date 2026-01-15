// import { useNavigate, useParams } from 'react-router-dom';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import MemorizationPathForm from '../Components/MemorizationPathForm';
// import { useMemorizationPathDetails, useUpdateMemorizationPath } from '../Services/memorizationPath.service';
// import type { MemorizationPathFormData } from '../Types/memorizationPath.types';
// import { useEffect } from 'react';

// const EditMemorizationPath = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const pathId = Number(id);

//   const { data: pathDetails, isLoading: isLoadingDetails, isError } = useMemorizationPathDetails(pathId);
//   const { mutateAsync: updatePath, isPending } = useUpdateMemorizationPath();

//   useEffect(() => {
//     if (isError) {
//         navigate('/dashboard/memorization-paths');
//     }
//   }, [isError, navigate]);

//   const handleSubmit = async (data: MemorizationPathFormData) => {
//     try {
//         await updatePath({ id: pathId, data });
//         navigate('/dashboard/memorization-paths');
//     } catch (error) {
//         console.error("Failed to update path", error);
//     }
//   };

//   if (isLoadingDetails) {
//     return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
//   }

//   return (
//     <div className='flex flex-col gap-5 p-5 bg-background h-full'>
//       <CustomFormTitle title='تعديل مسار الحفظ' />
//       <div className="bg-white p-5 rounded-lg shadow-sm">
//         {pathDetails && (
//             <MemorizationPathForm 
//                 mode="edit" 
//                 defaultValues={{
//                     name: pathDetails.name,
//                     memorizeFrom: pathDetails.memorizeFrom,
//                     memorizeTo: pathDetails.memorizeTo
//                 }}
//                 onSubmit={handleSubmit} 
//                 isLoading={isPending}
//             />
//         )}
//       </div>
//     </div>
//   );
// };

// export default EditMemorizationPath;



import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import MemorizationPathForm from '../Components/MemorizationPathForm';
import {
  useMemorizationPathDetails,
  useUpdateMemorizationPath,
} from '../Services/memorizationPath.service';
import type { MemorizationPathFormData } from '../Types/memorizationPath.types';

const EditMemorizationPath = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pathId = Number(id);

  const {
    data: pathDetails,
    isLoading,
    isError,
  } = useMemorizationPathDetails(pathId);

  const { mutateAsync: updatePath, isPending } =
    useUpdateMemorizationPath();

  useEffect(() => {
    if (isError) {
      navigate('/dashboard/memorization-paths');
    }
  }, [isError, navigate]);

  const handleSubmit = async (data: MemorizationPathFormData) => {
    try {
      await updatePath({ id: pathId, data });
      navigate('/dashboard/memorization-paths');
    } catch (error) {
      console.error('Failed to update path', error);
    }
  };

  if (isLoading) {
    return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
  }

  return (
    <div className="border-t-15 border-[#CB997E] rounded-2xl bg-white">
      <CustomFormTitle title="تعديل مسار الحفظ" />

      {pathDetails && (
          <MemorizationPathForm
            mode="edit"
            defaultValues={{
              name: pathDetails.name,
              memorizeFrom: pathDetails.memorizeFrom,
              memorizeTo: pathDetails.memorizeTo,
            }}
            onSubmit={handleSubmit}
            isLoading={isPending}
          />
      )}
    </div>
  );
};

export default EditMemorizationPath;