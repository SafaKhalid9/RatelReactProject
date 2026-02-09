import { useEffect, useState, type FormEvent } from "react";
import CustomButton from "@/Components/CustomButton";
import { Input } from "@/Components/ShadCn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";
import type { HalaqaFormData, HalaqaStatus } from "../Types/halaqa.types";
import {
  useManhajs,
  useMemorizationPaths,
  useTeachers,
} from "../Services/halaqa.service";

type Props = {
  mode: "add" | "edit";
  defaultValues?: HalaqaFormData;
  onSubmit: (data: HalaqaFormData) => void;
  isLoading?: boolean;
};

const INITIAL_STATE: HalaqaFormData = {
  name: "",
  status: "",
  capacity: 10,
  teacherId: undefined as any,
  period: "",
  pathIds: [],
  manhajIds: [],
};

const HalaqaForm = ({ mode, defaultValues, onSubmit, isLoading }: Props) => {
  const [formData, setFormData] = useState<HalaqaFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<
    Partial<Record<keyof HalaqaFormData, string>>
  >({});

  const { data: teachers } = useTeachers();
  const { data: paths } = useMemorizationPaths();
  const { data: manhajs } = useManhajs();
  useEffect(() => {
    if (!defaultValues) return;

    setFormData({
      name: defaultValues.name,
      status: defaultValues.status,
      capacity: defaultValues.capacity,
      teacherId: defaultValues.teacherId,
      period: defaultValues.period,
      pathIds: defaultValues.pathIds,
      manhajIds: defaultValues.manhajIds,
    });
  }, [defaultValues]);

  // const validate = () => {
  //   const newErrors: typeof errors = {};
  //   if (!formData.name) newErrors.name = "الاسم مطلوب";
  //   if (!formData.period) newErrors.period = "اختر الفترة";
  //   if (!formData.teacherId) newErrors.teacherId = "اختر معلم";
  //   if (formData.capacity <= 0)
  //     newErrors.capacity = "السعة يجب أن تكون أكبر من 0";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name) {
      newErrors.name = "اسم الحلقة مطلوب";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "اسم الحلقة يجب أن يكون 3 أحرف على الأقل";
    }

    if (!formData.period) newErrors.period = "اختر الفترة";
    if (!formData.teacherId) newErrors.teacherId = "اختر معلم";
    if (formData.capacity <= 0)
      newErrors.capacity = "السعة يجب أن تكون أكبر من 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ ...formData, teacherId: Number(formData.teacherId) });
  };
  const toggleMulti = (key: "pathIds" | "manhajIds", id: number) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].includes(id)
        ? prev[key].filter((x) => x !== id)
        : [...prev[key], id],
    }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      dir="rtl"
      className="flex flex-col gap-y-6 pb-5 px-6"
    >
      <div className="flex justify-between gap-x-6">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم الحلقة</span>
          <Input
            placeholder="اسم الحلقة"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) {
                setErrors((prev) => ({ ...prev, name: undefined }));
              }
            }}
            className={`w-full bg-white ${errors.name ? "border-red-500" : ""}`}
          />

          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">الفترة</span>
          <Select
            key={formData.period}
            value={formData.period}
            onValueChange={(val) => setFormData({ ...formData, period: val })}
          >
            <SelectTrigger
              dir="rtl"
              className="
          w-full
          flex
          justify-between
          items-center
          text-right
          bg-white
          border
          rounded-md
          cursor-pointer
        "
            >
              <SelectValue placeholder="اختر الفترة" />
            </SelectTrigger>

            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
              <SelectItem
                value="صباحية"
                className="
  cursor-pointer
  transition-colors
  duration-150
  data-highlighted:bg-(--light-green)
"
              >
                صباحية
              </SelectItem>
              <SelectItem
                value="مسائية"
                className="
  cursor-pointer
  transition-colors
  duration-150
  data-highlighted:bg-(--light-green)
"
              >
                مسائية
              </SelectItem>
            </SelectContent>
          </Select>

          {errors.period && (
            <span className="text-red-500 text-sm">{errors.period}</span>
          )}
        </label>
      </div>
      <div className="flex justify-between gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المستوى</span>
          <Select
            key={formData.status}
            value={formData.status}
            onValueChange={(val) =>
              setFormData({ ...formData, status: val as HalaqaStatus })
            }
          >
            <SelectTrigger
              dir="rtl"
              className="
          w-full
          flex
          justify-between
          items-center
          text-right
          bg-white
          border
          rounded-md
          cursor-pointer
        "
            >
              <SelectValue placeholder="اختر المستوى" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
              <SelectItem
                value="Beginner"
                className="
  cursor-pointer
  transition-colors
  duration-150
  data-highlighted:bg-(--light-green)
"
              >
                مبتدئ
              </SelectItem>
              <SelectItem
                value="Intermediate"
                className="
  cursor-pointer
  transition-colors
  duration-150
  data-highlighted:bg-(--light-green)
"
              >
                متوسط
              </SelectItem>
              <SelectItem
                value="Advanced"
                className="
  cursor-pointer
  transition-colors
  duration-150
  data-highlighted:bg-(--light-green)
"
              >
                متقدم
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">السعة</span>
          <Input
            type="number"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({
                ...formData,
                capacity: Number(e.target.value) || 0,
              })
            }
            className={`cursor-pointer data-highlighted:bg-(--light-green) ${
              errors.capacity ? "border-red-500" : ""
            }`}
          />
        </div>
      </div>
      <div className="w-full">
        <span className="text-xl font-semibold mb-2 block">المعلم</span>
        <Select
          key={formData.teacherId}
          value={formData.teacherId ? String(formData.teacherId) : ""}
          onValueChange={(val) =>
            setFormData({ ...formData, teacherId: Number(val) })
          }
        >
          <SelectTrigger
            className={`w-full flex justify-between items-center text-right bg-white border rounded-md cursor-pointer${
              errors.teacherId ? "border-red-500" : ""
            }`}
            dir="rtl"
          >
            <SelectValue placeholder="اختر معلم" />
          </SelectTrigger>
          <SelectContent
            className="text-right bg-white shadow-md rounded-md"
            dir="rtl"
          >
            {teachers?.map((t) => (
              <SelectItem
                key={t.id}
                value={String(t.id)}
                className="
  cursor-pointer
  transition-colors
  duration-150
  data-highlighted:bg-(--light-green)
"
              >
                {t.fullName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.teacherId && (
          <span className="text-red-500 text-sm">{errors.teacherId}</span>
        )}
      </div>
      <div className="flex justify-between gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">
            المسارات الأكاديمية
          </span>
          <div className="bg-white p-4 rounded-md space-y-2 h-40 overflow-y-auto">
            {paths?.map((p) => (
              <label key={p.pathId} className="flex items-center gap-2">
                <input
                  key={p.pathId}
                  type="checkbox"
                  checked={formData.pathIds.includes(p.pathId)}
                  onChange={() => toggleMulti("pathIds", p.pathId)}
                />
                <span>{p.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">
            المناهج الأكاديمية
          </span>
          <div className="bg-white p-4 rounded-md space-y-2 h-40 overflow-y-auto">
            {manhajs?.map((m, index) => (
              <label
                key={m.manhajId ?? index}
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  checked={formData.manhajIds.includes(m.manhajId)}
                  onChange={() => toggleMulti("manhajIds", m.manhajId)}
                />
                <span>{m.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* <CustomButton
        type="submit"
        disabled={isLoading}
        className={`
    w-full py-2 rounded-md transition-all duration-300
    ${
      isLoading
        ? "bg-gray-300 text-(--primary) cursor-not-allowed"
        : "bg-(--primary) text-white cursor-pointer hover:bg-(--light-green) hover:text-(--primary) hover:border-2 hover:border-(--primary) hover:shadow-lg hover:scale-[1.02]"
    }
  `}
      >
        {isLoading
          ? "جاري الحفظ..."
          : mode === "add"
            ? "إضافة الحلقة"
            : "تحديث الحلقة"}
      </CustomButton> */}
      <div className="flex justify-center gap-4 mt-6">
        {/* زر الإضافة / التحديث */}
        <CustomButton
          type="submit"
          disabled={isLoading}
          className={`
      w-45 py-5 rounded-2xl transition-all duration-300
      ${
        isLoading
          ? "bg-(--light-green) text-(--primary) cursor-not-allowed"
          : "bg-(--primary) text-white cursor-pointer hover:bg-(--light-green) hover:text-(--primary) hover:border-2 hover:border-(--primary) hover:shadow-lg hover:scale-[1.02]"
      }
    `}
        >
          {isLoading
            ? "جاري الحفظ..."
            : mode === "add"
              ? "إضافة الحلقة"
              : "تحديث الحلقة"}
        </CustomButton>
        {/* زر الإلغاء */}
        <CustomButton
          type="button"
          onClick={() => window.history.back()}
          className="
      w-45 py-5 rounded-2xl
      bg-secondary text-white
      hover:bg-(--light-brown)
      hover:border-2 hover:border-secondary
      hover:text-(--primary)
      transition-all duration-300
    "
        >
          إلغاء
        </CustomButton>
      </div>
    </form>
  );
};

export default HalaqaForm;
