import { useParams } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import { useHalaqaDetails } from "../Services/halaqa.service";
import { Badge } from "@/Components/ShadCn/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";

const ViewHalaqa = () => {
  const { id } = useParams();
  const { data: details, isLoading } = useHalaqaDetails(Number(id));

  if (isLoading)
    return <div className="p-10 text-center">Loading details...</div>;
  if (!details)
    return (
      <div className="p-10 text-center text-red-500">
        Halaqa details not found
      </div>
    );

  return (
    <div className="flex flex-col gap-6 p-5">
      <CustomFormTitle title="Halaqa Details" />

      {/* Header Info */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <span className="font-semibold text-gray-500 text-sm block uppercase tracking-wide">
              Halaqa Name
            </span>
            <span className="text-xl font-medium">{details.name}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-500 text-sm block uppercase tracking-wide">
              Teacher
            </span>
            <span className="text-lg">{details.teacherName}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-500 text-sm block uppercase tracking-wide">
              Period
            </span>
            <span className="text-lg">{details.period}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-500 text-sm block uppercase tracking-wide mb-2">
              Academic Paths
            </span>
            <div className="flex flex-wrap gap-2">
              {details.paths.map((p) => (
                <Badge key={p.pathId} variant="outline" className="text-sm">
                  {p.name}
                </Badge>
              ))}
              {details.paths.length === 0 && (
                <span className="text-gray-400 italic">No paths assigned</span>
              )}
            </div>
          </div>
          <div className="md:col-span-2">
            <span className="font-semibold text-gray-500 text-sm block uppercase tracking-wide mb-2">
              Manhajs
            </span>
            <div className="flex flex-wrap gap-2">
              {details.manhajs.map((m) => (
                <Badge key={m.manhajId} variant="secondary" className="text-sm">
                  {m.name}
                </Badge>
              ))}
              {details.manhajs.length === 0 && (
                <span className="text-gray-400 italic">
                  No manhajs assigned
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h2 className="text-lg font-bold text-gray-800">
            Enrolled Students & Performance
          </h2>
        </div>
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="font-bold">Student Name</TableHead>
              <TableHead className="font-bold text-center">
                Sessions Attended
              </TableHead>
              <TableHead className="font-bold text-center">
                Attendance %
              </TableHead>
              <TableHead className="font-bold text-center">
                Memorized Pages
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {details.students.map((s) => (
              <TableRow key={s.studentId} className="hover:bg-gray-50">
                <TableCell className="font-medium">{s.name}</TableCell>
                <TableCell className="text-center">
                  {s.sessionsAttended}
                </TableCell>
                <TableCell className="text-center">
                  <span
                    className={`font-semibold ${
                      s.attendancePercentage >= 80
                        ? "text-green-600"
                        : "text-amber-600"
                    }`}
                  >
                    {s.attendancePercentage}%
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  {s.memorizedPages}
                </TableCell>
              </TableRow>
            ))}
            {details.students.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-8 text-gray-500"
                >
                  No students enrolled in this halaqa yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ViewHalaqa;
