// import { useEffect } from "react";
// import { z } from "zod/v3";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/Components/ShadCn/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/Components/ShadCn/form";
// import { Input } from "@/Components/ShadCn/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ShadCn/select";
// import { Textarea } from "@/Components/ShadCn/Textarea";
// import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
// import MultipleSelector, { type Option } from "@/Components/ShadCn/multiselect";
// import { useHalaqas } from "@/Feature/Halagas/Services/halaqa.service";
// import { useManhajs } from "@/Feature/Mnahj/Services/manhaj.service";
// import { useGetTeachers } from "../services/useGetTeachers";
// import { useGetExamDetails } from "../services/useGetExamDetails";
// import { useUpdateExam } from "../services/useUpdateExam";
// import { useNavigate, useParams } from "react-router-dom";
// import { Skeleton } from "@/Components/ShadCn/skeleton";

// const schema = z.object({
//   halaqaIds: z
//     .array(z.object({ label: z.string(), value: z.string() }))
//     .min(1, "يجب اختيار حلقة واحدة على الأقل"),
//   manhajIds: z
//     .array(z.object({ label: z.string(), value: z.string() }))
//     .min(1, "يجب اختيار منهج واحد على الأقل"),
//   teacherIds: z
//     .array(z.object({ label: z.string(), value: z.string() }))
//     .min(1, "يجب اختيار معلم واحد على الأقل"),
//   examTypeId: z.string().min(1, "يجب اختيار نوع الاختبار"),
//   examCategory: z.string().min(1, "يجب اختيار تصنيف الاختبار"),
//   examDegree: z.coerce.number().min(1, "يجب أن تكون الدرجة 1 على الأقل"),
//   startDateTime: z.string().min(1, "يجب اختيار تاريخ ووقت البدء"),
//   endDateTime: z.string().min(1, "يجب اختيار تاريخ ووقت الانتهاء"),
//   notes: z.string().optional(),
// });

// type FormValues = z.infer<typeof schema>;

// const formatDateTimeLocal = (dateString: string) => {
//   if (!dateString) return "";
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   return `${year}-${month}-${day}T${hours}:${minutes}`;
// };

// export default function EditExam() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const { data: examData, isLoading: examLoading } = useGetExamDetails(id!);
//   const { mutate, isPending } = useUpdateExam();

//   // Queries
//   const { data: halaqasData, isLoading: halaqasLoading } = useHalaqas({
//     page: 1,
//     pageSize: 1000,
//   });
//   const { data: manhajsData, isLoading: manhajsLoading } = useManhajs({
//     page: 1,
//     pageSize: 1000,
//   });
//   const { data: teachersData, isLoading: teachersLoading } = useGetTeachers();

//   const form = useForm<FormValues>({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       halaqaIds: [],
//       manhajIds: [],
//       teacherIds: [],
//       notes: "",
//       examDegree: 0,
//     },
//   });

//   useEffect(() => {
//     if (examData?.data) {
//       const exam = examData.data;
//       console.log("exam", exam);
//       form.reset({
//         halaqaIds: [
//           { label: exam.halaqaName, value: exam.halaqaId?.toString() },
//         ],
//         manhajIds: [
//           { label: exam.manhajName, value: exam.manhajId?.toString() },
//         ],
//         teacherIds: [{ label: "المعلم", value: exam.userId?.toString() }], // Note: fullName isn't in ExamType, so we might need a better label or fetch teacher details
//         examTypeId: exam.examTypeId.toString(),
//         examCategory: exam.examCategory,
//         examDegree: exam.examDegree,
//         startDateTime: formatDateTimeLocal(exam.startDateTime),
//         endDateTime: formatDateTimeLocal(exam.endDateTime),
//         notes: exam.notes || "",
//       });
//     }
//   }, [examData, form]);

//   // Update teacher label if teachers list is loaded
//   useEffect(() => {
//     if (
//       teachersData &&
//       examData?.data &&
//       form.getValues("teacherIds")[0]?.label === "المعلم"
//     ) {
//       const teacher = teachersData.find(
//         (t: any) => t.id === examData.data.userId,
//       );
//       if (teacher) {
//         form.setValue("teacherIds", [
//           { label: teacher.fullName, value: teacher.id.toString() },
//         ]);
//       }
//     }
//   }, [teachersData, examData, form]);

//   const onSubmit = (values: FormValues) => {
//     mutate(
//       {
//         id: Number(id),
//         data: {
//           halaqaIds: values.halaqaIds.map((v) => Number(v.value)),
//           manhajIds: values.manhajIds.map((v) => Number(v.value)),
//           teacherIds: values.teacherIds.map((v) => Number(v.value)),
//           examTypeId: Number(values.examTypeId),
//           examCategory: values.examCategory,
//           examDegree: values.examDegree,
//           startDateTime: new Date(values.startDateTime).toISOString(),
//           endDateTime: new Date(values.endDateTime).toISOString(),
//           notes: values.notes,
//         },
//       },
//       {
//         onSuccess: () => {
//           navigate("/dashboard/exams");
//         },
//       },
//     );
//   };

//   const halaqaOptions: Option[] =
//     halaqasData?.data?.map((h: any) => ({
//       label: h.name,
//       value: h.halaqaId.toString(),
//     })) || [];
//   const manhajOptions: Option[] =
//     manhajsData?.data?.map((m: any) => ({
//       label: m.name,
//       value: m.manhajId.toString(),
//     })) || [];
//   const teacherOptions: Option[] =
//     teachersData?.map((t: any) => ({
//       label: t.fullName,
//       value: t.id.toString(),
//     })) || [];

//   if (examLoading) {
//     return (
//       <div className="p-4 bg-white rounded-lg shadow-sm">
//         <CustomFormTitle title="تعديل معلومات الاختبار" />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//           {Array.from({ length: 8 }).map((_, i) => (
//             <div key={i} className="space-y-2">
//               <Skeleton className="h-4 w-20" />
//               <Skeleton className="h-10 w-full" />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-sm">
//       <CustomFormTitle title="تعديل معلومات الاختبار" />
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Halaqas */}
//             <FormField
//               control={form.control}
//               name="halaqaIds"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>الحلقات</FormLabel>
//                   <FormControl>
//                     <MultipleSelector
//                       {...field}
//                       defaultOptions={halaqaOptions}
//                       placeholder="اختر الحلقات..."
//                       emptyIndicator={
//                         <p className="text-center text-lg leading-10 text-gray-600">
//                           {halaqasLoading ? "جاري التحميل..." : "لاتوجد نتائج"}
//                         </p>
//                       }
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Manhajs */}
//             <FormField
//               control={form.control}
//               name="manhajIds"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>المناهج</FormLabel>
//                   <FormControl>
//                     <MultipleSelector
//                       {...field}
//                       defaultOptions={manhajOptions}
//                       placeholder="اختر المناهج..."
//                       emptyIndicator={
//                         <p className="text-center text-lg leading-10 text-gray-600">
//                           {manhajsLoading ? "جاري التحميل..." : "لاتوجد نتائج"}
//                         </p>
//                       }
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Teachers */}
//             <FormField
//               control={form.control}
//               name="teacherIds"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>المعلمين</FormLabel>
//                   <FormControl>
//                     <MultipleSelector
//                       {...field}
//                       defaultOptions={teacherOptions}
//                       placeholder="اختر المعلمين..."
//                       emptyIndicator={
//                         <p className="text-center text-lg leading-10 text-gray-600">
//                           {teachersLoading ? "جاري التحميل..." : "لاتوجد نتائج"}
//                         </p>
//                       }
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Exam Type */}
//             <FormField
//               control={form.control}
//               name="examTypeId"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>نوع الاختبار</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     value={field.value}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="اختر نوع الاختبار" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="1">تحريري</SelectItem>
//                       <SelectItem value="2">شفهي</SelectItem>
//                       <SelectItem value="3">عملي</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Exam Category */}
//             <FormField
//               control={form.control}
//               name="examCategory"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>تصنيف الاختبار</FormLabel>
//                   <FormControl>
//                     <Input {...field} placeholder="مثال: شهري، نهائي..." />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Exam Degree */}
//             <FormField
//               control={form.control}
//               name="examDegree"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>الدرجة</FormLabel>
//                   <FormControl>
//                     <Input type="number" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Start Date */}
//             <FormField
//               control={form.control}
//               name="startDateTime"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>تاريخ ووقت البدء</FormLabel>
//                   <FormControl>
//                     <Input type="datetime-local" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* End Date */}
//             <FormField
//               control={form.control}
//               name="endDateTime"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>تاريخ ووقت الانتهاء</FormLabel>
//                   <FormControl>
//                     <Input type="datetime-local" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Notes */}
//             <FormField
//               control={form.control}
//               name="notes"
//               render={({ field }) => (
//                 <FormItem className="col-span-1 md:col-span-2">
//                   <FormLabel>ملاحظات</FormLabel>
//                   <FormControl>
//                     <Textarea {...field} className="min-h-[100px]" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="flex justify-end gap-4 mt-8">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => navigate("/dashboard/exams")}
//               disabled={isPending}
//             >
//               إلغاء
//             </Button>
//             <Button
//               type="submit"
//               disabled={isPending}
//               className="bg-[#6B705C] hover:bg-[#6B705C]/90 text-white"
//             >
//               {isPending ? "جاري التحديث..." : "تحديث"}
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// }
