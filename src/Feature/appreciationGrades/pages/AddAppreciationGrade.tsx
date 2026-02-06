import { useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import { useCreateAppreciationGrade } from "../services/useCreateAppreciationGrade";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/v3";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ShadCn/form";
import { Input } from "@/Components/ShadCn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";
import { Button } from "@/Components/ShadCn/button";
const schema = z
  .object({
    appreciationId: z.coerce.number().min(1, "التقدير مطلوب"),
    minimumScore: z.coerce
      .number()
      .min(0, "الدرجة الصغرى لا يمكن أن تكون أقل من 0"),
    maximumScore: z.coerce
      .number()
      .min(0, "الدرجة الكبرى لا يمكن أن تكون أقل من 0"),
  })
  .refine((data) => data.maximumScore > data.minimumScore, {
    message: "الدرجة الكبرى يجب أن تكون أكبر من الدرجة الصغرى",
    path: ["maximumScore"],
  });

type FormValues = z.infer<typeof schema>;

const APPRECIATIONS = [
  { id: 1, name: "ممتاز مرتفع" },
  { id: 2, name: "ممتاز" },
  { id: 3, name: "جيد جداً مرتفع" },
  { id: 4, name: "جيد جداً" },
  { id: 5, name: "جيد مرتفع" },
  { id: 6, name: "جيد" },
  { id: 7, name: "مقبول مرتفع" },
  { id: 8, name: "مقبول" },
  { id: 9, name: "ضعيف" },
];
export default function AddAppreciationGrade() {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateAppreciationGrade();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      appreciationId: 0,
      minimumScore: 0,
      maximumScore: 0,
    },
  });
  const handleSubmit = (values: FormValues) => {
    mutate(values, {
      onSuccess: () => {
        navigate("/dashboard/appreciation-grades");
      },
    });
  };
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <CustomFormTitle title="إضافة تقدير جديد" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6"
          dir="rtl"
        >
          <FormField
            control={form.control}
            name="appreciationId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">التقدير</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value ? String(field.value) : undefined}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="اختر التقدير" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {APPRECIATIONS.map((item) => (
                      <SelectItem key={item.id} value={String(item.id)}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="minimumScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-semibold">
                    الدرجة الصغرى
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maximumScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-semibold">
                    الدرجة الكبرى
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#6B705C] hover:bg-[#6B705C]/80 text-white"
          >
            {isPending ? "جاري الحفظ..." : "إضافة التقدير"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
