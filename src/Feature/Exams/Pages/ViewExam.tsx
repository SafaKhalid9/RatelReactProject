import { useParams, Link } from 'react-router-dom';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import { useExamDetails } from '../Services/exam.service';
import CustomButton from '@/Components/CustomButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ShadCn/card';
import { Badge } from '@/Components/ShadCn/badge';

const ViewExam = () => {
  const { id } = useParams<{ id: string }>();
  const examId = Number(id);
  
  const { data: exam, isLoading, isError } = useExamDetails(examId);

  if (isLoading) return <div className="p-10 text-center">جاري التحميل...</div>;
  if (isError || !exam) return <div className="p-10 text-center text-red-500">حدث خطأ أو الاختبار غير موجود</div>;

  return (
    <div className='flex flex-col gap-5 p-5 bg-background h-full'>
      <CustomFormTitle text='تفاصيل الاختبار' />
      
      <Card>
        <CardHeader className="bg-slate-50 dark:bg-slate-900 border-b">
            <div className="flex justify-between items-center">
                <CardTitle className="text-xl">
                    اختبار {exam.examTypeName} - {exam.halaqaName}
                </CardTitle>
                <Badge className={exam.examCategory === 'Manhaj' ? 'bg-primary' : 'bg-secondary'}>
                    {exam.examCategory === 'Manhaj' ? 'منهج' : 'حفظ'}
                </Badge>
            </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="font-semibold text-gray-500 text-sm">التاريخ والوقت</h3>
                    <p className="text-lg font-medium">
                        {new Date(exam.startDateTime).toLocaleDateString()} {new Date(exam.startDateTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                    <p className="text-sm text-gray-400">
                        إلى {new Date(exam.endDateTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                </div>
                
                 <div>
                    <h3 className="font-semibold text-gray-500 text-sm">الدرجة الكلية</h3>
                    <p className="text-lg font-medium">{exam.examDegree}</p>
                </div>

                {exam.examCategory === 'Manhaj' && (
                     <div>
                        <h3 className="font-semibold text-gray-500 text-sm">المنهج</h3>
                        <p className="text-lg font-medium">{exam.manhajName}</p>
                    </div>
                )}
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md">
                 <h3 className="font-semibold text-gray-500 text-sm mb-2">ملاحظات</h3>
                 <p className="whitespace-pre-wrap">{exam.notes || 'لا توجد ملاحظات'}</p>
            </div>

            <div className="pt-5 flex gap-4 border-t mt-4">
                <Link to={`/dashboard/exams/edit/${examId}`}>
                    <CustomButton title="تعديل الاختبار" className="w-32" onClick={() => {}} />
                </Link>
                <Link to="/dashboard/exams">
                    <CustomButton title="عودة للقائمة" className="w-32 bg-gray-500 hover:bg-gray-600" onClick={() => {}} />
                </Link>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewExam;
