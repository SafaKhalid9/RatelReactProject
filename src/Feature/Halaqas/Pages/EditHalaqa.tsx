import { useParams, useNavigate } from 'react-router-dom';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import HalaqaForm from '../Components/HalaqaForm';
import { useHalaqaDetails, useUpdateHalaqa } from '../Services/halaqa.service';
import { HalaqaFormData } from '../Types/halaqa.types';

const EditHalaqa = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: details, isLoading: isLoadingDetails } = useHalaqaDetails(Number(id));
  const { mutate, isPending } = useUpdateHalaqa();

  if (isLoadingDetails) return <div className="p-10 text-center">Loading details...</div>;
  if (!details) return <div className="p-10 text-center text-red-500">Halaqa not found</div>;

  const defaultValues: HalaqaFormData = {
    name: details.name,
    status: details.status,
    capacity: details.capacity,
    teacherID: details.teacherId,
    period: details.period,
    selectedPathIds: details.paths.map(p => p.pathId),
    selectedManhajIds: details.manhajs.map(m => m.manhajId),
  };

  const handleSubmit = (data: HalaqaFormData) => {
    mutate({ id: Number(id), data }, {
      onSuccess: () => {
        navigate('/dashboard/halaqas');
      },
    });
  };

  return (
    <div className='bg-white rounded-lg p-5'>
      <CustomFormTitle title='Edit Halaqa' subTitle='Update existing study group' />
      <HalaqaForm mode="edit" defaultValues={defaultValues} onSubmit={handleSubmit} isLoading={isPending} />
    </div>
  );
};

export default EditHalaqa;
