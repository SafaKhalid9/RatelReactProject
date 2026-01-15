// import React from 'react';
// import { Badge } from '@/Components/ShadCn/badge';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/Components/ShadCn/table';
// import { UserListItem } from '../Types/user.types';
// import PopoverUserTableAction from './PopoverUserTableAction';

// interface AllUsersTableProps {
//     users: UserListItem[];
// }

// const AllUsersTable: React.FC<AllUsersTableProps> = ({ users }) => {
//     return (
//         <div className="rounded-md border">
//             <Table>
//                 <TableHeader className="bg-[#CB997E]">
//                     <TableRow>
//                         <TableHead className="text-start text-white">الاسم</TableHead>
//                         <TableHead className="text-start text-white">رقم الهوية</TableHead>
//                         <TableHead className="text-start text-white">الصلاحية</TableHead>
//                          <TableHead className="text-start text-white">رقم الجوال</TableHead>
//                         <TableHead className="text-start text-white">العنوان</TableHead>
//                          <TableHead className="text-start text-white">الحالة</TableHead>
//                         <TableHead className="w-[100px]"></TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {users.length === 0 ? (
//                         <TableRow>
//                             <TableCell colSpan={7} className="h-24 text-center">
//                                 لا يوجد مستخدمين
//                             </TableCell>
//                         </TableRow>
//                     ) : (
//                         users.map((user) => (
//                             <TableRow key={user.id} className="font-semibold bg-white even:bg-slate-50">
//                                 <TableCell>{user.name}</TableCell>
//                                 <TableCell>{user.identityNumber}</TableCell>
//                                 <TableCell>
//                                      <Badge variant="outline">{user.role}</Badge>
//                                 </TableCell>
//                                 <TableCell>{user.phoneNumber}</TableCell>
//                                 <TableCell>{user.address}</TableCell>
//                                 <TableCell>
//                                      {/* Example logic for status, assuming we might check if blocked or verified later */}
//                                      {/* For now, just a placeholder or if there's a status field in future */}
//                                      <Badge className="bg-green-500">نشط</Badge>
//                                 </TableCell>
//                                 <TableCell>
//                                     <PopoverUserTableAction id={user.id} />
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     )}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default AllUsersTable;
