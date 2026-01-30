import { useParams } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import { useHalaqaDetails, useTeachers } from "../Services/halaqa.service";
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
  const { data: teachers } = useTeachers();

  const teacherName =
    teachers?.find((t) => t.id === details?.teacherId)?.fullName || "غير محدد";

  if (isLoading)
    return <div className="p-10 text-center">جاري التحميل ...</div>;

  if (!details)
    return (
      <div className="p-10 text-center text-red-500">
        لم يتم العثور على تفاصيل الحلقة
      </div>
    );

  return (
    <div className="min-h-screen bg-(--background-page) p-6 pt-0 flex justify-center">
      <div className="w-full max-w-5xl bg-(--white-color) rounded-2xl border-t-15 border-secondary p-6 pt-0">
        <CustomFormTitle title={`حلقة ${details.name}`} />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 h-[40%] gap-6 items-start">
          <div className=" md:col-span-1 space-y-3 h-full text-(--font-title-label-color) pt-[10%]">
            <p className="text-center text-xl">
              <span className="font-semibold text-xl">المعلم:</span>{" "}
              {teacherName}
            </p>
            <div className="flex justify-evenly gap-8">
              <p className="text-center text-xl">
                <span className="font-semibold text-xl">الفترة:</span>{" "}
                {details.period}
              </p>

              <p className="text-center text-xl">
                <span className="font-semibold text-xl">السعة:</span>{" "}
                {details.capacity}
              </p>
            </div>
            <div>
              <p className="font-semibold mt-4 mb-1 text-center text-xl">
                المناهج الدراسية:
              </p>
              <div className="flex flex-wrap justify-evenly gap-2">
                {details.manhajs?.map((m) => (
                  <Badge
                    key={m.manhajId}
                    className="bg-white text-center text-base font-normal"
                  >
                    <span className="font-semibold text-xl">-</span> {m.name}
                  </Badge>
                ))}
                {(!details.manhajs || details.manhajs.length === 0) && (
                  <span className="text-gray-400 text-center  text-xl">
                    لا توجد مناهج
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold mt-4 mb-1 text-center text-xl ">
                مسارات الحفظ:
              </p>
              <div className="flex flex-wrap justify-evenly gap-2 ">
                {details.paths?.map((p) => (
                  <Badge
                    key={p.pathId}
                    className="bg-white text-center text-base  font-normal"
                  >
                    <span className="font-semibold text-xl">-</span> {p.name}
                  </Badge>
                ))}
                {(!details.paths || details.paths.length === 0) && (
                  <span className="text-gray-400 text-xl">لا توجد مسارات</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center h-full items-center">
            <img
              src="../../../../public/quran.jpg"
              alt="quran"
              className="rounded-2xl shadow-md h-full max-w-[250px] object-cover"
            />
          </div>
        </div>
        <h2 className="mt-15 text-secondary text-2xl font-bold text-center">
          طلاب الحلقة
        </h2>
        <div className="bg-white rounded-lg h-45 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-center">
                  اسم الطالب
                </TableHead>
                <TableHead className="font-bold text-center">
                  عدد الجلسات المحضورة
                </TableHead>
                <TableHead className="font-bold text-center">
                  نسبة الحضور
                </TableHead>
                <TableHead className="font-bold text-center">
                  الصفحات المحفوظة
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.students?.map((s) => (
                <TableRow
                  key={s.studentId}
                  className="hover:bg-(--background-page)"
                >
                  <TableCell className="font-medium text-center">
                    {s.name}
                  </TableCell>
                  <TableCell className="text-center">
                    {s.sessionsAttended}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    <span
                      className={
                        s.attendancePercentage >= 80
                          ? "text-(--primary)"
                          : "text-secondary"
                      }
                    >
                      {s.attendancePercentage}%
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    {s.memorizedPages}
                  </TableCell>
                </TableRow>
              ))}

              {(!details.students || details.students.length === 0) && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-15 text-gray-500"
                  >
                    لا يوجد طلاب مسجلين
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {/* زر رجوع */}
        {/* <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-10 py-2 rounded-md text-white bg-[var(--primary)] hover:opacity-90"
          >
            رجوع
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ViewHalaqa;
