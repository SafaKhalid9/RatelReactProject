import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ShadCn/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ShadCn/select";
import type { TeacherAttendanceItem } from "../types/teacherAttendance.types";

interface Props {
  data: TeacherAttendanceItem[];
  onStatusChange: (item: TeacherAttendanceItem, newStatus: string) => void;
  isUpdating?: boolean;
  readonly?: boolean;
}

const TeacherAttendanceTable = ({ data, onStatusChange, isUpdating, readonly }: Props) => {
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
            data.map((item) => (
              <TableRow key={`${item.teacherId}-${item.halaqaId}`} className="font-semibold bg-white hover:bg-gray-50">
                <TableCell className="text-center py-4">{item.teacherName}</TableCell>
                <TableCell className="text-center py-4">
                  {item.halaqaName || `حلقة رقم (${item.halaqaId})`}
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex justify-center w-full">
                    <div className="w-[140px]">
                      <Select 
                        disabled={readonly}
                        value={item.attendanceStatus || ""} 
                        onValueChange={(value) => onStatusChange(item, value)}
                      >
                        <SelectTrigger className="w-full font-semibold">
                          <SelectValue placeholder="اختر" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Present">حاضر</SelectItem>
                          <SelectItem value="Late">متأخر</SelectItem>
                          <SelectItem value="Absent">غائب</SelectItem>
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