import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/Components/ShadCn/dialog";
import { Button } from "@/Components/ShadCn/button";

type ConfirmDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  onConfirm: () => void;
  isLoading?: boolean;
};

export default function ConfirmDeleteDialog({
  open,
  onOpenChange,
  title = "تأكيد الحذف",
  description = "هل أنت متأكد من الحذف؟ لا يمكن التراجع عن هذا الإجراء.",
  onConfirm,
  isLoading = false,
}: ConfirmDeleteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        dir="rtl"
        className="bg-white text-(--primary) border-none shadow-xl text-right"
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-right">
            {title}
          </DialogTitle>

          <DialogDescription className="opacity-80 text-right">
            {description}
          </DialogDescription>
        </DialogHeader>

        {/* <DialogFooter className="flex flex-row-reverse gap-2 mt-4 justify-start"> */}
        <DialogFooter
          className="
    flex
    flex-row-reverse
    gap-2
    mt-4
    justify-start
    sm:justify-start
  "
        >
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isLoading}
            className="bg-red-600 w-20 hover:bg-red-700 text-white cursor-pointer"
          >
            {isLoading ? "جارٍ الحذف..." : "حذف"}
          </Button>

          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-(--primary) text-(--primary) w-20 hover:text-white hover:border-(--light-green) hover:bg-(--primary) cursor-pointer"
          >
            إلغاء
          </Button>

          {/* <DialogClose asChild>
            <button className="absolute left-4 top-4 cursor-pointer">✕</button>
          </DialogClose> */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute left-4 top-4 cursor-pointer"
          >
            ✕
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
