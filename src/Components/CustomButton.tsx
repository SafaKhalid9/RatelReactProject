// import type {ReactNode} from 'react';
// import {Button} from './ShadCn/button';

// const CustomButton = ({children, className}: {children: ReactNode; className?: string}) => {
//   return <Button className={`bg-primary-text w-50 hover:bg-primary-text/90 cursor-pointer ${className}`}>{children}</Button>;
// };

// export default CustomButton;



import type {ReactNode, ButtonHTMLAttributes} from 'react';
import {Button} from './ShadCn/button';

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const CustomButton = ({children, className, ...props}: CustomButtonProps) => {
  return (
    <Button
      {...props}
      className={`bg-primary-text hover:bg-primary-text/90 cursor-pointer ${className}`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
