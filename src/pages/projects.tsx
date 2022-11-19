import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';

import WindowTabContent from '@/components/layout/window-tab-content';

import { useWindowLayout } from '@/context/window_layout';

type IPageProjectsProps = NextPageContext;

const PageProjects: NextPage<IPageProjectsProps> = () => {
  const layout = useWindowLayout();
  useEffect(() => {
    layout.setActiveTab('projects');
  }, []);
  return (
    <WindowTabContent>
      <p>hello</p>
    </WindowTabContent>
  );
};

export default PageProjects;
