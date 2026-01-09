import { useParams, Link } from 'react-router-dom';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import { useStudentDetails } from '../Services/student.service';
import CustomButton from '@/Components/CustomButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ShadCn/card';
import { Badge } from '@/Components/ShadCn/badge';

const ViewStudent = () => {
  const { id } = useParams<{ id: string }>();
  const studentId = Number(id);
  
  const { data: student, isLoading, isError } = useStudentDetails(studentId);

  if (isLoading) return <div className="p-10 text-center">جاري التحميل...</div>;
  if (isError || !student) return <div className="p-10 text-center text-red-500">حدث خطأ أو الطالبة غير موجودة</div>;

  return (
    <div className='flex flex-col gap-5 p-5 bg-background h-full'>
      <CustomFormTitle text='ملف الطالبة' />
      
      <Card>
        <CardHeader className="bg-slate-50 dark:bg-slate-900">
            <div className="flex justify-between items-center">
                <CardTitle className="text-2xl">{student.name}</CardTitle>
                <Badge variant="outline">{student.studyPeriod}</Badge>
            </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="font-semibold text-gray-500 text-sm">ولي الأمر</h3>
                    <p className="text-lg font-medium">{student.parentName}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-500 text-sm">تاريخ الميلاد</h3>
                    <p className="text-lg font-medium">{new Date(student.birthDate).toLocaleDateString('ar-EG')}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-500 text-sm">رقم الجوال</h3>
                    <p className="text-lg font-medium">{student.phoneNumber}</p>
                </div>
                
                 <div>
                    <h3 className="font-semibold text-gray-500 text-sm">العنوان</h3>
                    <p className="text-lg font-medium">{student.address}</p>
                </div>
                 <div>
                    <h3 className="font-semibold text-gray-500 text-sm">نسبة الانتظام</h3>
                    <p className="text-lg font-medium text-green-600">{student.attendanceRate}%</p>
                </div>
                 <div>
                    <h3 className="font-semibold text-gray-500 text-sm">تقييم الحفظ والمراجعة</h3>
                    <p className="text-lg font-medium text-blue-600">{student.memorizationAndReviewRating}/10</p>
                </div>
            </div>

             <div>
                <h3 className="font-semibold text-gray-500 text-sm mb-2">المناهج المرتبطة</h3>
                <div className="flex gap-2 flex-wrap">
                    {student.manahjs && student.manahjs.length > 0 ? (
                        student.manahjs.map((m, idx) => (
                            <Badge key={idx} className="bg-[#CB997E]">{m}</Badge>
                        ))
                    ) : (
                        <span className="text-gray-400">لا توجد مناهج</span>
                    )}
                </div>
            </div>

            <div className="pt-5 flex gap-4 border-t mt-4">
                <Link to={`/dashboard/students/edit/${studentId}`}>
                    <CustomButton title="تعديل البيانات" className="w-32" onClick={() => {}} />
                </Link>
                <Link to="/dashboard/students">
                    <CustomButton title="عودة للقائمة" className="w-32 bg-gray-500 hover:bg-gray-600" onClick={() => {}} />
                </Link>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewStudent;
