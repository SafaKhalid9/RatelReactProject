import React, { useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/Components/ShadCn/popover';
import { MoreHorizontal, Trash2, Edit, Eye } from 'lucide-react';
import { Button } from '@/Components/ShadCn/button';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '@/Components/ShadCn/dialog';
import { useDeleteMistakeType } from '../Services/mistakeType.service';
import { toast } from 'sonner';

interface MistakeTypeActionsPopoverProps {
    id: number;
}

const MistakeTypeActionsPopover: React.FC<MistakeTypeActionsPopoverProps> = ({ id }) => {
    const navigate = useNavigate();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const deleteMutation = useDeleteMistakeType();
    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteMutation.mutateAsync(id);
            toast.success('تم حذف نوع الخطأ بنجاح');
            setIsDeleteModalOpen(false);
        } catch (error) {
            toast.error('حدث خطأ أثناء حذف نوع الخطأ');
            console.error(error);
        }
    };

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40 flex flex-col gap-1 p-1" align="end">
                     <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 px-2 text-sm font-normal"
                        onClick={() => {
                            setOpen(false)
                            navigate(`/dashboard/mistake-types/view/${id}`)
                        }}
                    >
                        <Eye className="h-4 w-4" />
                        عرض
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 px-2 text-sm font-normal"
                        onClick={() => {
                            setOpen(false)
                            navigate(`/dashboard/mistake-types/edit/${id}`)
                        }}
                    >
                        <Edit className="h-4 w-4" />
                        تعديل
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 px-2 text-sm font-normal text-destructive hover:text-destructive"
                        onClick={() => {
                            setOpen(false);
                            setIsDeleteModalOpen(true);
                        }}
                    >
                        <Trash2 className="h-4 w-4" />
                        حذف
                    </Button>
                </PopoverContent>
            </Popover>

            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>هل أنت متأكد؟</DialogTitle>
                        <DialogDescription>
                            لا يمكن التراجع عن هذا الإجراء.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="gap-2 sm:gap-0">
                        <DialogClose asChild>
                            <Button variant="outline">إلغاء</Button>
                        </DialogClose>
                        <Button
                            variant="destructive"
                            onClick={handleDelete}
                            disabled={deleteMutation.isPending}
                        >
                            {deleteMutation.isPending ? 'جاري الحذف...' : 'حذف'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default MistakeTypeActionsPopover;
