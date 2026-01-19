import { Plus } from "lucide-react";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";
import { Input } from "../ShadCn/input";

interface ICustomAddButtonAndSearch {
  path: string;
  textButton: string;
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomAddButtonAndSearch = ({
  path,
  textButton,
  searchValue,
  onSearchChange,
}: ICustomAddButtonAndSearch) => {
  return (
    <div className="flex justify-between gap-4 p-4 rounded-lg">
      <Link to={path} className="w-1/4">
        <CustomButton className="flex items-center gap-2 text-white">
          <Plus />
          {textButton}
        </CustomButton>
      </Link>

      <div className="w-1/4">
        <Input
          className="bg-white px-2 py-2"
          placeholder="بحث ..."
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

export default CustomAddButtonAndSearch;
