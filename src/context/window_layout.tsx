import { motion, useDragControls } from 'framer-motion';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';

import {
  CloseIcon,
  MaximizeIcon,
  MinimizeIcon,
} from '@/components/layout/svg/window-controls';
import WindowTab from '@/components/layout/window-tab';

export type WindowTabType = `home` | `projects` | `random`;

interface IWindowLayoutProviderProps {
  selectedTab: WindowTabType;
  setSelectedTab: (tab: WindowTabType) => void;
}

const WindowLayoutContext = createContext<IWindowLayoutProviderProps>({
  setSelectedTab: () => false,
  selectedTab: 'home',
});

interface IWindowLayout {
  children: ReactNode;
}

const WindowLayout: FC<IWindowLayout> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<WindowTabType>(`home`);
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();
  return (
    <WindowLayoutContext.Provider
      value={{
        selectedTab: activeTab,
        setSelectedTab: (tab) => {
          setActiveTab(tab);
        },
      }}
    >
      <motion.div
        style={{
          background:
            'url("http://cdn.namespace.media/s/nrBr6AikMtEcJsW/download/wallpapersden.com_k-beautiful-landscape-digital-art_3840x2160.jpg")',
          backgroundSize: 'cover',
        }}
        className='relative flex h-screen w-screen items-center justify-center overflow-hidden'
      >
        <div className='absolute top-0 left-0 h-full w-full p-10'>
          <div ref={constraintsRef} className='h-full w-full'></div>
        </div>
        <motion.div
          drag
          dragListener={false}
          dragMomentum={false}
          dragConstraints={constraintsRef}
          dragControls={dragControls}
          layout
          className='relative h-[770px] w-[1322px] backdrop-blur-md'
        >
          <div className='flex h-full w-full flex-col overflow-hidden rounded-md opacity-95 shadow-md'>
            {/* Tab section */}
            <div
              onPointerDown={(e) =>
                dragControls.start(e, { snapToCursor: false })
              }
              className='flex h-fit select-none flex-col bg-[#2C2C2E] text-[11px] text-white'
            >
              <div className='px-3 py-2'>
                <div className='relative flex justify-center opacity-75'>
                  <ol className='absolute left-0 flex flex-row gap-[15px]'>
                    <li>Edit</li>
                    <li>Edit</li>
                    <li>Edit</li>
                  </ol>
                  <p>Welcome • Portfolio*</p>
                  <ol className='absolute right-0 flex flex-row items-end gap-5'>
                    <li>
                      <MinimizeIcon />
                    </li>
                    <li>
                      <MaximizeIcon />
                    </li>
                    <li>
                      <CloseIcon />
                    </li>
                  </ol>
                </div>
              </div>
              <div className='-mb-[1px] flex w-full grow flex-row'>
                <WindowTab text='Home' tabID='home' />
                <WindowTab text='random.json' tabID='random' />
                <WindowTab text='recent-projects.tb' tabID='projects' />
              </div>
            </div>
            {/* Content section */}
            <div className='z-20 w-full grow bg-[#222222]'>{children}</div>
          </div>
        </motion.div>
      </motion.div>
    </WindowLayoutContext.Provider>
  );
};

export { WindowLayout };

export const useWindowLayout = (): IWindowLayoutProviderProps =>
  useContext(WindowLayoutContext);
