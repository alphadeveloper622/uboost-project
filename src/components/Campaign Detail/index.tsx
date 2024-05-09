"use client";
import { Campaign } from "@/types/campaign";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Image from "next/image";
import { Button } from "@nextui-org/react";

import getCampaignIcon from "@/components/_Common/CampaignCategoryIcon";
import { useState } from "react";
import { useEffect } from 'react'
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import getCommonIcons from "@/components/_Common/CommonIcons";
import NormalTopBarUserInfo from "@/components/_Common/NormalTopBarUserInfo";
import { useRouter } from 'next/navigation';

const Campaign_Detail = ({ campaign }: { campaign: Campaign }) => {
  const [isOpen, setOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const [isViewingImage, setViewingImage] = useState(false);

  const router = useRouter();

  useEffect(() => {

  }, [])

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    setDropdownClicked(!dropdownClicked);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
    setDropdownClicked(false);
  };

  const viewImage = () => {
    setViewingImage(true);
    closeDropdown();
  };

  const closeImage = () => {
    setViewingImage(false);
  };

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTopBarUserInfo
        username={"Fort Bend Texas Heat"}
        avatar={"/images/campaign detail/avatar.jpg"}
        status={"Member"}
        left_link_name={'Settings'}
        right_link_name={'Home'}
        information={""}
        changable_avatar={true}
        username_color={'primary'}
        left_link_url = {'/settings'}
        right_link_url= {'/fundraising-dashboard'}
        left_link_icon={getNormalLinkIcon('Setting')}
        right_link_icon={getNormalLinkIcon('Home')}
        username_direction="left"
        status_direction="left" />
      <div className="relative flex flex-row flex-wrap sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-12 sm:px-20 md:px-24 lg:px-28 lx:px-32 2xl:px-36 3xl:px-40 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
        <div className="w-full sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
          <div className="relative overflow-hidden border-2  rounded-md bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
            <div className="container p-0 m-0 space-x-0 space-y-0 bg-dark/20">
              <div className="relative block w-full bg-dark/20">
                <span className="absolute right-6 top-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 md:text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[12px] font-semibold capitalize text-white">
                  {campaign.category}
                </span>
                <span className="absolute left-2 bottom-2 text-xl inline-flex items-center justify-center px-4 py-2 font-bold capitalize text-white">
                  {campaign.title}
                </span>
                <div>
                  {isOpen ? (
                    <video className="h-full w-full" controls autoPlay onEnded={() => setOpen(false)}>
                      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="relative bg-black aspect-[16/9] items-center justify-center">
                      <div className="opacity-65">
                        <Image id="campaign_image" src={campaign.image} alt="campaign image" fill />
                      </div>
                      <div className="absolute right-0 top-0 gap-x-20 flex h-full w-full items-center justify-center">
                        <button aria-label="video play button"
                          onClick={() => setOpen(true)}
                          className="z-10 flex scale-100 hover:scale-105 duration-150 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                          {getCommonIcons('VideoPlay', '16', '18')}
                        </button>
                        <button aria-label="video play button"
                          onClick={toggleDropdown}
                          className="z-10 flex scale-100 hover:scale-105 duration-150 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                          {getCommonIcons('Edit', '25', '25')}
                          {isDropdownVisible && (
                            <div className="z-40 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-auto min-w-max overflow-visible bg-primary/80 text-white shadow-lg rounded-lg tooltip">
                              <div className="tooltip-arrow" style={{ position: 'absolute', top: '-9px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '10px', backgroundColor: 'inherit', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                              <div className="p-2">
                                <div className="hover:bg-gray-700 p-1 rounded" onClick={viewImage}>View Photo</div>
                                <div className="hover:bg-gray-700 p-1 rounded">Upload Photo</div>
                                <div className="hover:bg-gray-700 p-1 rounded">Remove Photo</div>
                              </div>
                            </div>
                          )}
                        </button>

                      </div>
                      <div className="absolute left-0 bottom-0 w-full h-40 inline-flex items-center justify-stretch bg-gradient-to-t from-dark/60 to-white/0 px-4 py-2 capitalize" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center bg-white">
                <div className="basis-4/12">
                  <div className="relative flex flex-row z-10 bg-gradient-to-r from-primary to-white mb-2 h-auto w-auto items-center justify-start">
                    <Image src={getCampaignIcon(campaign.category)} width="45" height="45" alt="icon" />
                    <h4 className="text-white text-lg">{campaign.category}</h4>
                  </div>
                </div>

                <div className="basis-3/12">
                  <div className="flex items-center justify-center w-full">
                    <h4 className="text-lg font-medium text-dark dark:text-white">
                      Tagged : <strong> 15 </strong>
                    </h4>
                  </div>
                </div>
                <div className="basis-3/12">
                  <div className="flex  items-center justify-center w-full">
                    <h4 className="text-lg font-medium text-dark dark:text-white">
                      Boosters : <strong> 20 </strong>
                    </h4>
                  </div>
                </div>
                <div className="basis-2/12"></div>
              </div>
              <p className="p-4 truncate font-medium text-body-color dark:border-white dark:border-opacity-10">
                {campaign.comment}
              </p>
              <div className="">
                <div className="z-100 relative w-full bg-gray-200 h-2">
                  <div
                    className="absolute h-full top-0 bg-gradient-to-r from-ublue-600 to-primary"
                    style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                  >
                  </div>
                </div>

                <div className="flex flex-row py-2 px-2">
                  <div className="flex flex-1">
                    <p className='text-dark/70 font-medium'>Goal:</p>
                    <p className='text-dark font-extrabold px-1'>USD $</p>
                    <p className='text-dark font-extrabold'>{campaign.goal}</p>
                  </div>
                  <div className="flex flex-2">
                    <p className='text-dark/70 font-medium'>Raised:</p>
                    <p className='text-dark font-extrabold px-1'>USD $</p>
                    <p className='text-dark font-extrabold'>{campaign.raised}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-5">
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  onClick={() => router.push('/add-new-tag/create-a-message')}
                  className="text-white rounded-md w-3/5"
                >
                  Tag
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20">
          <Tabs value="dashboard">
            <TabsHeader
              onChange={() => { }}
              onClick={() => { }}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              placeholder="Select a tab"
              className="rounded-none border-b border-ublue-800 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-ublue-800 shadow-none rounded-none",
              }}
            >
              <Tab
                key="posts"
                value="posts"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
              >
                <div className="flex items-center gap-2">
                  Posts
                </div>
              </Tab>
              <Tab
                key="boosters"
                value="boosters"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
              >
                <div className="flex items-center gap-2">
                  Boosters
                </div>
              </Tab>
              <Tab
                key="members"
                value="members"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
              >
                <div className="flex items-center gap-2">
                  Members
                </div>
              </Tab>
              <Tab
                key="bank"
                value="bank"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
              >
                <div className="flex items-center gap-2">
                  Bank
                </div>
              </Tab>
            </TabsHeader>
            <TabsBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              <TabPanel key="posts" value="posts">
                POSTS Content
              </TabPanel>
              <TabPanel key="boosters" value="boosters">
                BOOSTERS Content
              </TabPanel>
              <TabPanel key="members" value="members">
                MEMBERS Content
              </TabPanel>
              <TabPanel key="bank" value="bank">
                BANK Content
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
      {isViewingImage && (
        <div className="z-100  fixed inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <button onClick={closeImage} className="absolute right-10 top-10 text-white text-2xl">&times;</button>
          <Image id="campaign_image" src={campaign.image} alt="campaign image" width={1600} height={900} />
        </div>
      )}
    </section>
  );
};


export default Campaign_Detail;
