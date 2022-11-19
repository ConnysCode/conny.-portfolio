import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

import { Tabs, useWindowLayout } from '@/context/window_layout';

interface IWindowTabProps {
  tab: typeof Tabs.home;
  tabID: string;
}

const TabStyle = (active: boolean) => {
  const className =
    'relative flex items-center px-4 h-[29px] cursor-pointer hover:bg-white/10 transition ease-in-out';
  const activeClassName = 'cursor-default hover:bg-white/0 ';

  return `${className} ${active ? activeClassName : ``}`;
};

const WindowTab: FC<IWindowTabProps> = ({ tab, tabID }) => {
  const layout = useWindowLayout();
  const active = layout.activeTab === tabID;
  return (
    <Link href={tab.route}>
      <motion.div className={TabStyle(!!active)}>
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
            className='absolute top-0 left-0 h-full w-full bg-[#222222]/20'
          />
        )}
        <span className='z-10'>{tab.title}</span>
      </motion.div>
    </Link>
  );
};

export default WindowTab;
