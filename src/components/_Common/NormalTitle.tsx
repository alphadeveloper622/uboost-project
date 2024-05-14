import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { resolveBGColor, resolveElementWidth, resolveTextColor, resolveTextDirection } from "./Common Types";

const NormalTitle = ({
  id,
  title,
  information,
  left_link_name,
  right_link_name,
  left_link_url,
  right_link_url,
  information_icon,
  bg_color = "transparent",
  title_color = "black",
  information_color = "primary",
  information_link,
  left_link_icon,
  right_link_icon,
  width,
  title_direction,
  information_direction,
}: {
  id?: string;
  title: string;
  information?: string;
  left_link_name?: string;
  right_link_name?: string;
  left_link_url?: string;
  right_link_url?: string;
  information_icon?: JSX.Element;
  bg_color?: string;
  title_color?: string;
  information_color?: string;
  information_link?: string;
  left_link_icon?: JSX.Element;
  right_link_icon?: JSX.Element;
  width?: string;
  title_direction?: string;
  information_direction?: string;
}) => {
  const router = useRouter();

  return (
    <div id={id} className={`relative z-20 overflow-hidden pb-[20px] pt-[80px] md:pt-[80px] lg:pt-[80px] 
    ${resolveBGColor({ color: bg_color })} 
    ${resolveElementWidth({ width: width })}`}>
      <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
      <div className="container w-full flex-col flex-wrap items-center">
        <div className="flex flex-row flex-wrap items-center">
          <div className="flex flex-row w-full items-center justify-center">
            {left_link_icon && (
              <Button isIconOnly onClick={() => router.push(left_link_url || "")}
                className="h-12 w-12 rounded-full justify-center lg:px-1 lg:w-36 bg:transparent bg-primary flex flex-row lg:justify-start items-center lg:rounded-lg scale-100 hover:scale-105 duration-150">
                {left_link_icon}
                <div className="hidden lg:flex lg:justify-center lg:w-full text-white text-lg xl:text-lg 2xl:text-xl font-medium leading-tight">{left_link_name}</div>
              </Button>
            )}

            <div className="text-center flex-grow">
              <p className={`text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] 
                ${information ? 'mb-4' : ''}
                ${resolveTextColor({ color: title_color })}
                ${resolveTextDirection({ direction: title_direction })}`}>

                {title}
              </p>
            </div>
            {right_link_icon && (
              <Button isIconOnly onClick={() => router.push(right_link_url || "")}
                className="h-12 w-12 rounded-full justify-center lg:px-1 lg:w-36 bg:transparent bg-primary flex flex-row lg:justify-end items-center lg:rounded-lg scale-100 hover:scale-105 duration-150">
                <div className="hidden lg:flex lg:justify-center lg:w-full text-white text-lg xl:text-lg 2xl:text-xl font-medium leading-tight">{right_link_name}</div>
                {right_link_icon}
              </Button>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className={`flex flex-row w-10/12 justify-center items-center mb-5 text-base 
            ${resolveTextDirection({direction:information_direction})}`}>
            {information_icon ?
              (<div className='justify-center hidden lg:flex items-center'>
                {information_icon} &nbsp;&nbsp;
              </div>) :
              (<div />)}
            <div className={`text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-tight 
              ${resolveTextColor({color:information_color})}`}>
              {information_link ? (
                <Link href={information_link || ""} className="hover:underline">
                  {information}
                </Link>
              ) : (
                <>
                  {information}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalTitle;