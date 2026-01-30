import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ShadCn/dialog";
import { Button } from "@/Components/ShadCn/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { toast } from "sonner";
type Props = {
  id: string | number;
  url: string;
  name: string;
  keys: string[];
};
export default function DeleteDailog({ id, name, keys, url }: Props) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const useDelete = useMutation({
    mutationFn: async () => {
      await apiClient.delete(`${url}/${id}`);
    },
    onSuccess: () => {
      toast.success(`تم حذف بنجاح`);
      queryClient.invalidateQueries({ queryKey: keys });
      setOpen(false);
    },
    onError: () => {
      toast.error(`حدث خطأ أثناء الحذف`);
      setOpen(false);
    },
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="cursor-pointer" variant="ghost">
          {name}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>هل انت متأكد من الحذف؟</DialogTitle>
          <DialogDescription>
            هذا الحذف لا يمكن التراجع عنه. سيتم حذف حسابك وحذف بياناتك من
            خادمنا.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="cursor-pointer">الغاء</DialogClose>
          <DialogClose asChild>
            <Button
              className="bg-red-500 text-white rounded-2xl"
              onClick={() => useDelete.mutate()}
            >
              حذف
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
