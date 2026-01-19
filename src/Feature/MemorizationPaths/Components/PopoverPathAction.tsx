import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ShadCn/popover";
import { useDeleteMemorizationPath } from "../Services/memorizationPath.service";
import { useState } from "react";
import ConfirmDeleteDialog from "../../../Components/Dashboard/CustomConfirmDeleteDialog";

interface PopoverPathActionProps {
  id: number;
}

const PopoverPathAction = ({ id }: PopoverPathActionProps) => {
  const { mutateAsync: deletePath, isPending } = useDeleteMemorizationPath();

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = async () => {
    await deletePath(id);
    setDeleteOpen(false);
  };

  return (
    <>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <button className="flex justify-center items-center w-full cursor-pointer p-2">
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="bg-white z-50 shadow-lg border rounded-md p-2 w-44"
        >
          {/* <Link
            to={`/dashboard/memorization-paths/view/${id}`}
            onClick={() => setPopoverOpen(false)}
            className="block text-sm px-2 py-2 rounded hover:bg-gray-100 text-right cursor-pointer"
          >
            عرض التفاصيل
          </Link> */}

          <Link
            to={`/dashboard/memorization-paths/edit/${id}`}
            onClick={() => setPopoverOpen(false)}
            className="block text-sm px-2 py-2 rounded hover:bg-gray-100 text-right cursor-pointer"
          >
            تعديل البيانات
          </Link>

          <button
            onClick={() => {
              setPopoverOpen(false);
              setDeleteOpen(true);
            }}
            className="block w-full text-sm px-2 py-2 rounded hover:bg-red-50 text-right text-red-600 cursor-pointer"
          >
            حذف
          </button>
        </PopoverContent>
      </Popover>

      <ConfirmDeleteDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="تأكيد حذف المسار"
        description="هل أنت متأكد من حذف هذا المسار؟ لا يمكن التراجع عن هذا الإجراء."
        onConfirm={handleDelete}
        isLoading={isPending}
      />
    </>
  );
};

export default PopoverPathAction;
