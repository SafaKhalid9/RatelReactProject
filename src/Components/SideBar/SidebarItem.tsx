const SidebarItem = ({text, icon}: {text: string; icon: string}) => {
  return (
    <div className='w-full flex gap-x-2 justify-start items-end ps-3 pb-3 border-b mb-4'>
      <img className='w-8' src={icon} alt='charImage' />
      <span className='text-xl font-semibold'>{text}</span>
    </div>
  );
};
export default SidebarItem;
