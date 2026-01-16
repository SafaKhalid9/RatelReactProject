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

type HalaqaFormProps = {
  mode: "add" | "edit";
  defaultValues?: HalaqaFormData;
  onSubmit: (data: HalaqaFormData) => void;
  isLoading?: boolean;
};

const INITIAL_STATE: HalaqaFormData = {
  name: "",
  status: "مبتدئ",
  capacity: 10,
  teacherID: 0,
  period: "",
  selectedPathIds: [],
  selectedManhajIds: [],
};

const HalaqaForm = ({
  mode,
  defaultValues,
  onSubmit,
  isLoading,
}: HalaqaFormProps) => {
  // const [formData, setFormData] = useState<HalaqaFormData>(
  //   defaultValues || INITIAL_STATE
  // );
  const [formData, setFormData] = useState<HalaqaFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<
    Partial<Record<keyof HalaqaFormData, string>>
  >({});

  const { data: teachers } = useTeachers();
  const { data: paths } = useMemorizationPaths();
  const { data: manhajs } = useManhajs();
  useEffect(() => {
    if (defaultValues && paths && manhajs) {
      setFormData(defaultValues);
    }
  }, [defaultValues, paths, manhajs]);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.status) newErrors.status = "اختر الحالة";
    if (!formData.period) newErrors.period = "اختر الفترة";
    if (formData.capacity <= 0)
      newErrors.capacity = "السعة يجب أن تكون أكبر من 0";
    if (!formData.teacherID) newErrors.teacherID = "اختر مدرّس";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // إرسال الـ FormData مباشرة
    onSubmit(formData);
  };

  const handleMultiSelectChange = (
    field: "selectedPathIds" | "selectedManhajIds",
    value: string
  ) => {
    const id = parseInt(value);
    setFormData((prev) => {
      const current = prev[field];
      if (current.includes(id))
        return { ...prev, [field]: current.filter((x) => x !== id) };
      return { ...prev, [field]: [...current, id] };
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      dir="rtl"
      className="flex flex-col gap-y-6 pb-5 px-6"
    >
      {/* الاسم والفترة */}
      <div className="flex justify-between gap-x-6">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم الحلقة</span>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full bg-white ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">الفترة</span>
          <Select
            value={formData.period}
            onValueChange={(val) => setFormData({ ...formData, period: val })}
          >
            <SelectTrigger className="w-full text-right bg-white">
              <SelectValue placeholder="اختر الفترة" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
              <SelectItem
                value="صباحية"
                className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]"
              >
                صباحية
              </SelectItem>
              <SelectItem
                value="مسائية"
                className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]"
              >
                مسائية
              </SelectItem>
            </SelectContent>
          </Select>
        </label>
      </div>

      {/* الحالة والسعة */}
      <div className="flex justify-between gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">الحالة</span>
          <Select
            value={formData.status}
            onValueChange={(val) =>
              setFormData({ ...formData, status: val as HalaqaStatus })
            }
          >
            <SelectTrigger
              className="w-full flex flex-row-reverse justify-between items-center text-right bg-white border rounded-md"
              dir="rtl"
            >
              <SelectValue placeholder="اختر الحالة" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md"
            >
              <SelectItem
                value="مبتدئ"
                className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]"
              >
                مبتدئ
              </SelectItem>
              <SelectItem
                value="متوسط"
                className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]"
              >
                متوسط
              </SelectItem>
              <SelectItem
                value="متقدم"
                className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]"
              >
                متقدم
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">السعة</span>
          <Input
            type="number"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({
                ...formData,
                capacity: parseInt(e.target.value) || 0,
              })
            }
            className={`w-full bg-white ${
              errors.capacity ? "border-red-500" : ""
            }`}
          />
          {errors.capacity && (
            <span className="text-red-500 text-sm">{errors.capacity}</span>
          )}
        </label>
      </div>

      {/* المدرّس */}
      <div className="w-full">
        <span className="text-xl font-semibold mb-2 block">المدرّس</span>
        <Select
          value={formData.teacherID ? formData.teacherID.toString() : ""}
          onValueChange={(val) =>
            setFormData({ ...formData, teacherID: parseInt(val) })
          }
        >
          <SelectTrigger
            className={`w-full text-right bg-white ${
              errors.teacherID ? "border-red-500" : ""
            }`}
          >
            <SelectValue placeholder="اختر مدرّس" />
          </SelectTrigger>
          <SelectContent
            dir="rtl"
            className="text-right bg-white shadow-md rounded-md"
          >
            {Array.isArray(teachers) &&
              teachers.map((t) => (
                <SelectItem
                  className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]"
                  key={t.id}
                  value={t.id.toString()}
                >
                  {t.fullName}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        {errors.teacherID && (
          <span className="text-red-500 text-sm">{errors.teacherID}</span>
        )}
      </div>

      {/* المسارات والمناهج */}
      <div className="flex justify-between gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">
            المسارات الأكاديمية
          </span>
          <div className="bg-white p-4 rounded-md space-y-2 h-40 overflow-y-auto">
            {Array.isArray(paths) &&
              paths.map((path) => (
                <label key={path.pathId} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.selectedPathIds.includes(path.pathId)}
                    onChange={() =>
                      handleMultiSelectChange(
                        "selectedPathIds",
                        path.pathId.toString()
                      )
                    }
                  />
                  <span>{path.name}</span>
                </label>
              ))}
          </div>
        </div>

        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">
            المناهج الأكاديمية
          </span>
          <div className="bg-white p-4 rounded-md space-y-2 h-40 overflow-y-auto">
            {Array.isArray(manhajs) &&
              manhajs.map((m) => (
                <label key={m.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.selectedManhajIds.includes(m.id)}
                    onChange={() =>
                      handleMultiSelectChange(
                        "selectedManhajIds",
                        m.id.toString()
                      )
                    }
                  />
                  <span>{m.name}</span>
                </label>
              ))}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <CustomButton
          type="submit"
          className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:text-[var(--primary)] hover:bg-[var(--light-green)]"
        >
          {mode === "add" ? "إضافة الحلقة" : "تحديث الحلقة"}
        </CustomButton>
      </div>
    </form>
  );
};

export default HalaqaForm;
