import { useNavigate } from 'react-router-dom';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import ExamForm from '../Components/ExamForm';
import { useAddExam } from '../Services/exam.service';
import { ExamFormData } from '../Types/exam.types';

const AddExam = () => {
  const navigate = useNavigate();
  const { mutateAsync: addExam, isPending } = useAddExam();

  const handleSubmit = async (data: ExamFormData) => {
    try {
        await addExam(data);
        navigate('/dashboard/exams');
    } catch (error) {
        console.error("Failed to add exam", error);
    }
  };

  return (
    <div className='flex flex-col gap-5 p-5 bg-background h-full'>
      <CustomFormTitle text='إضافة اختبار جديد' />
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <ExamForm 
            mode="add" 
            onSubmit={handleSubmit} 
            isLoading={isPending}
        />
      </div>
    </div>
  );
};

export default AddExam;
