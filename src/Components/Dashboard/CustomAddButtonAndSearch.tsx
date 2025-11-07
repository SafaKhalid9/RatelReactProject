import {Plus} from 'lucide-react';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import {Link} from 'react-router';
interface ICustomAddButtonAndSearch {
  path: string;
  textButton: string;
}

const CustomAddButtonAndSearch = ({path, textButton}: ICustomAddButtonAndSearch) => {
  return (
    <div className='flex justify-between mb-5'>
      <Link to={path}>
        <CustomButton>
          <Plus />
          {textButton}
        </CustomButton>
      </Link>
      <CustomInput placeHolder='بحث' />
    </div>
  );
};

export default CustomAddButtonAndSearch;
