import { useState, FormEvent } from "react";
import CustomButton from "@/Components/CustomButton";
import { Input } from "@/Components/ShadCn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";
import { HalaqaFormData, HalaqaStatus } from "../Types/halaqa.types";
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
  status: "Beginner",
  capacity: 10,
  teacherID: 0,
  period: "Morning",
  selectedPathIds: [],
  selectedManhajIds: [],
};

const HalaqaForm = ({
  mode,
  defaultValues,
  onSubmit,
  isLoading,
}: HalaqaFormProps) => {
  const [formData, setFormData] = useState<HalaqaFormData>(
    defaultValues || INITIAL_STATE
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof HalaqaFormData, string>>
  >({});

  // Fetch Dropdown Data
  const { data: teachers, isLoading: loadingTeachers } = useTeachers();
  const { data: paths, isLoading: loadingPaths } = useMemorizationPaths();
  const { data: manhajs, isLoading: loadingManhajs } = useManhajs();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (formData.capacity <= 0)
      newErrors.capacity = "Capacity must be greater than 0";
    if (!formData.teacherID) newErrors.teacherID = "Teacher is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleMultiSelectChange = (
    field: "selectedPathIds" | "selectedManhajIds",
    value: string
  ) => {
    const id = parseInt(value);
    setFormData((prev) => {
      const current = prev[field];
      if (current.includes(id)) {
        return { ...prev, [field]: current.filter((x) => x !== id) };
      } else {
        return { ...prev, [field]: [...current, id] };
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 pb-5 px-10">
      <div className="flex justify-between gap-x-10">
        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">Name</span>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </label>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">Period</span>
          <Input
            value={formData.period}
            onChange={(e) =>
              setFormData({ ...formData, period: e.target.value })
            }
          />
        </label>
      </div>

      <div className="flex justify-between gap-x-10">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">Status</span>
          <Select
            value={formData.status}
            onValueChange={(val) =>
              setFormData({ ...formData, status: val as HalaqaStatus })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <label className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">Capacity</span>
          <Input
            type="number"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({
                ...formData,
                capacity: parseInt(e.target.value) || 0,
              })
            }
            className={errors.capacity ? "border-red-500" : ""}
          />
          {errors.capacity && (
            <span className="text-red-500 text-sm">{errors.capacity}</span>
          )}
        </label>
      </div>

      <div className="flex justify-between gap-x-10">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">Teacher</span>
          <Select
            value={formData.teacherID ? formData.teacherID.toString() : ""}
            onValueChange={(val) =>
              setFormData({ ...formData, teacherID: parseInt(val) })
            }
            disabled={loadingTeachers}
          >
            <SelectTrigger className={errors.teacherID ? "border-red-500" : ""}>
              <SelectValue
                placeholder={
                  loadingTeachers ? "Loading Teachers..." : "Select Teacher"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {teachers?.map((t) => (
                <SelectItem key={t.id} value={t.id.toString()}>
                  {t.fullName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.teacherID && (
            <span className="text-red-500 text-sm">{errors.teacherID}</span>
          )}
        </div>
      </div>

      {/* Multi-selects (Simplified UI using Select for demo, ideally Checkboxes or MultiSelect component) */}
      <div className="flex justify-between gap-x-10">
        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">
            Paths (Hold Ctrl to select multiple mock)
          </span>
          {/* Using a simple list of checkboxes for multi-select as ShadCn Select is single by default */}
          <div className="border p-4 rounded-md space-y-2 h-40 overflow-y-auto">
            {loadingPaths ? (
              <div className="text-sm text-gray-500">Loading Paths...</div>
            ) : (
              paths?.map((path) => (
                <div key={path.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.selectedPathIds.includes(path.id)}
                    onChange={() =>
                      handleMultiSelectChange(
                        "selectedPathIds",
                        path.id.toString()
                      )
                    }
                  />
                  <span>{path.name}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="w-1/2">
          <span className="text-xl font-semibold mb-2 block">Manhajs</span>
          <div className="border p-4 rounded-md space-y-2 h-40 overflow-y-auto">
            {loadingManhajs ? (
              <div className="text-sm text-gray-500">Loading Manhajs...</div>
            ) : (
              manhajs?.map((m) => (
                <div key={m.id} className="flex items-center gap-2">
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
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <CustomButton className="bg-primary text-white w-full">
          {mode === "add" ? "Add Halaqa" : "Update Halaqa"}
        </CustomButton>
      </div>
    </form>
  );
};

export default HalaqaForm;
