import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ShadCn/popover";
import { Button } from "@/Components/ShadCn/button";
import { useDeleteStudent } from "../Services/student.service";
import { useState } from "react";
import ConfirmDeleteDialog from "@/Components/Dashboard/CustomConfirmDeleteDialog";

interface StudentActionProps {
  id: number;
}

const StudentActionsPopover = ({ id }: StudentActionProps) => {
  const { mutateAsync: deleteStudent, isPending: isDeleting } = useDeleteStudent();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = async () => {
    await deleteStudent(id);
    setDeleteOpen(false);
  };

  return (
    <>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 flex justify-center items-center">
            <MoreVertical className="h-4 w-4 text-gray-600" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="bg-white z-50 shadow-lg border rounded-md p-2 w-44"
        >
          <Link
            to={`/dashboard/students/view/${id}`}
            onClick={() => setPopoverOpen(false)}
            className="block text-sm px-2 py-2 rounded hover:bg-gray-100 text-right cursor-pointer"
          >
            عرض التفاصيل
          </Link>

          <Link
            to={`/dashboard/students/edit/${id}`}
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
        title="تأكيد حذف الطالب"
        description="هل أنت متأكد من حذف هذه الطالب؟ لا يمكن التراجع عن هذا الإجراء."
        onConfirm={handleDelete}
        isLoading={isDeleting}
      />
    </>
  );
};

export default StudentActionsPopover;
