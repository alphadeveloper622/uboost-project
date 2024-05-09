"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import getCommonIcons from "@/components/_Common/CommonIcons";


const Confirm_New_Tag = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/campaign-detail');
  };

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle
        id="top title"
        title="Ready to Boost Your Dreams?"
        left_link_name={'Back'}
        left_link_url={'/add-new-tag/review-and-send'}
        left_link_icon={getNormalLinkIcon('Back')}
        bg_color="#FFFFFF"
      />
      <div className="wow fadeInUp flex flex-row relative flex-wrap sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-4 sm:px-8 md:px-16 lg:px-24 lx:px-32 2xl:px-36 3xl:px-32 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8" data-wow-delay=".2s">
        <div className="w-full flex flex-col items-center sm:w-full md:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 py-2 lx:py-4 2xl:py-6 3xl:py-8">
          <div className={`relative mb-4 w-10/12 h-auto rounded-md  aspect-[1/1] items-center justify-center`}>
            <Image
              src="/images/about/girl.png"
              alt="about image"
              width={1450}
              height={1370}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center sm:w-full md:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 py-2 lx:py-4 2xl:py-6 3xl:py-8">
          <div className="flex flex-column w-full h-auto items-center justify-center">
            <div className="w-1/12 h-auto flex items-center justify-center">
              {getCommonIcons('Check', '100%', '100%')}
            </div>
            <h2 className="px-2 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Yeah!
              <br />
              Your tag has been sent!
            </h2>
          </div>
          <div className="w-full my-8 flex justify-center">
            <Button
              variant="solid"
              size="md"
              color="primary"
              type="submit"
              onClick={handleContinue}
              className="text-white rounded-md w-4/12"
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirm_New_Tag;
