import {Badge} from '@/Components/ShadCn/badge';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import type {IAllUsersTable} from '../Types/IAllUsersTable';
import PopoverUserTableAction from './PopoverUserTableAction';

const AllUsersTable = ({listOfUsers}: {listOfUsers: IAllUsersTable[]}) => {
  return (
    <Table>
      <TableHeader className='bg-[#CB997E]'>
        <TableRow>
          <TableHead className='text-start text-white'>اسم المستخدم</TableHead>
          <TableHead className='text-start text-white'>مجاز؟</TableHead>
          <TableHead className='text-start text-white'>الدور</TableHead>
          <TableHead className='text-start text-white'>الموقع</TableHead>
          <TableHead className='text-start text-white'>رقم الجوال</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfUsers.length === 0 && (
          <TableRow>
            <TableCell colSpan={6}>
              <p className='text-center'>No Data Found</p>
            </TableCell>
          </TableRow>
        )}
        {listOfUsers.length > 0 &&
          listOfUsers.map((user, index) => (
            <TableRow key={index} className='font-semibold bg-white'>
              <TableCell>{user.userName}</TableCell>
              <TableCell>
                <Badge className={user.hasLicence ? 'bg-green-500' : 'bg-red-500'}>{user.hasLicence ? 'نعم' : 'لا'}</Badge>
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell className='cursor-pointer'>
                <PopoverUserTableAction />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default AllUsersTable;
