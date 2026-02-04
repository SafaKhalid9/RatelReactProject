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

const mockData = [
  { id: 1, teacher: "أحمد محمد", group: "حلقة الفجر", status: "حاضر" },
  { id: 2, teacher: "خالد عبد الله", group: "حلقة العصر", status: "غائب" },
  { id: 3, teacher: "ياسين حمزة", group: "حلقة المغرب", status: "متأخر" },
];

const TeacherAttendanceTable = () => {
  return (
    <div className="rounded-md border bg-white overflow-hidden" dir="rtl">
      <Table>
        <TableHeader className="bg-[#CB997E]">
          <TableRow>
            <TableHead className="text-center text-white font-bold py-4 px-6">اسم المعلم</TableHead>
            <TableHead className="text-center text-white font-bold py-4 px-6">اسم الحلقة</TableHead>
            {/* عرض محدد لضمان بقاء العنوان فوق المحتوى تماماً */}
            <TableHead className="text-center text-white font-bold py-4 px-6 w-[200px]">التحضير</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {mockData.map((item) => (
            <TableRow key={item.id} className="font-semibold bg-white hover:bg-gray-50 transition-colors">
              <TableCell className="text-center py-4 px-6">{item.teacher}</TableCell>
              <TableCell className="text-center py-4 px-6">{item.group}</TableCell>
              
              {/* تعديل المحاذاة هنا */}
              <TableCell className="py-4 px-6">
                <div className="flex justify-center items-center w-full">
                  <div className="w-[140px]">
                    <Select defaultValue={item.status}>
                      <SelectTrigger className="w-full text-center font-semibold border-gray-200">
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherAttendanceTable;