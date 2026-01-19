import { useState } from "react";
import { MoreVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ShadCn/popover";
import { Link } from "react-router-dom";
import { useDeleteHalaqa } from "../Services/halaqa.service";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ShadCn/dialog";
import { Button } from "@/Components/ShadCn/button";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
  id: number;
};

const HalaqaActionsPopover = ({ id }: Props) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { mutate: deleteHalaqa, isPending: isDeleting } = useDeleteHalaqa();

  const handleDelete = () => {
    deleteHalaqa(id, {
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
            to={`/dashboard/halaqas/view/${id}`}
            onClick={() => setPopoverOpen(false)}
            className="block text-sm px-2 py-2 rounded hover:bg-gray-100 text-right cursor-pointer p-2"
          >
            عرض التفاصيل
          </Link>

          <Link
            to={`/dashboard/halaqas/edit/${id}`}
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
            حذف الحلقة
          </button>
        </PopoverContent>
      </Popover>
      {/* ------------------------------------------------------------------------------------------------------------- */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent
          dir="rtl"
          className="
      bg-white
      text-[var(--primary)]
      border-none
      shadow-xl
      text-right
    "
        >
          <DialogHeader>
            <DialogTitle className="text-[var(--primary)] text-lg font-semibold text-right">
              تأكيد الحذف
            </DialogTitle>

            <DialogDescription className="text-[var(--primary)] opacity-80 text-right">
              هل أنت متأكد من حذف هذه الحلقة؟ لا يمكن التراجع عن هذا الإجراء.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex flex-row-reverse gap-2 mt-4 justify-start sm:justify-start">
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-600 w-20 hover:bg-red-700 text-white cursor-pointer p-2 rounded-md"
            >
              {isDeleting ? "جارٍ الحذف..." : "حذف"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setDeleteOpen(false)}
              className="border-[var(--primary)] text-[var(--primary)] w-20 cursor-pointer p-2 rounded-md"
            >
              إلغاء
            </Button>
            <DialogClose asChild>
              <button className="absolute left-4 top-4 cursor-pointer">
                ✕
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HalaqaActionsPopover;
