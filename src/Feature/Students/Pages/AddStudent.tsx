// import { useNavigate } from 'react-router-dom';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import StudentForm from '../Components/StudentForm';
// import { useAddStudent } from '../Services/student.service';
// import { StudentFormData } from '../Types/student.types';

// const AddStudent = () => {
//   const navigate = useNavigate();
//   const { mutateAsync: addStudent, isPending } = useAddStudent();

//   const handleSubmit = async (data: StudentFormData) => {
//     try {
//         await addStudent(data);
//         navigate('/dashboard/students');
//     } catch (error) {
//         console.error("Failed to add student", error);
//     }
//   };

//   return (
//     <div className='flex flex-col gap-5 p-5 bg-background h-full'>
//       <CustomFormTitle text='إضافة طالبة جديدة' />
//       <div className="bg-white p-5 rounded-lg shadow-sm">
//         <StudentForm 
//             mode="add" 
//             onSubmit={handleSubmit} 
//             isLoading={isPending}
//         />
//       </div>
//     </div>
//   );
// };

// export default AddStudent;
