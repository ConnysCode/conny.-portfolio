import { AppProps } from 'next/app';

import '../styles/global.scss';

import { WindowLayout } from '@/context/window_layout';

type IAppProps = AppProps;

const MyApp = ({ Component, pageProps }: IAppProps) => {
  return (
    <WindowLayout>
      <Component {...pageProps} />
    </WindowLayout>
  );
};
export default MyApp;
