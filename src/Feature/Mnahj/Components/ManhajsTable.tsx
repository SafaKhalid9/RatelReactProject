// import React from 'react';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/Components/ShadCn/table';
// import { ManhajListItem } from '../Types/manhaj.types';
// import PopoverManhajTableAction from './PopoverManhajTableAction';

// interface ManhajsTableProps {
//     manhajs: ManhajListItem[];
// }

// const ManhajsTable: React.FC<ManhajsTableProps> = ({ manhajs }) => {
//     return (
//         <div className="rounded-md border">
//             <Table>
//                 <TableHeader className="bg-[#CB997E]">
//                     <TableRow>
//                         <TableHead className="text-start text-white">اسم المنهج</TableHead>
//                         <TableHead className="text-start text-white">الكاتب</TableHead>
//                          <TableHead className="text-start text-white">الفئة المستهدفة</TableHead>
//                         <TableHead className="text-start text-white">عدد الدروس</TableHead>
//                         <TableHead className="w-[100px]"></TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {manhajs.length === 0 ? (
//                         <TableRow>
//                             <TableCell colSpan={5} className="h-24 text-center">
//                                 لا يوجد مناهج
//                             </TableCell>
//                         </TableRow>
//                     ) : (
//                         manhajs.map((manhaj) => (
//                             <TableRow key={manhaj.id} className="font-semibold bg-white even:bg-slate-50">
//                                 <TableCell>{manhaj.name}</TableCell>
//                                 <TableCell>{manhaj.authorName}</TableCell>
//                                 <TableCell>{manhaj.targetAudience}</TableCell>
//                                 <TableCell>{manhaj.numberOfLessons}</TableCell>
//                                 <TableCell>
//                                     <PopoverManhajTableAction id={manhaj.id} />
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     )}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default ManhajsTable;