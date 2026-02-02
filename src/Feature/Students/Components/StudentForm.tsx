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
import {
  QURAN_SURAS,
  EDUCATIONAL_LEVELS,
  EDUCATIONAL_QUALIFICATIONS,
} from "@/Constant/student.constants";
import type { StudentFormData } from "../Types/student.types";

type StudentFormProps = {
  mode: "add" | "edit";
  defaultValues?: StudentFormData;
  onSubmit: (data: StudentFormData) => Promise<void> | void;
  isLoading?: boolean;
  parentsList?: { id: number; name: string }[];
  halaqaList?: { id: number; name: string }[];
};

type StudentFormErrors = Partial<
  Record<keyof StudentFormData | "newParentName" | "newParentPhone", string>
>;
interface ApiErrorResponse {
  errors: Record<string, string[]>; 
}

interface AxiosErrorWithData {
  response?: {
    data?: ApiErrorResponse;
  };
}
const INITIAL_STATE: StudentFormData = {
  halaqaId: 0,
  name: "",
  birthDate: "",
  phoneNumber: "",
  address: "",
  beginOfMemorize: "",
  currentEducationalLevel: "",
  educationalQualification: "",
  parentId: undefined,
  addNewParent: false,
  newParent: undefined,
};

const StudentForm = ({
  mode,
  defaultValues,
  onSubmit,
  parentsList = [],
  halaqaList = [],
}: StudentFormProps) => {
  const [form, setForm] = useState<StudentFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<StudentFormErrors>({});
  const [serverErrors, setServerErrors] = useState<StudentFormErrors>({});

useEffect(() => {
  if (!defaultValues) return;
  if (!parentsList.length) return;

  setForm(prev => ({ ...prev, ...defaultValues }));
}, [defaultValues, parentsList]);

  const validate = () => {
    const newErrors: StudentFormErrors = {};

    if (!form.name) newErrors.name = "الاسم مطلوب";
    else if (form.name.length < 7 || form.name.length > 25)
      newErrors.name = "الاسم يجب أن يكون بين 7 و 25 حرفًا";

    if (!form.phoneNumber) newErrors.phoneNumber = "رقم الهاتف مطلوب";
    else if (!/^7\d{8}$/.test(form.phoneNumber))
      newErrors.phoneNumber = "رقم الهاتف غير صالح، يجب أن يبدأ بـ 7 ويليه 8 أرقام";

    if (!form.birthDate) newErrors.birthDate = "تاريخ الميلاد مطلوب";
    if (!form.address) newErrors.address = "العنوان مطلوب";
    if (!form.beginOfMemorize) newErrors.beginOfMemorize = "حقل بداية الحفظ مطلوب";
    if (!form.currentEducationalLevel) newErrors.currentEducationalLevel = "المرحلة الدراسية مطلوبة";
    if (!form.educationalQualification) newErrors.educationalQualification = "المؤهل العلمي مطلوب";
    if (form.halaqaId === 0) newErrors.halaqaId = "اختر الحلقة";

    if (form.addNewParent) {
      if (!form.newParent?.name) newErrors.newParentName = "اسم ولي الأمر مطلوب";
      if (!form.newParent?.phoneNumber) {
        newErrors.newParentPhone = "هاتف ولي الأمر مطلوب";
      } 
      else if (!/^3\d{5}$/.test(form.newParent.phoneNumber)) {
        newErrors.newParentPhone = "رقم هاتف ولي الأمر غير صالح، يجب أن يبدأ بـ 3 ويليه 5 أرقام";
      }

    } else {
      if (!form.parentId) newErrors.parentId = "اختر ولي أمر من القائمة أو أضف جديد";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setServerErrors({}); 
  if (!validate()) return;

  try {
    await onSubmit(form);
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "response" in error
    ) {
      const axiosError = error as AxiosErrorWithData;
      const apiErrors = axiosError.response?.data?.errors;
      if (apiErrors) {
        const mappedErrors: StudentFormErrors = {};

        Object.keys(apiErrors).forEach((key) => {
          const msgArray = apiErrors[key];
          if (msgArray && msgArray.length > 0) {
            switch (key) {
              case "Name":
                mappedErrors.name = "الاسم يجب أن يكون بين 7 و 25 حرفًا";
                break;
              case "PhoneNumber":
                mappedErrors.phoneNumber =
                  "رقم الهاتف غير صالح، يجب أن يبدأ بـ 7 ويليه 8 أرقام";
                break;
              default:
                mappedErrors[key as keyof StudentFormData] =
                  msgArray.join(", ");
            }
          }
        });

        setServerErrors(mappedErrors);
      }
    }
  }
};

  const allErrors = { ...errors, ...serverErrors };

  return (
    <form
      onSubmit={handleSubmit}
      dir="rtl"
      className="flex flex-col gap-y-6 pb-5 px-6"
    >
      <div className="flex justify-between gap-x-6">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم الطالب</span>
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full bg-white ${allErrors.name ? "border-red-500" : ""}`}
          />
          {allErrors.name && (
            <span className="text-red-500 text-sm">{allErrors.name}</span>
          )}
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">تاريخ الميلاد</span>
          <Input
            type="date"
            value={form.birthDate}
            onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
            className={`w-full bg-white ${allErrors.birthDate ? "border-red-500" : ""}`}
          />
          {allErrors.birthDate && (
            <span className="text-red-500 text-sm">{allErrors.birthDate}</span>
          )}
        </label>
      </div>
      <div className="flex justify-between gap-x-6">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">رقم الهاتف</span>
          <Input
            value={form.phoneNumber}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            className={`w-full bg-white ${allErrors.phoneNumber ? "border-red-500" : ""}`}
          />
          {allErrors.phoneNumber && (
            <span className="text-red-500 text-sm">{allErrors.phoneNumber}</span>
          )}
        </label>
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">العنوان</span>
          <Input
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className={`w-full bg-white ${allErrors.address ? "border-red-500" : ""}`}
          />
          {allErrors.address && (
            <span className="text-red-500 text-sm">{allErrors.address}</span>
          )}
        </label>
      </div>
      <div className="flex justify-between gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">بداية الحفظ </span>
          <Select
            key={form.beginOfMemorize}
            value={form.beginOfMemorize}
            onValueChange={(val) =>
              setForm({ ...form, beginOfMemorize: val })
            }
          >
            <SelectTrigger
              dir="rtl"
              className=" w-full flex flex-row justify-between items-center text-right bg-white border rounded-md cursor-pointer"
            >
            <SelectValue  className="text-right flex-1" placeholder="اختر السورة" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto"
            >
            {QURAN_SURAS.map((sura) => (
             <SelectItem className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]" key={sura} value={sura}>{sura}</SelectItem>
           ))}
            </SelectContent>
          </Select>
          {errors.beginOfMemorize && (
            <span className="text-red-500 text-sm">{errors.beginOfMemorize}</span>
          )}
        </div>

        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المرحلة الدراسية</span>
          <Select
            key={form.currentEducationalLevel}
            value={form.currentEducationalLevel}
            onValueChange={(val) =>
              setForm({ ...form, currentEducationalLevel: val })
            }
          >
            <SelectTrigger
              dir="rtl"
              className=" w-full flex flex-row justify-between items-center text-right bg-white border rounded-md cursor-pointer"
            >
            <SelectValue className="text-right flex-1" placeholder="اختر مرحلة" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto"
            >
              {EDUCATIONAL_LEVELS.map((level) => (
              <SelectItem className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]" key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.currentEducationalLevel && (
            <span className="text-red-500 text-sm">{errors.currentEducationalLevel}</span>
          )}
        </div>
      </div>
      <div className="flex justify-between gap-x-6">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">المؤهل العلمي</span>
          <Select
            key={form.educationalQualification}
            value={form.educationalQualification}
            onValueChange={(val) =>
              setForm({ ...form, educationalQualification: val })
            }
          >
            <SelectTrigger
              dir="rtl"
              className=" w-full flex flex-row justify-between items-center text-right bg-white border rounded-md cursor-pointer"
            >
            <SelectValue className="text-right flex-1" placeholder="اختر المؤهل" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto"
            >
            {EDUCATIONAL_QUALIFICATIONS.map((q) => (
            <SelectItem className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]" key={q} value={q}>{q}</SelectItem>
            ))}
            </SelectContent>
          </Select>
          {errors.educationalQualification && (
            <span className="text-red-500 text-sm">{errors.educationalQualification}</span>
          )}
        </div>

        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">اسم الحلقة</span>
          <Select
            key={form.halaqaId}
            value={form.halaqaId === 0 ? "" : form.halaqaId.toString()}
            onValueChange={(val) => setForm({ ...form, halaqaId: parseInt(val) })}
          >
            <SelectTrigger
              dir="rtl"
              className=" w-full flex flex-row justify-between items-center text-right bg-white border rounded-md cursor-pointer"
            >
            <SelectValue className="text-right flex-1" placeholder="اختر الحلقة" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto"
            >
             {halaqaList?.map(h => (
                <SelectItem className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]" key={h.id} value={String(h.id)}>
                  {h.name}
                </SelectItem>
              ))}

            </SelectContent>
          </Select>

          {errors.halaqaId && (
            <span className="text-red-500 text-sm">{errors.halaqaId}</span>
          )}
        </div>
      </div>
      <div className="w-full">
        <span className="text-xl font-semibold mb-2 block">اسم ولي الأمر</span>
        {!form.addNewParent && (
          <Select
            value={form.parentId?.toString() || ""}
            onValueChange={(val) => setForm({ ...form, parentId: parseInt(val) })}
          >
            <SelectTrigger
              dir="rtl"
              className=" w-full flex flex-row justify-between items-center text-right bg-white border rounded-md cursor-pointer"
            >
            <SelectValue className="text-right flex-1" placeholder="اختر ولي الأمر" />
            </SelectTrigger>
            <SelectContent
              dir="rtl"
              className="text-right bg-white shadow-md rounded-md max-h-60 overflow-y-auto">
              {parentsList.map((p) => (
                <SelectItem className="cursor-pointer data-[highlighted]:bg-[var(--light-green)] data-[highlighted]:text-[var(--primary)]" key={p.id} value={p.id.toString()}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        )}
        {errors.parentId && <span className="text-red-500 text-sm">{errors.parentId}</span>}

        <label className="flex items-center gap-x-2 cursor-pointer mt-1">
          <input
            type="checkbox"
            checked={form.addNewParent}
            onChange={(e) =>
              setForm({
                ...form,
                addNewParent: e.target.checked,
                parentId: undefined,
                newParent: e.target.checked ? { name: "", phoneNumber: "" } : undefined,
              })
            }
            className="w-4 h-4 accent-[var(--primary)]"
          />
          <span className="text-sm font-medium">إضافة ولي أمر جديد</span>
        </label>

        {form.addNewParent && form.newParent && (
          <div className="flex gap-x-6 mt-2">
            <Input
              placeholder="اسم ولي الأمر"
              value={form.newParent.name}
              onChange={(e) =>
                setForm({ ...form, newParent: { ...form.newParent!, name: e.target.value } })
              }
              className={`bg-white w-1/2 ${errors.newParentName ? "border-red-500" : ""}`}
            />
            <Input
              placeholder="هاتف ولي الأمر"
              value={form.newParent.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, newParent: { ...form.newParent!, phoneNumber: e.target.value } })
              }
              className={`bg-white w-1/2 ${errors.newParentPhone ? "border-red-500" : ""}`}
            />
          </div>
        )}
        {errors.newParentName && <span className="text-red-500 text-sm">{errors.newParentName}</span>}
        {errors.newParentPhone && <span className="text-red-500 text-sm">{errors.newParentPhone}</span>}
      </div>
      
      <div className="pt-4">
        <CustomButton
          type="submit"
          className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:text-[var(--primary)] hover:bg-[var(--light-green)]"
        >
          {mode === "add" ? "إضافة الطالب" : "تحديث بيانات الطالب"}
        </CustomButton>
      </div>
    </form>
  );
};

export default StudentForm;
