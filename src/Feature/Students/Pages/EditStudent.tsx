// import { useNavigate, useParams } from 'react-router-dom';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import StudentForm from '../Components/StudentForm';
// import { useStudentDetails, useUpdateStudent } from '../Services/student.service';
// import { StudentFormData } from '../Types/student.types';
// import { useEffect } from 'react';

// const EditStudent = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const studentId = Number(id);
  
//   const { data: details, isLoading: isLoadingDetails, isError } = useStudentDetails(studentId);
//   const { mutateAsync: updateStudent, isPending } = useUpdateStudent();

//   useEffect(() => {
//     if (isError) {
//         navigate('/dashboard/students');
//     }
//   }, [isError, navigate]);

//   const handleSubmit = async (data: StudentFormData) => {
//     try {
//         await updateStudent({ id: studentId, data });
//         navigate('/dashboard/students');
//     } catch (error) {
//         console.error("Failed to update student", error);
//     }
//   };

//   if (isLoadingDetails) {
//     return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
//   }

//   return (
//     <div className='flex flex-col gap-5 p-5 bg-background h-full'>
//       <CustomFormTitle text='تعديل بيانات الطالبة' />
//       <div className="bg-white p-5 rounded-lg shadow-sm">
//         {details && (
//             <StudentForm 
//                 mode="edit" 
//                 defaultValues={{
//                     name: details.name,
//                     birthDate: details.birthDate,
//                     phoneNumber: details.phoneNumber || '',
//                     address: details.address || '',
//                     // Mapping missing fields from details to form needed if API doesn't return them
//                     // Assuming API returns comparable structure or we default
//                     beginOfMemorize: (details as any).beginOfMemorize || '',
//                     currentEducationalLevel: (details as any).currentEducationalLevel || '',
//                     educationalQualification: (details as any).educationalQualification || '',
//                     halaqaId: (details as any).halaqaId || 0,
//                     parentId: (details as any).parentId || 0,
//                     addNewParent: false, // Default to existing parent on edit
//                 }}
//                 onSubmit={handleSubmit} 
//                 isLoading={isPending}
//             />
//         )}
//       </div>
//     </div>
//   );
// };

// export default EditStudent;










// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react";
// import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
// import StudentForm from "../Components/StudentForm";
// import { useStudentDetails, useUpdateStudent } from "../Services/student.service";
// import type { StudentFormData } from "../Types/student.types";

// const EditStudent = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const studentId = Number(id);

//   const { data: details, isLoading: isLoadingDetails, isError } = useStudentDetails(studentId);
//   const { mutateAsync: updateStudent, isPending } = useUpdateStudent();

//   useEffect(() => {
//     if (isError) {
//       navigate("/dashboard/students");
//     }
//   }, [isError, navigate]);

//   const handleSubmit = async (data: StudentFormData) => {
//     try {
//       await updateStudent({ id: studentId, data });
//       navigate("/dashboard/students");
//     } catch (error) {
//       console.error("Failed to update student", error);
//     }
//   };

//   if (isLoadingDetails) {
//     return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
//   }

//   // Mapping البيانات للفورم مع default values
//   const mappedValues: StudentFormData = details
//     ? {
//         name: details.name,
//         birthDate: details.birthDate.split("T")[0], // تحويل ISO string إلى YYYY-MM-DD
//         phoneNumber: details.phoneNumber || "",
//         address: details.address || "",
//         beginOfMemorize: (details as any).beginOfMemorize || "",
//         currentEducationalLevel: (details as any).currentEducationalLevel || "",
//         educationalQualification: (details as any).educationalQualification || "",
//         halaqaId: (details as any).halaqaId || 0,
//         parentId: (details as any).parentId || undefined,
//         addNewParent: false,
//         newParent: undefined,
//       }
//     : {
//         // Default state لو details غير موجودة
//         name: "",
//         birthDate: "",
//         phoneNumber: "",
//         address: "",
//         beginOfMemorize: "",
//         currentEducationalLevel: "",
//         educationalQualification: "",
//         halaqaId: 0,
//         parentId: undefined,
//         addNewParent: false,
//         newParent: undefined,
//       };

//   return (
//     <div className="flex flex-col gap-5 p-5 bg-background h-full">
//       <CustomFormTitle text="تعديل بيانات الطالبة" />
//       <div className="bg-white p-5 rounded-lg shadow-sm">
//         {details && (
//           <StudentForm
//             mode="edit"
//             defaultValues={mappedValues}
//             onSubmit={handleSubmit}
//             isLoading={isPending}
//             // لازم تمرري القوائم إذا موجودة
//             parentsList={(details as any).parentsList || []}
//             halaqaList={(details as any).halaqaList || []}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default EditStudent;
