"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { Switch } from "@nextui-org/switch";
import classNames from 'classnames';
import Image from "next/image";

import Loader from "@/components/_Common/Loader";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'
import getCommonIcons from "@/components/_Common/CommonIcons";
import NormalTextInputBox from "@/components/_Common/NormalTextInputBox";

const Create_A_Messgae = () => {
  const [saving, setSaving] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isUploadedImage, setUploadedImage] = useState(false);
  const [isUploadedVideo, setUploadedVideo] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/add-new-tag/tag-people2');
  };

  const cn = classNames;

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle
        id="create a message"
        title="Create A Message"
        left_link_name={"Back"}
        information_icon={getCommonIcons('Warning', '30', '30')}
        information={"Need inspiration? Check out our Top Ten Tips! Click here."}
        information_link={'/top-ten-tips'}
        left_link_url={'/campaign-detail'}
        left_link_icon={getNormalLinkIcon('Back')}
      />
      <div className="bg-[#F4F7FF] py-14 dark:bg-dark lg:py-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative mx-auto max-w-[600px] overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]"
                data-wow-delay=".15s"
              >
                <div>
                  <div className="w-full px-2">
                    <div id={'type'} className='flex flex-row items-center px-2 mb-8 justify-center w-full'>
                      <label
                        htmlFor="name"
                        className='text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black font-medium'>
                        Text
                      </label>
                      <Switch
                        classNames={{
                          base: cn(
                            "inline-flex flex-row-reverse w-100",
                            "justify-between cursor-pointer rounded-lg gap-2 p-4",
                          ),
                          wrapper: "p-0 h-4 overflow-visible bg-primary/30",
                          thumb: cn("w-6 h-6 border-2 shadow-lg bg-primary border-black/30",
                            "group-data-[hover=true]:border-black/50",
                            //selected
                            "group-data-[selected=true]:ml-6",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4",
                          ),
                        }}
                      >

                      </Switch>
                      <label
                        className='text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black font-medium'>
                        Email
                      </label>
                    </div>
                    <div className="w-full flex flex-row px-2 items-center justify-between py-2 lx:py-4 2xl:py-6 3xl:py-8">
                      <div className="w-5/12 rounded-md aspect-[16/9]">
                        {isOpen ? (
                          <video className="h-full w-full" controls autoPlay onEnded={() => setOpen(false)}>
                            <source src="" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div className="relative bg-primary/10 items-center justify-center">
                            <div className="opacity-20 w-full h-full">
                              {isUploadedVideo ?
                                (<div>
                                  {/* <Image src="" alt="campaign image" fill /> */}
                                </div>) :
                                (<div className="w-full h-full flex items-center justify-center">
                                  {getCommonIcons('Video', '240', '135')}
                                </div>)}
                            </div>
                            <div className="z-20 absolute right-0 top-0 flex h-full w-full items-center justify-center">
                              {isUploadedVideo ?
                                (<div>
                                  <button aria-label="video play button"
                                    onClick={() => { }}
                                    className="z-30 flex scale-100 hover:scale-105 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                                    {getCommonIcons('VideoPlay', '16', '18')}
                                  </button>
                                </div>
                                ) :
                                (<div>
                                  <button aria-label="image upload button"
                                    onClick={() => { }}
                                    className="z-30 flex scale-100 hover:scale-105 duration-150 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                                    {getCommonIcons('VideoUpload', '50', '50')}
                                  </button>
                                </div>)}
                              <div className="absolute rounded-md left-0 bottom-0 w-full h-full inline-flex items-center justify-stretch bg-gradient-to-t from-dark/60 to-white/0 px-4 py-2 capitalize" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="w-5/12 rounded-md aspect-[16/9]">
                        <div className="relative bg-primary/10 items-center justify-center">
                          <div className="opacity-20 w-full h-full">
                            {isUploadedImage ?
                              (<div>
                                <Image src="" alt="campaign image" fill />
                              </div>) :
                              (<div className="w-full h-full flex items-center justify-center">
                                {getCommonIcons('Image', '240', '135')}
                              </div>)}
                          </div>
                          <div className="z-20 absolute right-0 top-0 flex h-full w-full items-center justify-center">
                            <div className="flex flex-row gap-x-10">
                              <button aria-label="image upload button"
                                onClick={() => { }}
                                className="z-30 flex scale-100 hover:scale-105 duration-150 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                                {getCommonIcons('ImageUpload', '50', '50')}
                              </button>
                            </div>
                            <div className="absolute rounded-md left-0 bottom-0 w-full h-full inline-flex items-center justify-stretch bg-gradient-to-t from-dark/60 to-white/0 px-4 py-2 capitalize" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <NormalTextInputBox id="add message" name="Add message" placeholder="Enter description" row={6} />
                    <div className="mb-9 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={handleContinue}
                        className="text-white rounded-md w-8/12"
                      >
                        Continue {saving && <Loader />}
                      </Button>
                    </div>
                  </div>
                </div>

                <NormalFormDecoration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create_A_Messgae;
