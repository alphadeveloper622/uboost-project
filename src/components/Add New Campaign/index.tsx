"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Loader from "@/components/_Common/Loader";
import NormalTitle from "../_Common/NormalTitle";
import getNormalLinkIcon from "../_Common/NormalLinkIcons";
import NormalInput from "../_Common/NormalInput";
import NormalDropdownInput from "../_Common/NormalDropdownInput";
import NormalTextInputBox from "../_Common/NormalTextInputBox";
import { Button } from "@nextui-org/react";
import getCommonIcons from "../_Common/CommonIcons";

const categorylist = ["Animals", "Athletics", "Education", "Emergency", "Environment", "Faith", "Family", "Legal", "Medical", "Memorial", "Non-Profit"];

const Add_New_Campaign = () => {
  const [adding, setAdding] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isUploadedImage, setUploadedImage] = useState(false);
  const [isUploadedVideo, setUploadedVideo] = useState(false);
  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="True love that allows hope to bloom awaits."
        description="Receive love from all over the world."
        description_link=""
        left_link={getNormalLinkIcon('Back', '/fundraising-dashboard')}
        right_link={getNormalLinkIcon('', '')}
        bg_color="#FFFFFF"
      />
      <div className="bg-gray-100 relative flex flex-row flex-wrap sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-12 sm:px-20 md:px-24 lg:px-28 lx:px-32 2xl:px-36 3xl:px-40 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
        <div className="w-full flex flex-col items-center sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 py-2 lx:py-4 2xl:py-6 3xl:py-8">
          <div className="w-11/12 mb-14">
            {isOpen ? (
              <video className="h-full w-full" controls autoPlay onEnded={() => setOpen(false)}>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative bg-primary/10 aspect-[16/9] items-center justify-center">
                <div className="opacity-20 w-full h-full">
                  {isUploadedVideo ?
                    (<div>
                      {/* <Image src="" alt="campaign image" fill /> */}
                    </div>) :
                    (<div className="w-full h-full flex items-center justify-center">
                      {getCommonIcons('Video', 480, 270)}
                    </div>)}
                </div>
                <div className="z-20 absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  {isUploadedVideo ?
                    (<div>
                      <button aria-label="video play button"
                        onClick={() => { }}
                        className="z-30 flex scale-100 hover:scale-105 duration-150 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                        {getCommonIcons('VideoPlay', 16, 18)}
                      </button>
                    </div>
                    ) :
                    (<div>
                      <button aria-label="image upload button"
                        onClick={() => { }}
                        className="z-30 flex scale-100 hover:scale-105 duration-150 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                        {getCommonIcons('VideoUpload', 50, 50)}
                      </button>
                    </div>)}
                  <div className="absolute left-0 bottom-0 w-full h-40 inline-flex items-center justify-stretch bg-gradient-to-t from-dark/60 to-white/0 px-4 py-2 capitalize" />
                </div>
              </div>
            )}
          </div>
          <div className="w-11/12  mb-14">
            <div className="relative bg-primary/10 aspect-[16/9] items-center justify-center">
              <div className="opacity-20 w-full h-full">
                {isUploadedImage ?
                  (<div>
                    <Image src="" alt="campaign image" fill />
                  </div>) :
                  (<div className="w-full h-full flex items-center justify-center">
                    {getCommonIcons('Image', 480, 270)}
                  </div>)}
              </div>
              <div className="z-20 absolute right-0 top-0 flex h-full w-full items-center justify-center">
                <div className="flex flex-row gap-x-10">
                  <button aria-label="image upload button"
                    onClick={() => { }}
                    className="z-30 flex scale-100 hover:scale-105 duration-150 h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-50 text-primary transition hover:bg-opacity-70">
                    {getCommonIcons('ImageUpload', 50, 50)}
                  </button>
                </div>
                <div className="absolute left-0 bottom-0 w-full h-40 inline-flex items-center justify-stretch bg-gradient-to-t from-dark/60 to-white/0 px-4 py-2 capitalize" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 py-2 lx:py-4 2xl:py-6 3xl:py-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full px-4">
              <div
                className="rounded-sm bg-white px-2 shadow-three dark:bg-gray-dark lg:mb-5 lg:px-4 p-10"
                data-wow-delay=".15s
              "
              >
                <form>
                  <div className="m-4 flex flex-col">
                    <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                      New Campaign
                    </h2>
                    <NormalInput name="Name" placeholder="Enter campaign name" namecolor="black" />
                    <NormalDropdownInput id="category" name="Category" placeholder="What Category?" options={categorylist} />
                    <NormalTextInputBox id="description" name="Description" placeholder="Enter description" row={6} />
                    <div className="mb-9 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        onClick={(e) => { }}
                        className="text-white rounded-md w-2/4"
                      >
                        Save {adding && <Loader />}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </form>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Add_New_Campaign;