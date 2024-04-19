"use client";
import { Campaign } from "@/types/campaign";
import { Progress, Button } from "@material-tailwind/react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SingleBlog = ({ campaign }: { campaign: Campaign }) => {
  const [isOpen, setOpen] = useState(false);
  const { title, image, paragraph, fundraiser, tags, goal, raised, createdDate } = campaign;
  return (
    <>
      <div className="group relative overflow-hidden border-2  rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <div className="container p-0 m-0 space-x-0 space-y-0 bg-dark/20">
          <div className="relative block aspect-[16/9] w-full bg-dark/20">
            <span className="absolute right-6 top-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 md:text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[12px] font-semibold capitalize text-white">
              {tags[0]}
            </span>
            <span className="absolute left-2 bottom-2 text-xl inline-flex items-center justify-center px-4 py-2 font-bold capitalize text-white">
              {title}
            </span>
            <div className="">
              {isOpen ? (
                <video className="h-full w-full" controls autoPlay onEnded={() => setOpen(false)}>
                  <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative aspect-[16/9] items-center justify-center">
                  <Image src={image} alt="campaign image" fill />
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
          <p className="mb-4 p-1 sm:p-1 md:px-1 md:py-1 lg:p-2 xl:px-3 xl:py-3 2xl:p-4 border-body-color border-opacity-10 pb-2 truncate font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="border-b-2 pb-2">
            <Progress value={(raised / goal) * 100} variant="filled" color="blue" size="md" label=""
            className={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            />
            <div className="flex flex-row py-2 px-2">
              <div className="flex flex-1">
                <p className='text-dark/70 font-medium'>Goal:</p>
                <p className='text-dark font-bold px-1'>USD $</p>
                <p>{goal}</p>
              </div>
              <div className="flex flex-2">
                <p className='text-dark/70 font-medium'>Raised:</p>
                <p className='text-dark font-bold px-1'>USD $</p>
                <p>{raised}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center p-4">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4 ml-6">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={fundraiser.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {fundraiser.name}
                </h4>
                <p className="text-xs text-body-color">{fundraiser.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{createdDate}</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Button className="flex-1 bg-primary hover:bg-primary/80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Donate</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
