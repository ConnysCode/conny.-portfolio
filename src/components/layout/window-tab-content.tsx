import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface IWindowTabContentProps {
  children: ReactNode;
}

const WindowTabContent: FC<IWindowTabContentProps> = ({ children }) => {
  return (
    <motion.div className='flex h-full w-full flex-col items-center justify-center p-10 text-white'>
      {children}
    </motion.div>
  );
};

export default WindowTabContent;
