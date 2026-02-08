// import { Input } from "../ShadCn/input";

// interface DisplayFiltersProps {
//   dateValue: string;
//   onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   searchValue: string;
//   onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const DisplayFilters = ({
//   dateValue,
//   onDateChange,
//   searchValue,
//   onSearchChange,
// }: DisplayFiltersProps) => {
//   return (
//     <div className="flex justify-between gap-4 p-4 rounded-lg">
//       {/* حقل التاريخ */}
//       <div className="w-1/4">
//         <Input
//           type="date"
//           className="bg-white px-2 py-2"
//           value={dateValue}
//           onChange={onDateChange}
//         />
//       </div>

//       {/* حقل البحث */}
//       <div className="w-1/4">
//         <Input
//           className="bg-white px-2 py-2"
//           placeholder="بحث ..."
//           value={searchValue}
//           onChange={onSearchChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default DisplayFilters;








// import { Input } from "../ShadCn/input";

// interface DisplayFiltersProps {
//   dateValue?: string;
//   onDateChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   searchValue?: string;
//   onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const DisplayFilters = ({
//   dateValue = "",
//   onDateChange,
//   searchValue = "",
//   onSearchChange,
// }: DisplayFiltersProps) => {
//   return (
//     <div className="flex justify-between gap-4 p-4 rounded-lg" dir="rtl">
//       {/* حقل التاريخ */}
//       <div className="w-1/4">
//         <label className="text-gray-700 mb-1 block font-bold">اختر تاريخ:</label>
//         {/* <Input
//           type="date"
//           className="bg-white px-2 py-2"
//           defaultValue={dateValue}
//           onChange={onDateChange}
//         /> */}
//         <Input
//           type="date"
//           className="bg-white px-2 py-2"
//           value={dateValue} // استخدم value بدلاً من defaultValue
//           onChange={onDateChange}
//         />
//       </div>

//       {/* حقل البحث */}
//       <div className="w-1/4">
//         <label className="text-gray-700 mb-1 block font-bold">ابحث عن معلم</label>
//         <Input
//           className="bg-white px-2 py-2"
//           placeholder="بحث عن معلم..."
//           defaultValue={searchValue}
//           onChange={onSearchChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default DisplayFilters;






import { Input } from "../ShadCn/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ShadCn/select";

// 1. تعريف الواجهة (يفضل أن تكون هنا إذا كانت تخص هذا الملف فقط)
interface DisplayFiltersProps {
  dateValue: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shiftValue: string;
  onShiftChange: (value: string) => void;
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 2. تعريف المكون مع تصديره مباشرة (حل مشكلة Fast Refresh)
export const DisplayFilters = ({
  dateValue,
  onDateChange,
  shiftValue,
  onShiftChange,
  searchValue,
  onSearchChange,
}: DisplayFiltersProps) => {
  return (
    <div className="flex flex-wrap items-end gap-4 p-4 bg-white rounded-lg shadow-sm" dir="rtl">
      <div className="w-64">
        <label className="text-gray-700 mb-1 block font-bold">التاريخ:</label>
        <Input type="date" value={dateValue} onChange={onDateChange} />
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

      <div className="w-64">
        <label className="text-gray-700 mb-1 block font-bold">بحث عن معلم:</label>
        <Input placeholder="بحث..." value={searchValue} onChange={onSearchChange} />
      </div>
    </div>
  );
};

// 3. التصدير الافتراضي (اختياري ولكن يفضل استخدام التصدير المسمى أعلاه)
export default DisplayFilters;