import { motion } from 'framer-motion';
import { FC } from 'react';

import { useWindowLayout, WindowTabType } from '@/context/window_layout';

interface IWindowTabProps {
  text: string;
  tabID: WindowTabType;
}

const TabStyle = (active: boolean) => {
  const className =
    'relative flex items-center px-4 h-[29px] cursor-pointer hover:bg-white/10 transition ease-in-out';
  const activeClassName = 'cursor-default hover:bg-white/0';

  return `${className} ${active ? activeClassName : ``}`;
};

const WindowTab: FC<IWindowTabProps> = ({ text, tabID }) => {
  const layout = useWindowLayout();
  const active = layout.selectedTab === tabID;
  return (
    <motion.div
      onClick={() => {
        layout.setSelectedTab(tabID);
      }}
      className={TabStyle(!!active)}
    >
      {active && (
        <motion.div
          transition={{ type: 'spring', duration: 0.2 }}
          initial={false}
          layout
          layoutId='activeTabLine'
          className='absolute top-0 left-0 z-10 h-[2px] w-full bg-[#3399CB]'
        />
      )}
      {active && (
        <motion.div
          transition={{ type: 'spring', duration: 0.2 }}
          initial={false}
          layout
          layoutId='activeTabBG'
          className='absolute top-0 left-0 h-full w-full bg-[#222222]'
        />
      )}
      <span className='z-10'>{text}</span>
    </motion.div>
  );
};

export default WindowTab;
