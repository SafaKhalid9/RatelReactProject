import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
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
        className="bg-white text-[var(--primary)] border-none shadow-xl text-right"
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-right">
            {title}
          </DialogTitle>

          <DialogDescription className="opacity-80 text-right">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-row-reverse gap-2 mt-4 justify-start">
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isLoading}
            className="bg-red-600 w-20 hover:bg-red-700 text-white"
          >
            {isLoading ? "جارٍ الحذف..." : "حذف"}
          </Button>

          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-[var(--primary)] text-[var(--primary)] w-20"
          >
            إلغاء
          </Button>

          <DialogClose asChild>
            <button className="absolute left-4 top-4 cursor-pointer">✕</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
