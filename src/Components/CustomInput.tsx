import {Input} from './ShadCn/input';
interface ICustomInput {
  placeHolder?: string;
}
const CustomInput = ({placeHolder}: ICustomInput) => {
  return <Input className='bg-white max-w-60' placeholder={placeHolder} />;
};

export default CustomInput;
