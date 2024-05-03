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
import getCampaignIcon from "@/components/_Common/CampaignCategoryIcon";
import { useState } from "react";
import Link from "next/link";

const Campaign_Detail = ({ campaign }: { campaign: Campaign }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <div className="bg-gray-50 dark:bg-dark relative z-10 overflow-hidden pb-[20px] pt-[80px] md:pt-[80px] lg:pt-[80px]">
        <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  <div className="flex flex-row flex-wrap items-center">
                    <div className="flex flex-row w-full px-4 items-center justify-center">
                    <div className="scale-100 hover:scale-105 duration-150">
                        <Link href="">
                          <svg
                            width="46"
                            height="46"
                            viewBox="0 0 496.158 496.158"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="#3758f9" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.003,0,111.063,0,248.085
                                c0,137.002,111.07,248.07,248.083,248.07C385.088,496.155,496.158,385.087,496.158,248.085z"/>
                            <path fill="#FFFFFF" d="M408.326,267.403v-38.649l-36.572-11.494c-3.107-12.406-8.03-24.09-14.476-34.756l17.779-34.071
                                l-27.332-27.33l-34.171,17.828c-10.621-6.372-22.247-11.236-34.588-14.309l-11.562-36.789h-38.652l-11.562,36.789
                                c-12.338,3.072-23.965,7.937-34.586,14.309l-34.172-17.828l-27.331,27.332l17.778,34.069c-6.444,10.666-11.367,22.35-14.472,34.756
                                l-36.575,11.494v38.649l36.431,11.451c3.078,12.524,7.997,24.32,14.468,35.084l-17.63,33.784l27.332,27.331l33.688-17.575
                                c10.803,6.546,22.659,11.523,35.251,14.636l11.379,36.211h38.652l11.38-36.211c12.593-3.112,24.448-8.09,35.254-14.636
                                l33.688,17.575l27.332-27.331l-17.628-33.784c6.47-10.764,11.389-22.56,14.466-35.084L408.326,267.403z M248.08,332.899
                                c-46.697,0-84.552-37.855-84.552-84.553c0-46.695,37.855-84.551,84.552-84.551c46.694,0,84.549,37.855,84.549,84.551
                                C332.629,295.044,294.774,332.899,248.08,332.899z"/>
                          </svg>
                        </Link>
                      </div>

                      <div className="text-center flex-grow">
                        <div className="flex flex-row items-center justify-center">
                          <div className="relative h-28 w-28 mr-10"> {/* Adjust the size to your liking */}
                            <Image
                              src={campaign.image} // The path to your image
                              alt="user image"
                              layout="fill" // This makes the image fill the container
                              objectFit="cover" // This crops the image to cover the area
                              className="rounded-lg" // Example Tailwind class for rounded corners
                            />
                          </div>
                          <div className="flex flex-col">
                            <div className="">
                              <h4 className="text-center text-primary text-[8px] sm:text-sm md:text-md lg:text-xl xl:text-2xl 2xl:text-3xl font-medium leading-tight">
                                {campaign.fundraiser.name}
                              </h4>
                            </div>
                            <div className="">
                              <h4 className="text-center text-gray-800 text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight">
                                {campaign.fundraiser.designation}
                              </h4>
                            </div>
                            <div className="">
                              <h4 className="text-center text-gray-800 text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight">
                                {campaign.title}
                              </h4>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className="scale-100 hover:scale-105 duration-150">
                        <svg fill="#3758f9" width="55" height="55" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg"
                          className="cf-icon-svg">
                          <path
                            d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-2.792-1.198a.396.396 0 0 0-.149-.54L8.661 5.104a.396.396 0 0 0-.393 0l-2.31 1.324v-.895a.318.318 0 0 0-.317-.317h-.968a.318.318 0 0 0-.317.317v1.813l-.872.5a.396.396 0 1 0 .393.686l4.589-2.629 4.619 2.63a.395.395 0 0 0 .54-.148zm-1.02.786L8.467 6.815l-4.11 2.356v4.465a.318.318 0 0 0 .316.317h7.615a.318.318 0 0 0 .317-.317zm-6.647.607h1.647v1.668H5.958zm5.045 1.668H9.356V9.778h1.647z" />
                        </svg>
                      </div>

                    </div>

                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 relative flex flex-row sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-12 sm:px-20 md:px-24 lg:px-28 lx:px-32 2xl:px-36 3xl:px-40 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
        <div className="w-full sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
          <div className="relative overflow-hidden border-2  rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
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
                      <div className=" opacity-65">
                        <Image src={campaign.image} alt="campaign image" fill />
                      </div>
                      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                        <button aria-label="video play button"
                          onClick={() => setOpen(true)}
                          className="z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            className="fill-current"
                          >
                            <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                          </svg>
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
                {campaign.paragraph}
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
    </section>
  );
};


export default Campaign_Detail;
