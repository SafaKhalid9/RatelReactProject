import { useParams, useNavigate } from "react-router";
import { useGetUserDetails } from "../services/useGetUserDetails";
import {
  Mail,
  Smartphone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  GraduationCap,
  Briefcase,
  CreditCard,
  Book,
  Globe,
  ArrowRight,
  UserCircle,
  BookOpen,
  UserCog,
  Heart,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/Components/ShadCn/card";
import { Badge } from "@/Components/ShadCn/badge";
import { Button } from "@/Components/ShadCn/button";
import { Skeleton } from "@/Components/ShadCn/skeleton";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useGetUserDetails(id);

  if (isLoading) {
    return (
      <div className="p-6 space-y-6" dir="rtl">
        <Skeleton className="h-12 w-1/4 mb-4" />
        <Card className="w-full max-w-4xl mx-auto shadow-lg border-t-10 border-t-[#CB997E]">
          <CardHeader className="text-center pb-2">
            <Skeleton className="h-10 w-1/3 mx-auto" />
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-6 w-1/4" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          حدث خطأ أثناء تحميل البيانات
        </h2>
        <Button
          onClick={() => navigate("/dashboard/users")}
          className="bg-[#CB997E] hover:bg-[#CB997E]/80"
        >
          العودة للقائمة
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => navigate("/dashboard/users")}
          className="flex items-center gap-2 border-gray-300 hover:bg-gray-100"
        >
          <ArrowRight className="w-4 h-4 ml-1" />
          العودة للمستخدمين
        </Button>
        <div className="flex gap-2">
          {user.roles.map((role) => (
            <Badge
              key={role}
              className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1 text-sm"
            >
              {role}
            </Badge>
          ))}
        </div>
      </div>

      <Card className="w-full max-w-4xl mx-auto shadow-lg border-t-10 border-t-[#CB997E] bg-white rounded-t-2xl rounded-b-2xl">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-4 border-2 border-orange-100">
            <UserCircle className="w-16 h-16 text-[#CB997E]" />
          </div>
          <CardTitle className="text-3xl font-bold text-[#4a4a4a] mb-1">
            {user.fullName}
          </CardTitle>
          <p className="text-gray-500 text-lg">@{user.userName}</p>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Basic Info Section */}
            <InfoItem
              icon={<Mail />}
              label="البريد الإلكتروني"
              value={user.email}
            />
            <InfoItem
              icon={<Smartphone />}
              label="رقم الجوال"
              value={user.phoneNumber}
            />
            <InfoItem icon={<MapPin />} label="العنوان" value={user.address} />
            <InfoItem
              icon={<CheckCircle2 />}
              label="الحالة (مجاز؟)"
              value={user.isMojaz ? "نعم" : "لا"}
              statusColor={user.isMojaz ? "text-green-600" : "text-red-500"}
            />

            {/* Teacher Details if available */}
            {user.teacher && (
              <>
                <div className="col-span-full border-t border-gray-100 my-4 pt-8">
                  <h3 className="text-xl font-bold text-[#CB997E] mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6" />
                    بيانات إضافية
                  </h3>
                </div>

                <InfoItem
                  icon={<CreditCard />}
                  label="رقم الهوية"
                  value={user.teacher.nationalId}
                />
                <InfoItem
                  icon={<GraduationCap />}
                  label="المؤهل العلمي"
                  value={user.teacher.education}
                />
                <InfoItem
                  icon={<Briefcase />}
                  label="الوظيفة"
                  value={user.teacher.jobTitle}
                />
                <InfoItem
                  icon={<UserCog />}
                  label="الخبرة"
                  value={user.teacher.experience}
                />
                <InfoItem
                  icon={<BookOpen />}
                  label="الدورات"
                  value={user.teacher.courses}
                />
                <InfoItem
                  icon={<Heart />}
                  label="الحالة الاجتماعية"
                  value={user.teacher.maritalStatus}
                />
                <InfoItem
                  icon={<Book />}
                  label="مقدار الحفظ"
                  value={user.teacher.amountOfMemorization}
                />
                <InfoItem
                  icon={<Globe />}
                  label="رقم الجواز"
                  value={user.teacher.passportNumber}
                />
                <InfoItem
                  icon={<Calendar />}
                  label="مستوى الحفظ"
                  value={user.teacher.memorizationLevel}
                />
                <InfoItem
                  icon={<CreditCard />}
                  label="رقم الهوية"
                  value={user.nationalId}
                />

                <InfoItem
                  icon={<Heart />}
                  label="الحالة الاجتماعية"
                  value={user.maritalStatus}
                />

                <InfoItem
                  icon={<Book />}
                  label="مقدار الحفظ"
                  value={user.amountOfMemorization}
                />
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  statusColor = "text-gray-900",
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number | undefined;
  statusColor?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-gray-500 font-medium">
        <span className="text-[#CB997E] w-5 h-5">{icon}</span>
        {label}
      </div>
      <div
        className={`text-lg font-semibold bg-gray-50 p-4 rounded-xl border border-gray-100 ${statusColor}`}
      >
        {value || "غير متوفر"}
      </div>
    </div>
  );
}
