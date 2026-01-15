import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/Components/ShadCn/table';
  import type { MemorizationPath } from '../Types/memorizationPath.types';

  import PopoverPathAction from './PopoverPathAction';

  const MemorizationPathsTable = ({ listOfPaths }: { listOfPaths: MemorizationPath[] }) => {
    return (
      <Table>
        <TableHeader className='bg-[#CB997E]'>
          <TableRow>
            <TableHead className='text-start text-white'>اسم المسار</TableHead>
            <TableHead className='text-start text-white'>من</TableHead>
            <TableHead className='text-start text-white'>إلى</TableHead>
            <TableHead className='text-start text-white w-[50px]'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listOfPaths.length === 0 && (
            <TableRow>
              <TableCell colSpan={4}>
                <p className='text-center'>لا توجد بيانات</p>
              </TableCell>
            </TableRow>
          )}
          {listOfPaths.length > 0 &&
            listOfPaths.map((path) => (
              <TableRow key={path.pathId} className='font-semibold bg-white'>
                <TableCell>{path.name}</TableCell>
                <TableCell>{path.memorizeFrom}</TableCell>
                <TableCell>{path.memorizeTo}</TableCell>
                <TableCell className='cursor-pointer'>
                  <PopoverPathAction id={path.pathId} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    );
  };

  export default MemorizationPathsTable;