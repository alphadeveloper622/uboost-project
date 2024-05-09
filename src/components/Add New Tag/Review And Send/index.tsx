"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { ListboxWrapper } from "@/components/_Common/Common Types";
import classNames from 'classnames';
import Image from "next/image";

import Loader from "@/components/_Common/Loader";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'
import getCommonIcons from "@/components/_Common/CommonIcons";

const Review_And_Send = () => {
  const [sending, setSending] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isUploadedImage, setUploadedImage] = useState(false);
  const [isUploadedVideo, setUploadedVideo] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/add-new-tag/confirm');
  };

  const cn = classNames;

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle
        id="top title"
        title="Review and Send"
        left_link_name={'Back'}
        left_link_url={'/add-new-tag/tag-people2'}
        left_link_icon={getNormalLinkIcon('Back')}
        bg_color="#FFFFFF"
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
                    <div className="flex flex-row mb-5 items-center justify-center">
                      <div className="basis-11/12 text-primary text-left text-base">
                        Hey There! I hope you will support my campaign. I&apos;m raising money for a new tennis court for our school. Thank you in advance for your suport.
                      </div>
                    </div>
                    <ListboxWrapper id="contacts" width={'full'} >
                      <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                        <ListboxItem
                          key="new"
                          className="text-left border-2 px-2"
                        >
                          <div className="flex gap-2 justify-start items-center">
                            <div className="flex flex-row w-full px-2">
                              <span className="text-small w-1/2">Farell Duclair</span>
                              <span className="text-tiny w-1/2 text-default-400">8322537756</span>
                            </div>
                          </div>
                        </ListboxItem>

                      </Listbox>
                      <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                        <ListboxItem
                          key="new"
                          className="text-left border-2 px-2"
                        >
                          <div className="flex gap-2 justify-start items-center">
                            <div className="flex flex-row w-full px-2">
                              <span className="text-small w-1/2">Farell Duclair</span>
                              <span className="text-tiny w-1/2 text-default-400">8322537756</span>
                            </div>
                          </div>
                        </ListboxItem>

                      </Listbox>
                    </ListboxWrapper>
                    <div className="my-4 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={handleContinue}
                        className="text-white rounded-md w-8/12"
                      >
                        Send {sending && <Loader />}
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

export default Review_And_Send;
