import { useEffect, useState, type FormEvent } from "react";
import CustomButton from "@/Components/CustomButton";
import { Input } from "@/Components/ShadCn/input";
import type { MemorizationPathFormData } from "../Types/memorizationPath.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";

type MemorizationPathFormProps = {
  mode: "add" | "edit";
  defaultValues?: MemorizationPathFormData;
  onSubmit: (data: MemorizationPathFormData) => void;
  isLoading?: boolean;
};
export const QURAN_SURAS = [
  "الفاتحة",
  "البقرة",
  "آل عمران",
  "النساء",
  "المائدة",
  "الأنعام",
  "الأعراف",
  "الأنفال",
  "التوبة",
  "يونس",
  "هود",
  "يوسف",
  "الرعد",
  "إبراهيم",
  "الحجر",
  "النحل",
  "الإسراء",
  "الكهف",
  "مريم",
  "طه",
  "الأنبياء",
  "الحج",
  "المؤمنون",
  "النور",
  "الفرقان",
  "الشعراء",
  "النمل",
  "القصص",
  "العنكبوت",
  "الروم",
  "لقمان",
  "السجدة",
  "الأحزاب",
  "سبأ",
  "فاطر",
  "يس",
  "الصافات",
  "ص",
  "الزمر",
  "غافر",
  "فصلت",
  "الشورى",
  "الزخرف",
  "الدخان",
  "الجاثية",
  "الأحقاف",
  "محمد",
  "الفتح",
  "الحجرات",
  "ق",
  "الذاريات",
  "الطور",
  "النجم",
  "القمر",
  "الرحمن",
  "الواقعة",
  "الحديد",
  "المجادلة",
  "الحشر",
  "الممتحنة",
  "الصف",
  "الجمعة",
  "المنافقون",
  "التغابن",
  "الطلاق",
  "التحريم",
  "الملك",
  "القلم",
  "الحاقة",
  "المعارج",
  "نوح",
  "الجن",
  "المزمل",
  "المدثر",
  "القيامة",
  "الإنسان",
  "المرسلات",
  "النبأ",
  "النازعات",
  "عبس",
  "التكوير",
  "الإنفطار",
  "المطففين",
  "الإنشقاق",
  "البروج",
  "الطارق",
  "الأعلى",
  "الغاشية",
  "الفجر",
  "البلد",
  "الشمس",
  "الليل",
  "الضحى",
  "الشرح",
  "التين",
  "العلق",
  "القدر",
  "البينة",
  "الزلزلة",
  "العاديات",
  "القارعة",
  "التكاثر",
  "العصر",
  "الهمزة",
  "الفيل",
  "قريش",
  "الماعون",
  "الكوثر",
  "الكافرون",
  "النصر",
  "المسد",
  "الإخلاص",
  "الفلق",
  "الناس",
];

const INITIAL_STATE: MemorizationPathFormData = {
  name: "",
  memorizeFrom: "",
  memorizeTo: "",
};

const MemorizationPathForm = ({
  mode,
  defaultValues,
  onSubmit,
  isLoading,
}: MemorizationPathFormProps) => {
  const [form, setForm] = useState<MemorizationPathFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<
    Partial<Record<keyof MemorizationPathFormData, string>>
  >({});

  useEffect(() => {
    if (defaultValues) setForm(defaultValues);
  }, [defaultValues]);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name) newErrors.name = "الاسم مطلوب";
    if (!form.memorizeFrom) newErrors.memorizeFrom = "حقل 'من' مطلوب";
    if (!form.memorizeTo) newErrors.memorizeTo = "حقل 'إلى' مطلوب";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      dir="rtl"
      className="flex flex-col gap-y-6 px-6 pb-5"
    >
      <label>
        <span className="text-xl font-semibold mb-2 block">اسم المسار</span>
        <Input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`bg-white ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </label>

      <div className="flex gap-x-6">
        {/* من */}
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">من</span>
          <Select
            key={form.memorizeFrom}
            value={form.memorizeFrom}
            onValueChange={(val) => setForm({ ...form, memorizeFrom: val })}
          >
            <SelectTrigger
              dir="rtl"
              className=" w-full flex flex-row justify-between items-center text-right bg-white border rounded-md cursor-pointer"
            >
              <SelectValue
                placeholder="اختر السورة"
                className="text-right flex-1"
              />
            </SelectTrigger>

            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto"
            >
              {QURAN_SURAS.map((sura) => (
                <SelectItem
                  key={sura}
                  value={sura}
                  className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]"
                >
                  {sura}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.memorizeFrom && (
            <span className="text-red-500 text-sm">{errors.memorizeFrom}</span>
          )}
        </div>
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">إلى</span>
          <Select
            key={form.memorizeTo}
            value={form.memorizeTo}
            onValueChange={(val) => setForm({ ...form, memorizeTo: val })}
          >
            <SelectTrigger
              dir="rtl"
              className="w-full flex flex-row justify-between items-center text-right bg-white border rounded-md cursor-pointer"
            >
              <SelectValue placeholder="اختر السورة" />
            </SelectTrigger>

            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto"
            >
              {QURAN_SURAS.map((sura) => (
                <SelectItem
                  key={sura}
                  value={sura}
                  className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]"
                >
                  {sura}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.memorizeTo && (
            <span className="text-red-500 text-sm">{errors.memorizeTo}</span>
          )}
        </div>
      </div>

      {/* <CustomButton
        type="submit"
        disabled={isLoading}
        className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--light-green)] hover:text-[var(--primary)]"
      >
        {mode === "add" ? "إضافة المسار" : "تحديث المسار"}
      </CustomButton> */}
      <div className="flex justify-center gap-4 mt-6">
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
              ? "إضافة المسار"
              : "تحديث المسار"}
        </CustomButton>
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

export default MemorizationPathForm;
