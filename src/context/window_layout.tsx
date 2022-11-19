import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';

import { Windows } from '@/components/layout/svg/icons';
import {
  CloseIcon,
  MaximizeIcon,
  MinimizeIcon,
} from '@/components/layout/svg/window-controls';
import WindowTab from '@/components/layout/window-tab';

export const Tabs: {
  [key: string]: {
    title: string;
    route: string;
    icon: JSX.Element;
    secret?: boolean;
  };
} = {
  home: {
    title: 'this-is-me.prf',
    route: `/`,
    icon: <></>,
  },
  projects: {
    title: 'My Projects',
    route: `/projects`,
    icon: <></>,
  },
  random: {
    title: 'Random',
    route: `/`,
    icon: <></>,
  },
  '404': {
    title: 'Page not Found',
    route: `/`,
    icon: <></>,
    secret: true,
  },
};
export type WindowTabType = keyof typeof Tabs;

interface IWindowLayoutProviderProps {
  setActiveTab: (tab: WindowTabType) => void;
  activeTab: WindowTabType;
}

const WindowLayoutContext = createContext<IWindowLayoutProviderProps>({
  setActiveTab: () => false,
  activeTab: 'home',
});

interface IWindowLayout {
  children: ReactNode;
}

const WindowLayout: FC<IWindowLayout> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<WindowTabType>(`home`);
  const [closed, setClosed] = useState(false);
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();
  const router = useRouter();
  return (
    <WindowLayoutContext.Provider
      value={{
        activeTab,
        setActiveTab: (tab) => {
          setActiveTab(tab);
        },
      }}
    >
      <motion.div
        style={{
          background:
            'url("https://img.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg?w=2000&t=st=1668879861~exp=1668880461~hmac=1c371dd0cb4c067a15e4e446b945523413545f745f102c907c82fc4c8ac32415")',
          backgroundSize: 'cover',
        }}
        className='relative flex h-screen w-screen items-center justify-center overflow-hidden'
      >
        <div className='absolute top-0 left-0 h-full w-full p-10'>
          <div ref={constraintsRef} className='h-full w-full'></div>
        </div>
        <AnimatePresence>
          {closed ? (
            <motion.div
              key='openclosebutton'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className='fixed bottom-5 mx-auto cursor-pointer rounded-md bg-black/25 p-2 shadow-md backdrop-blur-sm'
              onClick={() => {
                setClosed(false);
              }}
            >
              <div className='flex h-10 w-10 items-center justify-center rounded-md bg-black/25 p-3 shadow-sm transition ease-in-out hover:bg-black/40'>
                <div className='scale-50'>
                  <Windows />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              drag
              dragListener={false}
              dragMomentum={false}
              dragConstraints={constraintsRef}
              dragControls={dragControls}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', duration: 0.2 },
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'tween', duration: 0.2 }}
              layout
              className='relative h-[770px] w-[1322px] backdrop-blur-lg'
            >
              <div className='flex h-full w-full flex-col overflow-hidden rounded-md shadow-md'>
                {/* Tab section */}
                <div
                  onPointerDown={(e) =>
                    dragControls.start(e, { snapToCursor: false })
                  }
                  className='relative flex h-fit select-none flex-col text-[11px] text-white'
                >
                  <div className='absolute left-0 top-0 h-full w-full bg-[#2C2C2E] opacity-95' />
                  <div className='px-3 py-2'>
                    <div className='relative flex justify-center opacity-75'>
                      <ol className='absolute left-0 flex flex-row gap-[15px]'>
                        <li>Edit</li>
                        <li>
                          <Link href='https://github.com/ConnysCode'>
                            Github
                          </Link>
                        </li>
                        <li>
                          <Link href='https://www.linkedin.com/in/morian-david-engelhardt-491b18243'>
                            LinkedIn
                          </Link>
                        </li>
                      </ol>
                      <p>{Tabs[activeTab].title} • Portfolio*</p>
                      <ol className='absolute right-0 flex flex-row items-end gap-5'>
                        <li
                          className='flex aspect-square h-full cursor-pointer items-end'
                          onClick={() => {
                            setClosed(true);
                          }}
                        >
                          <MinimizeIcon />
                        </li>
                        <li className=' flex aspect-square h-full cursor-pointer items-end'>
                          <MaximizeIcon />
                        </li>
                        <li className='flex aspect-square h-full cursor-pointer items-end'>
                          <CloseIcon />
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className='-mb-[1px] flex w-full grow flex-row'>
                    {Object.entries(Tabs)
                      .filter((t) => !t[1].secret)
                      .map(([tabID, tab]) => (
                        <WindowTab
                          tabID={tabID}
                          tab={tab}
                          key={`tab_${tabID}`}
                        />
                      ))}
                  </div>
                </div>
                {/* Content section */}
                <div className='relative z-20 flex w-full grow flex-row gap-10 '>
                  <div className='absolute left-0 top-0 h-full w-full bg-[#222222] opacity-90' />
                  <AnimatePresence initial={false} mode='popLayout'>
                    <motion.div
                      key={router.asPath}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', duration: 0.3 }}
                      className='z-20 h-full w-full'
                    >
                      {children}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </WindowLayoutContext.Provider>
  );
};

export { WindowLayout };

export const useWindowLayout = (): IWindowLayoutProviderProps =>
  useContext(WindowLayoutContext);
