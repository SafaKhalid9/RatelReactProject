import { Input } from "../ShadCn/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ShadCn/select";

interface DisplayFiltersProps {
  dateValue: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shiftValue: string;
  onShiftChange: (value: string) => void;
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DisplayFilters = ({
  dateValue,
  onDateChange,
  shiftValue,
  onShiftChange,
  searchValue,
  onSearchChange,
}: DisplayFiltersProps) => {
  return (
    <div className="flex flex-wrap items-end gap-4 p-4 rounded-lg" dir="rtl">
      <div className="w-64">
        <label className="text-gray-700 mb-1 block font-bold">التاريخ:</label>
        <Input className="bg-white" type="date" value={dateValue} onChange={onDateChange} />
      </div>

      <div className="w-48">
        <label className="text-gray-700 mb-1 block font-bold">الفترة:</label>
        <Select value={shiftValue} onValueChange={onShiftChange}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="اختر الفترة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Morning">صباحي</SelectItem>
            <SelectItem value="Evening">مسائي</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-64 mr-90">
        <label className="text-gray-700 mb-1 block font-bold">بحث عن معلم:</label>
        <Input className="bg-white" placeholder="بحث..." value={searchValue} onChange={onSearchChange} />
      </div>
    </div>
  );
};
export default DisplayFilters;