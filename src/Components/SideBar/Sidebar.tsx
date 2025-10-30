import {ActivitiesImage, BarChardImage, KoranImage, LogoImage, PathImage, StudentsImage, ThreeBookImage, UsersImage} from '@/assets';
import SidebarItem from './SidebarItem';

interface ISideBarItem {
  text: string;
  icon: string;
}

const Sidebar = () => {
  const listOfSideBarItem: ISideBarItem[] = [
    {
      text: 'الأحصائيات',
      icon: BarChardImage
    },
    {
      text: 'إدارة الحلقات',
      icon: KoranImage
    },
    {
      text: 'إدارة المستخدمين',
      icon: UsersImage
    },
    {
      text: 'إدارة الطالبات',
      icon: StudentsImage
    },
    {
      text: 'إدارة المسارات',
      icon: PathImage
    },
    {
      text: 'إدارة المناهج',
      icon: ThreeBookImage
    },
    {
      text: 'تحضير المعلمات',
      icon: ActivitiesImage
    }
  ];
  return (
    <aside className='w-60 flex flex-col items-center bg-red-500 h-screen my-4 mx-5 rounded-tr-lg py-2 px-4 '>
      <img className='w-30 mb-2' src={LogoImage} alt='fff' />
      {listOfSideBarItem.map((item, index) => {
        return <SidebarItem key={index} text={item.text} icon={item.icon} />;
      })}
    </aside>
  );
};

export default Sidebar;
