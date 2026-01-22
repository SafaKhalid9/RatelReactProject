// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from '@/Components/ShadCn/table';
//   import { StudentListItem } from '../Types/student.types';
//   import StudentActionsPopover from './StudentActionsPopover';
  
//   const StudentsTable = ({ listOfStudents }: { listOfStudents: StudentListItem[] }) => {
//     return (
//       <Table>
//         <TableHeader className='bg-[#CB997E]'>
//           <TableRow>
//             <TableHead className='text-start text-white'>اسم الطالبة</TableHead>
//             <TableHead className='text-start text-white'>رقم الجوال</TableHead>
//             <TableHead className='text-start text-white'>الحلقة</TableHead>
//             <TableHead className='text-start text-white'>ولي الأمر</TableHead>
//             <TableHead className='text-start text-white'>العنوان</TableHead>
//             <TableHead className='text-start text-white w-[50px]'></TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {listOfStudents.length === 0 && (
//             <TableRow>
//               <TableCell colSpan={6}>
//                 <p className='text-center'>لا توجد بيانات</p>
//               </TableCell>
//             </TableRow>
//           )}
//           {listOfStudents.length > 0 &&
//             listOfStudents.map((student) => (
//               <TableRow key={student.studentId} className='font-semibold bg-white'>
//                 <TableCell>{student.name}</TableCell>
//                 <TableCell>{student.phoneNumber}</TableCell>
//                 <TableCell>{student.halaqaName}</TableCell>
//                 <TableCell>{student.parentName}</TableCell>
//                 <TableCell>{student.address}</TableCell>
//                 <TableCell className='cursor-pointer'>
//                   <StudentActionsPopover id={student.studentId} />
//                 </TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//     );
//   };
  
//   export default StudentsTable;








import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import type { StudentListItem } from "../Types/student.types";
import StudentActionsPopover from "./StudentActionsPopover";

const StudentsTable = ({ listOfStudents }: { listOfStudents: StudentListItem[] }) => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader className="bg-[#CB997E]">
          <TableRow>
            <TableHead className="text-center text-white w-[20%]">اسم الطالبة</TableHead>
            <TableHead className="text-center text-white w-[15%]">رقم الجوال</TableHead>
            <TableHead className="text-center text-white w-[15%]">الحلقة</TableHead>
            <TableHead className="text-center text-white w-[20%]">ولي الأمر</TableHead>
            <TableHead className="text-center text-white w-[25%]">العنوان</TableHead>
            <TableHead className="text-center text-white w-[5%]"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {listOfStudents.length === 0 && (
            <TableRow>
              <TableCell colSpan={6}>
                <p className="text-center py-4">لا توجد بيانات</p>
              </TableCell>
            </TableRow>
          )}

          {listOfStudents.map((student) => (
            <TableRow key={student.studentId} className="font-semibold bg-white">
              <TableCell className="text-center w-[20%]">{student.name}</TableCell>
              <TableCell className="text-center w-[15%]">{student.phoneNumber}</TableCell>
              <TableCell className="text-center w-[15%]">{student.halaqaName}</TableCell>
              <TableCell className="text-center w-[20%]">{student.parentName}</TableCell>
              <TableCell className="text-center w-[25%]">{student.address}</TableCell>
              <TableCell className="text-center w-[5%]">
                <StudentActionsPopover id={student.studentId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentsTable;
