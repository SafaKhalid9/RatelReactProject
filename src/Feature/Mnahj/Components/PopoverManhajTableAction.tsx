import { useState } from "react";
import { MoreVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ShadCn/popover";
import { Link } from "react-router-dom";
import { useDeleteManhaj } from "../Services/manhaj.service";
import ConfirmDeleteDialog from "@/Components/Dashboard/CustomConfirmDeleteDialog";

type Props = {
  id: number;
};

const ManhajActionsPopover = ({ id }: Props) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { mutate: deleteManhaj, isPending } = useDeleteManhaj();

  const handleDelete = () => {
    deleteManhaj(id, {
      onSuccess: () => {
        setDeleteOpen(false);
      },
    });
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
          <Link
            to={`/dashboard/manhajs/view/${id}`}
            onClick={() => setPopoverOpen(false)}
            className="block text-sm px-2 py-2 rounded hover:bg-gray-100 text-right cursor-pointer p-2"
          >
            عرض التفاصيل
          </Link>

          <Link
            to={`/dashboard/manhajs/edit/${id}`}
            onClick={() => setPopoverOpen(false)}
            className="block text-sm px-2 py-2 rounded hover:bg-gray-100 text-right cursor-pointer p-2"
          >
            تعديل البيانات
          </Link>

          <button
            onClick={() => {
              setPopoverOpen(false);
              setDeleteOpen(true);
            }}
            className="block w-full text-sm px-2 py-2 rounded hover:bg-red-50 text-right text-red-600 cursor-pointer p-2"
          >
            حذف المنهج
          </button>
        </PopoverContent>
      </Popover>
      <ConfirmDeleteDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="تأكيد حذف المنهج"
        description="هل أنت متأكد من حذف هذا المنهج؟ لا يمكن التراجع عن هذا الإجراء."
        onConfirm={handleDelete}
        isLoading={isPending}
      />
    </>
  );
};

export default ManhajActionsPopover;
