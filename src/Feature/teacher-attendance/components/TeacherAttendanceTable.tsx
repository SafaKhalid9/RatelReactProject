// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/Components/ShadCn/table";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ShadCn/select";

// const mockData = [
//   { id: 1, teacher: "أحمد محمد", group: "حلقة الفجر", status: "حاضر" },
//   { id: 2, teacher: "خالد عبد الله", group: "حلقة العصر", status: "غائب" },
//   { id: 3, teacher: "ياسين حمزة", group: "حلقة المغرب", status: "متأخر" },
// ];

// const TeacherAttendanceTable = () => {
//   return (
//     <div className="rounded-md border bg-white overflow-hidden" dir="rtl">
//       <Table>
//         <TableHeader className="bg-[#CB997E]">
//           <TableRow>
//             <TableHead className="text-center text-white font-bold py-4 px-6">اسم المعلم</TableHead>
//             <TableHead className="text-center text-white font-bold py-4 px-6">اسم الحلقة</TableHead>
//             {/* عرض محدد لضمان بقاء العنوان فوق المحتوى تماماً */}
//             <TableHead className="text-center text-white font-bold py-4 px-6 w-[200px]">التحضير</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {mockData.map((item) => (
//             <TableRow key={item.id} className="font-semibold bg-white hover:bg-gray-50 transition-colors">
//               <TableCell className="text-center py-4 px-6">{item.teacher}</TableCell>
//               <TableCell className="text-center py-4 px-6">{item.group}</TableCell>
              
//               {/* تعديل المحاذاة هنا */}
//               <TableCell className="py-4 px-6">
//                 <div className="flex justify-center items-center w-full">
//                   <div className="w-[140px]">
//                     <Select defaultValue={item.status}>
//                       <SelectTrigger className="w-full text-center font-semibold border-gray-200">
//                         <SelectValue placeholder="اختر الحالة" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="حاضر" className="text-600 font-bold">حاضر</SelectItem>
//                         <SelectItem value="متأخر" className="text-600 font-bold">متأخر</SelectItem>
//                         <SelectItem value="غائب" className="text-600 font-bold">غائب</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default TeacherAttendanceTable;











import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";
import type { TeacherAttendanceItem } from "../types/teacherAttendance.types";

interface Props {
  data: TeacherAttendanceItem[];
  onStatusChange: (item: TeacherAttendanceItem, newStatus: string) => void;
  isUpdating?: boolean;
}

const TeacherAttendanceTable = ({ data, onStatusChange, isUpdating }: Props) => {
  return (
    <div className={`rounded-md border bg-white overflow-hidden ${isUpdating ? "opacity-70" : ""}`} dir="rtl">
      <Table>
        <TableHeader className="bg-[#CB997E]">
          <TableRow>
            <TableHead className="text-center text-white font-bold py-4">اسم المعلم</TableHead>
            <TableHead className="text-center text-white font-bold py-4">اسم الحلقة</TableHead>
            <TableHead className="text-center text-white font-bold py-4 w-[200px]">التحضير</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-10 text-gray-500 font-bold">لا توجد بيانات متاحة</TableCell>
            </TableRow>
          ) : (
            data.map((item, index) => (
              <TableRow key={index} className="font-semibold bg-white hover:bg-gray-50 transition-colors">
                <TableCell className="text-center py-4 px-6">{item.teacherName}</TableCell>
                <TableCell className="text-center py-4 px-6">{item.halaqaName}</TableCell>
                <TableCell className="py-4 px-6">
                  <div className="flex justify-center items-center w-full">
                    <div className="w-[140px]">
                      <Select 
                        defaultValue={item.attendanceStatus || ""} 
                        onValueChange={(value) => onStatusChange(item, value)}
                      >
                        <SelectTrigger className="w-full text-center font-semibold">
                          <SelectValue placeholder="اختر الحالة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="حاضر" className="text-600 font-bold">حاضر</SelectItem>
                          <SelectItem value="متأخر" className="text-600 font-bold">متأخر</SelectItem>
                          <SelectItem value="غائب" className="text-600 font-bold">غائب</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherAttendanceTable;