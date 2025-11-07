import {ArrowDown} from 'lucide-react';
import {Popover, PopoverContent} from '@/Components/ShadCn/popover';
import {PopoverTrigger} from '@radix-ui/react-popover';
import {Link} from 'react-router';
function PopoverUserTableAction() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ArrowDown />
      </PopoverTrigger>
      <PopoverContent align='end' className='flex flex-col gap-y-2'>
        <Link className='hover:text-gray-500' to={`details/${1}`}>
          عرض تفاصيل الطالبة
        </Link>
        <Link className='hover:text-gray-500' to={`edit/${1}`}>
          تعديل معلومات الطالبة
        </Link>
        <div className='hover:text-gray-500 cursor-pointer'>حذف الطالبة</div>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverUserTableAction;
