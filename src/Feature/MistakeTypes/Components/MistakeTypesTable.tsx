import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/ShadCn/table';
import { MistakeType } from '../Types/mistakeType.types';
import MistakeTypeActionsPopover from './MistakeTypeActionsPopover';
import { Badge } from '@/Components/ShadCn/badge';

interface MistakeTypesTableProps {
    mistakes: MistakeType[];
}

const MistakeTypesTable: React.FC<MistakeTypesTableProps> = ({ mistakes }) => {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader className="bg-[#CB997E]">
                    <TableRow>
                        <TableHead className="text-start text-white">اسم الخطأ</TableHead>
                        <TableHead className="text-start text-white">مقدار الخصم (درجة)</TableHead>
                        <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mistakes.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={3} className="h-24 text-center">
                                لا توجد أنواع أخطاء مضافة
                            </TableCell>
                        </TableRow>
                    ) : (
                        mistakes.map((mistake) => (
                            <TableRow key={mistake.id} className="font-semibold bg-white even:bg-slate-50">
                                <TableCell>{mistake.name}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="text-base px-3">
                                        {mistake.degree}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <MistakeTypeActionsPopover id={mistake.id} />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default MistakeTypesTable;
