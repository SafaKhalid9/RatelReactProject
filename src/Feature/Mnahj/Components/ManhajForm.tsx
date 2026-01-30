import { useEffect, useState, type FormEvent } from "react";
import CustomButton from "@/Components/CustomButton";
import { Input } from "@/Components/ShadCn/input";
import type { ManhajFormData, ManhajFormProps } from "../Types/manhaj.types";
import { Textarea } from "../../../Components/ShadCn/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";

const INITIAL_STATE: ManhajFormData = {
  name: "",
  authorName: "",
  targetAudience: "",
  numberOfLessons: "" as unknown as number,
  goals: "",
  imageFile: undefined,
  pdfFile: undefined,
};

const ManhajForm = ({
  mode,
  defaultValues,
  onSubmit,
  isLoading,
}: ManhajFormProps) => {
  const [form, setForm] = useState<ManhajFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ManhajFormData, string>>
  >({});
  useEffect(() => {
    if (defaultValues)
      setForm({
        ...INITIAL_STATE,
        ...defaultValues,
        numberOfLessons: Number(defaultValues.numberOfLessons || 0),
      });
  }, [defaultValues]);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name) e.name = "اسم المنهج مطلوب";
    if (!form.authorName) e.authorName = "اسم المؤلف مطلوب";
    if (!form.targetAudience) e.targetAudience = "الفئة المستهدفة مطلوبة";
    if (!form.numberOfLessons || form.numberOfLessons <= 0)
      e.numberOfLessons = "عدد الدروس غير صحيح";
    if (!form.goals) e.goals = "الأهداف مطلوبة";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(form);
  };
  const TARGET_AUDIENCE_OPTIONS = [
    { value: "مبتدئ", label: "مبتدئ" },
    { value: "متوسط", label: "متوسط" },
    { value: "متقدم", label: "متقدم" },
    { value: "جميع الفئات", label: "جميع الفئات" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      dir="rtl"
      className="flex flex-col gap-y-6 px-6 pb-5"
    >
      <div className="flex gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم المنهج</span>
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`bg-white ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم المؤلف</span>
          <Input
            value={form.authorName}
            onChange={(e) => setForm({ ...form, authorName: e.target.value })}
            className={`bg-white ${errors.authorName ? "border-red-500" : ""}`}
          />
          {errors.authorName && (
            <span className="text-red-500 text-sm">{errors.authorName}</span>
          )}
        </div>
      </div>

      <div className="flex gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">
            الفئة المستهدفة
          </span>
          <Select
            key={form.targetAudience}
            value={form.targetAudience}
            onValueChange={(val) => setForm({ ...form, targetAudience: val })}
          >
            <SelectTrigger
              dir="rtl"
              className={`
      w-full flex justify-between items-center text-right
      bg-white border rounded-md cursor-pointer
      ${errors.targetAudience ? "border-red-500" : ""}
    `}
            >
              <SelectValue placeholder="اختر الفئة المستهدفة" />
            </SelectTrigger>

            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
              {TARGET_AUDIENCE_OPTIONS.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className="
          cursor-pointer
          transition-colors
          duration-150
          data-highlighted:bg-(--light-green)
        "
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.targetAudience && (
            <span className="text-red-500 text-sm">
              {errors.targetAudience}
            </span>
          )}
        </div>
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">عدد الدروس</span>
          <Input
            type="number"
            value={form.numberOfLessons ?? ""}
            onChange={(e) =>
              setForm({
                ...form,
                numberOfLessons: Number(e.target.value),
              })
            }
            className={`bg-white ${
              errors.numberOfLessons ? "border-red-500" : ""
            }`}
          />
          {errors.numberOfLessons && (
            <span className="text-red-500 text-sm">
              {errors.numberOfLessons}
            </span>
          )}
        </div>
      </div>

      <label>
        <span className="text-xl font-semibold mb-2 block">أهداف المنهج</span>
        <Textarea
          placeholder="اكتب أهداف المنهج هنا، كل هدف في سطر جديد"
          className="w-full resize-none"
          rows={5}
          value={form.goals}
          onChange={(e) => setForm({ ...form, goals: e.target.value })}
        />
        {errors.goals && (
          <span className="text-red-500 text-sm">{errors.goals}</span>
        )}
      </label>

      {/* الملفات */}
      <div className="flex gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">
            صورة غلاف المنهج
          </span>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              if (!file.type.startsWith("image/")) {
                alert("يرجى اختيار ملف صورة فقط");
                return;
              }

              setForm({ ...form, imageFile: file });
            }}
          />
        </div>
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">ملف PDF</span>
          <Input
            type="file"
            accept=".pdf"
            onChange={(e) => setForm({ ...form, pdfFile: e.target.files?.[0] })}
          />
        </div>
      </div>

      <CustomButton
        type="submit"
        disabled={isLoading}
        className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--light-green)] hover:text-[var(--primary)]"
      >
        {isLoading
          ? "جاري الحفظ..."
          : mode === "add"
            ? "إضافة المنهج"
            : "تحديث المنهج"}
      </CustomButton>
    </form>
  );
};

export default ManhajForm;
