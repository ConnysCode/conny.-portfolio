import { useEffect } from 'react';

import WindowTabContent from '@/components/layout/window-tab-content';

import { useWindowLayout } from '@/context/window_layout';

export default function HomePage() {
  const layout = useWindowLayout();
  useEffect(() => {
    layout.setActiveTab('home');
  }, []);
  return (
    <WindowTabContent>
      <div className='-mt-10 grid w-full grid-cols-2 gap-[28px] px-40'>
        <div className='grid-col col-span-2'>
          <h1 className='p-0'>Hey, I am Conny.</h1>
          <p className='text-[16.2px]'>
            Fullstack Software Developer, Web Designer & Customer Support
          </p>
        </div>
        <div className='grid-col'>
          <p className='pb-2 opacity-100'>Who am i?</p>
          <p>
            I am a 21 year old full stack software engineer with a lot of
            experience in web and software development (JS, TS, ReactJS and HTML
            + CSS). I have also done a lot of . NET and Java-based software
            programming, and have experience developing games from an indie
            developer perspective.
          </p>
        </div>
        <div className='grid-col'>
          <p className='pb-2 opacity-100'>First and Foremost</p>
          <pre>
            <code className='w-full overflow-hidden'>
              {'const user = {'}
              <br />
              {'    firstName: `Yee`,'}
              <br />
              {'    lastName: `Mee`,'}
              <br />
              {'    skills: ['}
              <br />
              {'      `Vanilla JS`, `NodeJS`, `ReactJS`,'}
              <br />
              {'      `Java`, `HTML & CSS`, `c#`, `Unity Game Engine`,'}
              <br />
              {'      `Adobe Photoshop`, `Adobe XD`'}
              <br />
              {'    ]'}
              <br />
              {'}'}
              <br />
            </code>
          </pre>
        </div>
        <div className='grid-col col-span-2'>
          <p className='pb-2 opacity-100'>Who am i?</p>
          <p>
            Since founding XP in May 2020 with a friend, I have been responsible
            for design, technical implementation, team coordination, and general
            project management. Through XP's immense growth over the years, I
            have also learned how to properly scale a software stack and
            associated infrastructure. I have a great passion for development
            and design and love learning more to increase the efficiency of
            myself and my code.
          </p>
        </div>
      </div>
    </WindowTabContent>
  );
}
