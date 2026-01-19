import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import type { MemorizationPath } from "../Types/memorizationPath.types";
import PopoverPathAction from "./PopoverPathAction";
import "../../../index.css";

const MemorizationPathsTable = ({
  listOfPaths,
}: {
  listOfPaths: MemorizationPath[];
}) => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader className="bg-[#CB997E]">
          <TableRow>
            <TableHead className="text-center text-white w-[30%]">
              اسم المسار
            </TableHead>
            <TableHead className="text-center text-white w-[35%]">من</TableHead>
            <TableHead className="text-center text-white w-[35%]">
              إلى
            </TableHead>
            <TableHead className="text-center text-white w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {listOfPaths.length === 0 && (
            <TableRow>
              <TableCell colSpan={4}>
                <p className="text-center py-4">لا توجد بيانات</p>
              </TableCell>
            </TableRow>
          )}

          {listOfPaths.map((path) => (
            <TableRow key={path.pathId} className="font-semibold bg-white">
              <TableCell className="text-center w-[30%]">{path.name}</TableCell>
              <TableCell className="text-center w-[35%]">
                {path.memorizeFrom}
              </TableCell>
              <TableCell className="text-center w-[35%]">
                {path.memorizeTo}
              </TableCell>
              <TableCell className="text-center w-[50px]">
                <PopoverPathAction id={path.pathId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MemorizationPathsTable;
