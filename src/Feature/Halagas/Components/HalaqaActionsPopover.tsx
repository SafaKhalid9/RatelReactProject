import { useState } from "react";
import { ArrowDown } from "lucide-react";
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
          <div className="cursor-pointer flex justify-center">
            <ArrowDown className="h-4 w-4 text-gray-500" />
          </div>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-48 flex flex-col gap-y-2 p-2">
          <Link
            className="text-sm px-2 py-1.5 hover:bg-slate-100 rounded flex items-center gap-2"
            to={`/dashboard/halaqas/view/${id}`}
            onClick={() => setPopoverOpen(false)}
          >
            View Details
          </Link>
          <Link
            className="text-sm px-2 py-1.5 hover:bg-slate-100 rounded flex items-center gap-2"
            to={`/dashboard/halaqas/edit/${id}`}
            onClick={() => setPopoverOpen(false)}
          >
            Edit Info
          </Link>
          <button
            className="text-sm px-2 py-1.5 hover:bg-slate-100 rounded flex items-center gap-2 text-red-600 text-start w-full"
            onClick={() => {
              setPopoverOpen(false);
              setDeleteOpen(true);
            }}
          >
            Delete Halaqa
          </button>
        </PopoverContent>
      </Popover>

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this Halaqa? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setDeleteOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HalaqaActionsPopover;
