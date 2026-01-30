import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import type { ManhajApiItem } from "../Types/manhaj.types";
import ManhajActionsPopover from "../Components/PopoverManhajTableAction";

const ManhajsTable = ({ list }: { list: ManhajApiItem[] }) => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader className="bg-[#CB997E]">
          <TableRow>
            <TableHead className="text-center text-white">اسم المنهج</TableHead>
            <TableHead className="text-center text-white">اسم المؤلف</TableHead>
            <TableHead className="text-center text-white">
              الفئة المستهدفة
            </TableHead>
            <TableHead className="text-center text-white">عدد الدروس</TableHead>
            <TableHead className="w-[50px]" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {list.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                لا توجد بيانات
              </TableCell>
            </TableRow>
          ) : (
            list.map((m) => (
              <TableRow key={m.manhajId} className="font-semibold bg-white">
                <TableCell className="text-center">{m.name}</TableCell>
                <TableCell className="text-center">{m.authorName}</TableCell>
                <TableCell className="text-center">
                  {m.targetAudionce}
                </TableCell>
                <TableCell className="text-center">
                  {m.numberOfLessons ?? "-"}
                </TableCell>
                <TableCell className="text-center">
                  <ManhajActionsPopover id={m.manhajId} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
export default ManhajsTable;
