import { useNavigate } from 'react-router-dom';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import MemorizationPathForm from '../Components/MemorizationPathForm';
import { useAddMemorizationPath } from '../Services/memorizationPath.service';
import { MemorizationPathFormData } from '../Types/memorizationPath.types';

const AddNewMemorizationPath = () => {
  const navigate = useNavigate();
  const { mutateAsync: addPath, isPending } = useAddMemorizationPath();

  const handleSubmit = async (data: MemorizationPathFormData) => {
    try {
        await addPath(data);
        navigate('/dashboard/memorization-paths');
    } catch (error) {
        console.error("Failed to add path", error);
        // Could add toast notification here
    }
  };

  return (
    <div className='flex flex-col gap-5 p-5 bg-background h-full'>
      <CustomFormTitle text='إضافة مسار جديد' />
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <MemorizationPathForm 
            mode="add" 
            onSubmit={handleSubmit} 
            isLoading={isPending}
        />
      </div>
    </div>
  );
};

export default AddNewMemorizationPath;
