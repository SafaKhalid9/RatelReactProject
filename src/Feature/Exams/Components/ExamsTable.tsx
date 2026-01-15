ExamsTable.tsx;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import { ExamListItem } from "../Types/exam.types";
import ExamActionsPopover from "./ExamActionsPopover";
import { Badge } from "@/Components/ShadCn/badge";

const ExamsTable = ({ listOfExams }: { listOfExams: ExamListItem[] }) => {
  return (
    <Table>
      <TableHeader className="bg-[#CB997E]">
        <TableRow>
          <TableHead className="text-start text-white">الحلقة</TableHead>
          <TableHead className="text-start text-white">نوع الاختبار</TableHead>
          <TableHead className="text-start text-white">التصنيف</TableHead>
          <TableHead className="text-start text-white">الدرجة</TableHead>
          <TableHead className="text-start text-white">تاريخ البدء</TableHead>
          <TableHead className="text-start text-white">
            تاريخ الانتهاء
          </TableHead>
          <TableHead className="text-start text-white w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfExams.length === 0 && (
          <TableRow>
            <TableCell colSpan={7}>
              <p className="text-center">لا توجد اختبارات</p>
            </TableCell>
          </TableRow>
        )}
        {listOfExams.length > 0 &&
          listOfExams.map((exam) => (
            <TableRow key={exam.id} className="font-semibold bg-white">
              <TableCell>{exam.halaqaName}</TableCell>
              <TableCell>{exam.examTypeName}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    exam.examCategory === "Manhaj" ? "default" : "secondary"
                  }
                >
                  {exam.examCategory === "Manhaj" ? "منهج" : "حفظ"}
                </Badge>
              </TableCell>
              <TableCell>{exam.examDegree}</TableCell>
              <TableCell>
                {new Date(exam.startDateTime).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(exam.endDateTime).toLocaleDateString()}
              </TableCell>
              <TableCell className="cursor-pointer">
                <ExamActionsPopover id={exam.id} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default ExamsTable;
