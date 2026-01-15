import { Badge } from "@/Components/ShadCn/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import { HalaqaListItem } from "../Types/halaqa.types";
import HalaqaActionsPopover from "./HalaqaActionsPopover";

const HalaqasTable = ({ data }: { data: HalaqaListItem[] }) => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader className="bg-[#CB997E]">
          <TableRow>
            <TableHead className="text-start text-white">Name</TableHead>
            <TableHead className="text-start text-white">Teacher</TableHead>
            <TableHead className="text-start text-white">Period</TableHead>
            <TableHead className="text-start text-white">Status</TableHead>
            <TableHead className="text-start text-white">Students</TableHead>
            <TableHead className="text-start text-white">Attend. %</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={7}>
                <p className="text-center py-4">No Halaqas Found</p>
              </TableCell>
            </TableRow>
          )}
          {data.map((item) => (
            <TableRow key={item.halaqaId}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.teacherName}</TableCell>
              <TableCell>{item.period}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    item.status === "Advanced"
                      ? "default"
                      : item.status === "Intermediate"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.numberOfStudents}</TableCell>
              <TableCell>{item.averageAttendancePercentage}%</TableCell>
              <TableCell>
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
