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








import { Input } from "../ShadCn/input";

interface DisplayFiltersProps {
  dateValue?: string;
  onDateChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DisplayFilters = ({
  dateValue = "",
  onDateChange,
  searchValue = "",
  onSearchChange,
}: DisplayFiltersProps) => {
  return (
    <div className="flex justify-between gap-4 p-4 rounded-lg" dir="rtl">
      {/* حقل التاريخ */}
      <div className="w-1/4">
        <label className="text-gray-700 mb-1 block font-bold">اختر تاريخ:</label>
        <Input
          type="date"
          className="bg-white px-2 py-2"
          defaultValue={dateValue}
          onChange={onDateChange}
        />
      </div>

      {/* حقل البحث */}
      <div className="w-1/4">
        <label className="text-gray-700 mb-1 block font-bold">ابحث عن معلم</label>
        <Input
          className="bg-white px-2 py-2"
          placeholder="بحث عن معلم..."
          defaultValue={searchValue}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

export default DisplayFilters;