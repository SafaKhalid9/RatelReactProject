import {ActivitiesImage, BarChardImage, KoranImage, LogoImage, PathImage, StudentsImage, ThreeBookImage, UsersImage} from '@/assets';
import SidebarItem from './SidebarItem';
import type {ISideBarItem} from '@/Types/ISideBarItem';

const Sidebar = () => {
  const listOfSideBarItem: ISideBarItem[] = [
    {
      text: 'الأحصائيات',
      icon: BarChardImage,
      path: ''
    },
    {
      text: 'إدارة الحلقات',
      icon: KoranImage,
      path: 'halaqas'
    },
    {
      text: 'إدارة المستخدمين',
      icon: UsersImage,
      path: 'users'
    },
    {
      text: 'إدارة الطالبات',
      icon: StudentsImage,
      path: ''
    },
    {
      text: 'إدارة المسارات',
      icon: PathImage,
      path: 'memorization-paths'
    },
    {
      text: 'إدارة المناهج',
      icon: ThreeBookImage,
      path: ''
    },
    {
      text: 'تحضير المعلمات',
      icon: ActivitiesImage,
      path: ''
    }
  ];
  return (
    <aside className='min-w-60 flex flex-col items-center bg-white h-screen rounded-tr-lg py-2 px-4 '>
      <img className='w-25 mb-10' src={LogoImage} alt='logo Image' />
      {listOfSideBarItem.map((item, index) => {
        return <SidebarItem key={index} item={item} />;
      })}
    </aside>
  );
};

export default Sidebar;
