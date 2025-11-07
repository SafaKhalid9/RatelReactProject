import type {ReactNode} from 'react';
import {Button} from './ShadCn/button';

const CustomButton = ({children, className}: {children: ReactNode; className?: string}) => {
  return <Button className={`bg-primary-text w-50 hover:bg-primary-text/90 cursor-pointer ${className}`}>{children}</Button>;
};

export default CustomButton;
