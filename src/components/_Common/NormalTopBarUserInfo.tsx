import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import getCommonIcons from "./CommonIcons";
import { useState } from 'react';

const NormalTopBarUserInfo = ({
  id,
  username,
  avatar,
  status,
  left_link_name,
  right_link_name,
  left_link_url,
  right_link_url,
  information,
  information_icon,
  changable_avatar = false,
  bg_color = 'transparent',
  username_color = "black",
  status_color = 'black',
  information_color = 'primary',
  information_link,
  left_link_icon,
  right_link_icon,
  width,
  username_direction,
  status_direction,
  information_direction,
}: {
  id?: string;
  username: string;
  avatar: string;
  status: string;
  left_link_name?: string;
  right_link_name?: string;
  left_link_url?: string;
  right_link_url?: string;
  information: string;
  changable_avatar?: boolean;
  information_icon?: JSX.Element;
  bg_color?: string;
  username_color?: string;
  status_color?: string;
  information_color?: string;
  information_link?: string;
  left_link_icon?: JSX.Element;
  right_link_icon?: JSX.Element;
  width?: string;
  username_direction?: string;
  status_direction?: string;
  information_direction?: string;
}) => {
  const router = useRouter();

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const [isViewingImage, setViewingImage] = useState(false);

  const toggleDropdown = () => {
    if (changable_avatar) {
      setDropdownVisible(!isDropdownVisible);
      setDropdownClicked(!dropdownClicked);
    }
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
    setDropdownClicked(false);
  };

  const viewImage = () => {
    setIsHovering(!isHovering)
    setViewingImage(true);
    closeDropdown();
  };

  const closeImage = () => {
    setViewingImage(false);
  };

  return (
    <div id={id} className={`relative z-20 overflow-hidden pb-[20px] pt-[80px] md:pt-[80px] lg:pt-[80px] ${bg_color[0] == '#' ? "bg-[" + bg_color + "]" : "bg-" + bg_color} ${width ? `w-[${width}]` : 'w-full'}`}>
      <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
      <div className="w-full flex-col flex-wrap items-center px-4 md:px-4 2xl:px-20">
        <div className="flex flex-row flex-wrap items-center">
          <div className="flex flex-row w-full items-center justify-center">
            {left_link_icon && (
              <Button isIconOnly onClick={() => router.push(left_link_url || "")}
                className="h-12 w-12 rounded-full justify-center lg:px-1 lg:w-36 bg:transparent bg-primary flex flex-row lg:justify-start items-center lg:rounded-lg scale-100 hover:scale-105 duration-150">
                <div>
                {left_link_icon}
                </div>
                <div className="hidden lg:flex lg:justify-center lg:w-full text-white text-lg xl:text-lg 2xl:text-xl font-medium leading-tight">{left_link_name}</div>
              </Button>
            )}
            <div className="text-center flex-grow">
              <div className="flex flex-row items-center justify-center">
                <div className="relative h-20 w-20 lg:h-28 lg:w-28 flex justify-center items-center mr-10 cursor-pointer"
                  onMouseEnter={() => setIsHovering(true && changable_avatar)}
                  onClick={toggleDropdown}>
                  <div className='z-20'>
                    <Image
                      src={avatar}
                      alt="user image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transition duration-300 ease-in-out"
                    />
                  </div>
                  <div>
                    {isHovering &&
                      <div className="bg-gray-600/50 z-30 absolute left-0 top-0 flex justify-center items-center rounded-lg w-full h-full"
                        onMouseLeave={() => {
                          if (!dropdownClicked) {
                            setIsHovering(false);
                            closeDropdown();
                          }
                        }}>
                        {getCommonIcons('Edit', '50', '50', '#FFFFFF')}
                      </div>
                    }
                  </div>
                  {isDropdownVisible && (
                    <div className="z-40 absolute top-1/2 -left-full ml-[-30px] transform -translate-y-1/2 w-auto min-w-max overflow-visible bg-primary/80 text-white shadow-lg rounded-lg tooltip">
                      <div className="tooltip-arrow" style={{ position: 'absolute', top: '50%', right: '-9px', transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: 'inherit', clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}></div>
                      <div className="p-2">
                        <div className="hover:bg-gray-700 p-1 rounded" onClick={viewImage}>View Photo</div>
                        <div className="hover:bg-gray-700 p-1 rounded">Upload Photo</div>
                        <div className="hover:bg-gray-700 p-1 rounded">Remove Photo</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="">
                    <h4 className={`text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium leading-tight'
                    ${username_color ? username_color[0] == '#' ? `text-[${username_color}]` : `text-${username_color}` : ''}
                      ${username_direction === 'left' ? 'text-left' :
                        username_direction === 'right' ? 'text-right' :
                          username_direction === 'center' ? 'text-center' : ''}`}>
                      {username}
                    </h4>
                  </div>
                  <div className="">
                    <h4 className={`text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-tight
                    ${status_color ? status_color[0] == '#' ? `text-[${status_color}]` : `text-${status_color}` : ''}
                    ${status_direction === 'left' ? 'text-left' :
                        status_direction === 'right' ? 'text-right' :
                          status_direction === 'center' ? 'text-center' : ''}`}>
                      {status}
                    </h4>
                  </div>
                </div>
              </div>
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
            ${information_direction === 'left' ? 'text-left' :
              information_direction === 'center' ? 'text-center' :
                information_direction === 'right' ? 'text-right' : ''}`}>
            {information_icon ?
              (<div className='justify-center hidden lg:flex items-center'>
                {information_icon} &nbsp;&nbsp;
              </div>) :
              (<div />)}
            <div
              className={`text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-tight 
            ${information_color == "primary" ? "text-primary" : `text-[${information_color}]`}`}>
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
      {isViewingImage && (
        <div className="flex justify-center items-center">
          <div className="z-100 fixed inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <button onClick={closeImage} className="absolute right-10 top-10 text-white text-2xl">&times;</button>
            <Image id="campaign_image" src={avatar} alt="campaign image" width={900} height={900} />
          </div>
        </div>

      )}
    </div >
  );
};

export default NormalTopBarUserInfo;