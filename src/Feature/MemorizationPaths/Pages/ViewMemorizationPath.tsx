import { useParams, Link } from 'react-router-dom';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import { useMemorizationPathDetails } from '../Services/memorizationPath.service';
import CustomButton from '@/Components/CustomButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ShadCn/card';

const ViewMemorizationPath = () => {
  const { id } = useParams<{ id: string }>();
  const pathId = Number(id);
  
  const { data: pathDetails, isLoading, isError } = useMemorizationPathDetails(pathId);

  if (isLoading) return <div className="p-10 text-center">جاري التحميل...</div>;
  if (isError || !pathDetails) return <div className="p-10 text-center text-red-500">حدث خطأ أو المسار غير موجود</div>;

  return (
    <div className='flex flex-col gap-5 p-5 bg-background h-full'>
      <CustomFormTitle text='تفاصيل مسار الحفظ' />
      
      <Card>
        <CardHeader>
            <CardTitle>{pathDetails.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="font-semibold text-gray-500">بداية الحفظ</h3>
                    <p className="text-lg">{pathDetails.memorizeFrom}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-500">نهاية الحفظ</h3>
                    <p className="text-lg">{pathDetails.memorizeTo}</p>
                </div>
            </div>
            
            <div className="pt-5 flex gap-4">
                <Link to={`/dashboard/memorization-paths/edit/${pathId}`}>
                    <CustomButton title="تعديل" className="w-32" onClick={() => {}} />
                </Link>
                <Link to="/dashboard/memorization-paths">
                    <CustomButton title="عودة للقائمة" className="w-32 bg-gray-500 hover:bg-gray-600" onClick={() => {}} />
                </Link>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewMemorizationPath;
