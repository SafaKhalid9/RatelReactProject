import { z } from "zod/v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/Components/ShadCn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ShadCn/form";
import { Input } from "@/Components/ShadCn/input";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import { useGetMistakeTypeDetails } from "../services/useGetMistakeTypeDetails";
import { useUpdateMistakeType } from "../services/useUpdateMistakeType";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const schema = z.object({
  name: z.string().min(1, "يجب إدخال اسم نوع الخطأ"),
  penaltyPerMistake: z.coerce.number().min(0, "يجب أن تكون الدرجة 0 أو أكثر"),
});

type FormValues = z.infer<typeof schema>;

export default function EditMistakeType() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetMistakeTypeDetails(id);
  const { mutate, isPending: isUpdating } = useUpdateMistakeType();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      penaltyPerMistake: 0,
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
        penaltyPerMistake: data.degree,
      });
    }
  }, [data, form]);

  const onSubmit = (values: FormValues) => {
    if (id) {
      mutate({ id, data: values });
    }
  };

  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <CustomFormTitle title="تعديل نوع الخطأ" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم الخطأ</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="أدخل اسم الخطأ" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="penaltyPerMistake"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الدرجة</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder="أدخل الدرجة" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard/mistake-types")}
              disabled={isUpdating}
            >
              إلغاء
            </Button>
            <Button
              type="submit"
              disabled={isUpdating}
              className="bg-[#6B705C] hover:bg-[#6B705C]/90 text-white"
            >
              {isUpdating ? "جاري الحفظ..." : "حفظ التعديلات"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
