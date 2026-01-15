import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import type { AppreciationGrade } from "../Types/appreciationGrade.types";
import AppreciationGradeActionsPopover from "./AppreciationGradeActionsPopover";
import { Badge } from "@/Components/ShadCn/badge";

interface AppreciationGradesTableProps {
  grades: AppreciationGrade[];
}

const AppreciationGradesTable: React.FC<AppreciationGradesTableProps> = ({
  grades,
}) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader className="bg-[#CB997E]">
          <TableRow>
            <TableHead className="text-start text-white">
              رمز التقدير (Appreciation ID)
            </TableHead>
            <TableHead className="text-start text-white">الحد الأدنى</TableHead>
            <TableHead className="text-start text-white">الحد الأعلى</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grades.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                لا توجد تقديرات مضافة
              </TableCell>
            </TableRow>
          ) : (
            grades.map((grade) => (
              <TableRow
                key={grade.id}
                className="font-semibold bg-white even:bg-slate-50"
              >
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <Badge variant="outline">{grade.appreciationId}</Badge>
                    {grade.appreciationName && (
                      <span>{grade.appreciationName}</span>
                    )}
                  </div>
                </TableCell>
                <TableCell>{grade.minimumScore}</TableCell>
                <TableCell>{grade.maximumScore}</TableCell>
                <TableCell>
                  <AppreciationGradeActionsPopover id={grade.id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppreciationGradesTable;
