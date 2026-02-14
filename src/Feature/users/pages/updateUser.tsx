"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  User,
  UserCircle,
  CreditCard,
  Calendar,
  GraduationCap,
  Smartphone,
  UserCog,
  Home,
  BookOpen,
  Mail,
  Heart,
  Lock,
  Book,
  Globe,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ShadCn/form";
import { Input } from "@/Components/ShadCn/input";
import { Button } from "@/Components/ShadCn/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/Components/ShadCn/card";
import { useUpdateUser } from "../services/useUpdateUser";
import { useGetUserDetails } from "../services/useGetUserDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Skeleton } from "@/Components/ShadCn/skeleton";

const formSchema = z
  .object({
    fullName: z.string().min(2, "الاسم يجب أن يكون أكثر من حرفين"),
    userName: z.string().min(3, "اسم المستخدم يجب أن يكون 3 أحرف على الأقل"),
    nationalId: z.string().min(1, "رقم الهوية مطلوب"),
    birthDate: z.string().min(1, "تاريخ الميلاد مطلوب"),
    education: z.string().min(1, "المؤهل العلمي مطلوب"),
    phoneNumber: z.string().min(1, "رقم الجوال مطلوب"),
    experience: z.string().optional(),
    address: z.string().min(1, "العنوان مطلوب"),
    courses: z.string().optional(),
    email: z.email("البريد الإلكتروني غير صحيح"),
    maritalStatus: z.string().min(1, "الحالة الاجتماعية مطلوبة"),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
    isMojaz: z.boolean(),
    memorizationLevel: z.string().optional(),
    passportNumber: z.string().optional(),
    jobTitle: z.string().optional(),
    amountOfMemorization: z.string().optional(),
    roles: z.array(z.string()).min(1, "يجب اختيار دور واحد على الأقل"),
  })
  .refine(
    (data) => {
      if (data.password) {
        return data.password === data.confirmPassword;
      }
      return true;
    },
    {
      message: "كلمات المرور غير متطابقة",
      path: ["confirmPassword"],
    },
  );

export type UserFormType = z.infer<typeof formSchema>;

export default function UpdateUser() {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useGetUserDetails(id);

  const form = useForm<UserFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      userName: "",
      nationalId: "",
      birthDate: "",
      education: "",
      phoneNumber: "",
      experience: "",
      address: "",
      courses: "",
      email: "",
      maritalStatus: "",
      password: "",
      confirmPassword: "",
      isMojaz: false,
      memorizationLevel: "",
      passportNumber: "",
      jobTitle: "",
      roles: [],
    },
  });

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [user, form]);

  const { mutate: updateUser, isPending } = useUpdateUser();

  function onSubmit(values: UserFormType) {
    if (!id) return;
    updateUser({ id, data: values });
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen p-4">
        <Skeleton className="w-full max-w-4xl h-[800px]" />
      </div>
    );
  }

  return (
    <div
      className="flex justify-center items-center w-full min-h-screen p-4"
      dir="rtl"
    >
      <Card className="w-full max-w-4xl shadow-lg border-t-10 border-t-[#CB997E] bg-white border-x-0 rounded-t-2xl rounded-b-2xl">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold text-[#4a4a4a]">
            تعديل بيانات المستخدم
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <User className="w-5 h-5 text-gray-800" />
                        الاسم الرباعي
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="الاسم الكامل"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* User Name */}
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <UserCircle className="w-5 h-5 text-gray-800" />
                        اسم المستخدم
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="اسم المستخدم"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* National ID */}
                <FormField
                  control={form.control}
                  name="nationalId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <CreditCard className="w-5 h-5 text-gray-800" />
                        رقم الهوية
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="رقم الهوية الوطنية"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Birth Date */}
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Calendar className="w-5 h-5 text-gray-800" />
                        تاريخ الميلاد
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Education */}
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <GraduationCap className="w-5 h-5 text-gray-800" />
                        المؤهل العلمي
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        key={form.watch("education") || "education"}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12 w-full text-right text-lg border-gray-300 focus:ring-orange-200">
                            <SelectValue placeholder="اختر المؤهل العلمي" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent dir="rtl">
                          <SelectItem value="high_school">
                            ثانوية عامة
                          </SelectItem>
                          <SelectItem value="bachelor">بكالوريوس</SelectItem>
                          <SelectItem value="master">ماجستير</SelectItem>
                          <SelectItem value="phd">دكتوراه</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Smartphone className="w-5 h-5 text-gray-800" />
                        رقم الجوال
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="رقم الجوال"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Experience */}
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <UserCog className="w-5 h-5 text-gray-800" />
                        الخبرة
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="سنوات الخبرة"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Address */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Home className="w-5 h-5 text-gray-800" />
                        العنوان
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="عنوان السكن"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Courses */}
                <FormField
                  control={form.control}
                  name="courses"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <BookOpen className="w-5 h-5 text-gray-800" />
                        الدورات
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="الدورات التدريبية"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Mail className="w-5 h-5 text-gray-800" />
                        الإيميل
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="البريد الإلكتروني"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Marital Status */}
                <FormField
                  control={form.control}
                  name="maritalStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Heart className="w-5 h-5 text-gray-800" />
                        الحالة الإجتماعية
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        key={form.watch("maritalStatus") || "maritalStatus"}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12 w-full text-right text-lg border-gray-300 focus:ring-orange-200">
                            <SelectValue placeholder="اختر الحالة الإجتماعية" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent dir="rtl">
                          <SelectItem value="single">أعزب/عزباء</SelectItem>
                          <SelectItem value="married">متزوج/متزوجة</SelectItem>
                          <SelectItem value="divorced">مطلقة</SelectItem>
                          <SelectItem value="widowed">أرملة</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Lock className="w-5 h-5 text-gray-800" />
                        كلمة المرور (اتركه فارغًا لعدم التغيير)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="كلمة مرور جديدة"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Lock className="w-5 h-5 text-gray-800" />
                        تأكيد كلمة المرور الجديدة
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="أعد كتابة كلمة المرور الجديدة"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Memorization Level */}
                <FormField
                  control={form.control}
                  name="memorizationLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Book className="w-5 h-5 text-gray-800" />
                        مستوى الحفظ
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="مستوى الحفظ في القرآن"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Amount Of Memorization */}
                <FormField
                  control={form.control}
                  name="amountOfMemorization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Book className="w-5 h-5 text-gray-800" />
                        مقدار الحفظ
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="مقدار الحفظ في القرآن"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Passport Number */}
                <FormField
                  control={form.control}
                  name="passportNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Globe className="w-5 h-5 text-gray-800" />
                        رقم الجواز
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="رقم جواز السفر"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Job Title */}
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <Briefcase className="w-5 h-5 text-gray-800" />
                        الوظيفة
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="المسمى الوظيفي"
                          {...field}
                          className="h-12 text-right text-lg border-gray-300 focus:ring-orange-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Roles */}
                <FormField
                  control={form.control}
                  name="roles"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <ShieldCheck className="w-5 h-5 text-gray-800" />
                        الأدوار (الصلاحيات)
                      </FormLabel>
                      <Select
                        onValueChange={(val) => field.onChange([val])}
                        value={field.value?.[0]}
                        key={form.watch("roles")?.[0] || "roles"}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12 w-full text-right text-lg border-gray-300 focus:ring-orange-200">
                            <SelectValue placeholder="اختر الدور" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent dir="rtl">
                          <SelectItem value="أداري">إداري</SelectItem>
                          {/* <SelectItem value="محفظ">محفظ</SelectItem>
                          <SelectItem value="طالب">طالب</SelectItem> */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Is Mojaz */}
                <FormField
                  control={form.control}
                  name="isMojaz"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-lg font-medium text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-gray-800" />
                        هل أنت مجاز؟
                      </FormLabel>
                      <Select
                        onValueChange={(val) => field.onChange(val === "true")}
                        value={field.value ? "true" : "false"}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12 w-full text-right text-lg border-gray-300 focus:ring-orange-200">
                            <SelectValue placeholder="هل أنت مجاز؟" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent dir="rtl">
                          <SelectItem value="true">نعم</SelectItem>
                          <SelectItem value="false">لا</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full md:w-1/2 rounded-full h-14 text-xl font-bold bg-[#CB997E] hover:bg-[#CB997E]/80 text-white transition-colors"
                >
                  حفظ التعديلات
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
