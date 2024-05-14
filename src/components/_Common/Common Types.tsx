import React from 'react';

interface LabelProps {
  text: string;
  direction?: string;

}

export const LabelComponent: React.FC<LabelProps> = ({ text, direction = 'left' }) => {
  return (
    <label className={`text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black font-medium ${direction === 'left' ? 'text-left' : 'text-' + { direction }}`}>
      {text}
    </label>
  );
};
export const ListboxWrapper: React.FC<{ id: string, width: string | 'full', children: React.ReactNode }> = ({ id, width, children }) => (
  <div id={id} className={`border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 ${width === 'full' ? `w-full` : `w-[${width}]`}`}>
    {children}
  </div>
);

/*************** css ***************/

//all

export const resolveBGColor = ({ color = 'white', darkColor = 'black', opacity = 1 }: { color?: string, darkColor?: string, opacity?: number }) => {
  const opacityValue = Math.floor(opacity * 100);
  let baseClass = color[0] === '#' ? `bg-[${color}/${opacityValue}]` : `bg-${color}/${opacityValue}`;
  let darkClass = darkColor[0] === '#' ? `dark:bg-[${darkColor}/${opacityValue}]` : `dark:bg-${darkColor}/${opacityValue}`;
  return `${baseClass} ${darkClass}`;
}

export const resolveElementWidth = ({ width = 'full' }: { width?: string }) => {
  if (width === 'full') {
    return 'w-full';
  }

  if (width.endsWith('%')) {
    const percentage = parseInt(width.slice(0, -1), 10);
    if (percentage >= 0 && percentage <= 100) {
      return `w-[${percentage}%]`;
    }
  }

  if (width.includes('/')) {
    const [numerator, denominator] = width.split('/');
    if (parseInt(numerator, 10) > 0 && parseInt(denominator, 10) > 0) {
      return `w-[${width}]`;
    }
  }

  if (width.endsWith('px')) {
    const pixels = parseInt(width.slice(0, -2), 10);
    if (pixels >= 0) {
      return `w-[${pixels}px]`;
    }
  }

  return 'w-full';
}

export const resolveFillColor = ({ color = 'white', darkColor = 'black' }: { color?: string, darkColor?: string }) => {
  let fillColor = color[0] === '#' ? `fill-[${color}]` : `fill-${color}`;
  let darkFillColor = darkColor[0] === '#' ? `dark:fill-[${darkColor}]` : `dark:fill-${darkColor}`;
  return `${fillColor} ${darkFillColor}`;
}

export const resolveBorderColor = ({ color = 'white', darkColor = 'black', opacity = 1 }: { color?: string, darkColor?: string, opacity?: number }) => {
  if (!Number.isInteger(opacity)) {
    opacity = Math.floor(opacity * 100);
  }
  let borderColor = color[0] === '#' ? `border-[${color}/${opacity}]` : `border-${color}/${opacity}`;
  let darkBorderColor = darkColor[0] === '#' ? `dark:border-[${darkColor}/${opacity}]` : `dark:border-${darkColor}/${opacity}`;
  return `${borderColor} ${darkBorderColor}`;
}

//text

export const resolveTextColor = ({ color = 'black', darkColor = 'white', opacity = 1 }: { color?: string, darkColor?: string, opacity?: number }) => {
  if (!Number.isInteger(opacity)) {
    opacity = Math.floor(opacity * 100);
  }
  let textColor = color[0] === '#' ? `text-[${color}/${opacity}]` : `text-${color}/${opacity}`;
  let darkTextColor = darkColor[0] === '#' ? `dark:text-[${darkColor}/${opacity}]` : `dark:text-${darkColor}/${opacity}`;
  return `${textColor} ${darkTextColor}`;
}

export const resolveTextDirection = ({ direction = 'left' }: { direction?: string }) => {
  if (!direction) return 'text-left';
  return `text-${direction}`;
}

