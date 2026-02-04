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

interface StudentsTableProps {
  listOfStudents: StudentListItem[];
}

const StudentsTable = ({ listOfStudents = [] }: StudentsTableProps) => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader className="bg-[#CB997E] font-bold">
          <TableRow>
            <TableHead className="text-center text-white">اسم الطالب</TableHead>
            <TableHead className="text-center text-white">رقم الجوال</TableHead>
            <TableHead className="text-center text-white">الحلقة</TableHead>
            <TableHead className="text-center text-white">ولي الأمر</TableHead>
            <TableHead className="text-center text-white">العنوان</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>

        <TableBody>
          {listOfStudents.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                لا توجد بيانات
              </TableCell>
            </TableRow>
          )}

          {listOfStudents.map((student) => (
            <TableRow className="font-semibold bg-white" key={student.studentId}>
              <TableCell className="text-center">{student.name}</TableCell>
              <TableCell className="text-center">{student.phoneNumber}</TableCell>
              <TableCell className="text-center">{student.halaqaName}</TableCell>
              <TableCell className="text-center">{student.parentName}</TableCell>
              <TableCell className="text-center">{student.address}</TableCell>
              <TableCell className="text-center">
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



