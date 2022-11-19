import { useEffect } from 'react';

import WindowTabContent from '@/components/layout/window-tab-content';

import { useWindowLayout } from '@/context/window_layout';

export default function Page404() {
  const layout = useWindowLayout();
  useEffect(() => {
    layout.setActiveTab('404');
  }, []);
  return <WindowTabContent>no foundy</WindowTabContent>;
}
