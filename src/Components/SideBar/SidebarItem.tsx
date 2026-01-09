import type {ISideBarItem} from '@/Types/ISideBarItem';
import {Link} from 'react-router-dom';

const SidebarItem = ({item: {text, icon, path}}: {item: ISideBarItem}) => {
  return (
    <Link to={path} className='cursor-pointer select-none w-full rounded-lg hover:bg-primary flex gap-x-2 justify-start items-end ps-3 pb-3 border-b mb-4'>
      <img className='w-8' src={icon} alt='charImage' />
      <span className='text-xl font-semibold'>{text}</span>
    </Link>
  );
};
export default SidebarItem;
