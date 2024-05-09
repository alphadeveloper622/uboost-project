import React from 'react';

interface LabelProps {
  text: string;
  direction?: string;
}

export const LabelComponent: React.FC<LabelProps> = ({ text, direction = 'left' }) => {
  return (
    <label className={`text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black font-medium ${direction === 'left' ? 'text-left' : 'text-' + {direction}}`}>
      {text}
    </label>
  );
};
export const ListboxWrapper: React.FC<{id:string, width: string | 'full', children: React.ReactNode}> = ({id, width, children}) => (
  <div id={id} className={`border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 ${width === 'full' ? `w-full` : `w-[${width}]`}`}>
    {children}
  </div>
);
