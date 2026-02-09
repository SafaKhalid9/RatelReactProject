import { Badge } from "@/Components/ShadCn/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import type { HalaqaListItem } from "../Types/halaqa.types";
import HalaqaActionsPopover from "./HalaqaActionsPopover";
import "../../../index.css";

const statusVariant: Record<string, string> = {
  مبتدئ: "outline",
  متوسط: "default",
  متقدم: "secondary",
};

type Props = {
  data: HalaqaListItem[];
  teachersMap: Map<number, string>;
};

const HalaqasTable = ({ data, teachersMap }: Props) => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader className="bg-[#CB997E]">
          <TableRow>
            <TableHead className="text-center text-white">الأسم</TableHead>
            <TableHead className="text-center text-white">المعلم</TableHead>
            <TableHead className="text-center text-white">الفترة</TableHead>
            <TableHead className="text-center text-white">المستوى</TableHead>
            <TableHead className="text-center text-white">عدد الطلاب</TableHead>
            <TableHead className="text-center text-white">
              نسبة الحضور
            </TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={7}>
                <p className="text-center py-4">لا توجد حلقات</p>
              </TableCell>
            </TableRow>
          )}

          {data.map((item) => (
            <TableRow key={item.halaqaId}>
              <TableCell className="font-medium text-center">
                {item.name}
              </TableCell>
              <TableCell className="text-center">
                {teachersMap.get(item.teacherId) ?? "—"}
              </TableCell>

              <TableCell className="text-center">{item.period}</TableCell>

              <TableCell className="text-center">
                <Badge
                  variant={
                    statusVariant[item.status] as
                      | "default"
                      | "secondary"
                      | "outline"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>

              <TableCell className="text-center">
                {item.numberOfStudents}
              </TableCell>

              <TableCell className="text-center">
                {item.averageAttendancePercentage}%
              </TableCell>

              <TableCell className="text-center">
                <HalaqaActionsPopover id={item.halaqaId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HalaqasTable;
