"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

import Loader from "@/components/_Common/Loader";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import NormalFormDecoration from '@/components/_Common/NormalFormDecoration'
import getCommonIcons from "@/components/_Common/CommonIcons";


const Membership_Options = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const handleContinue = () => {
    // You can add any other logic you need here before navigating
    router.push('/age-verification'); // Navigate to the 'add-new-profile1' page
  };

  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="Membership Options"
        description={""}
        description_link=""
        left_link={getNormalLinkIcon('Back', '/signin')}
        right_link={getNormalLinkIcon('', '')}
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
                  <h2 className="mb-3 pb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Choose a Membership
                  </h2>
                  <div className="w-full px-2">
                    <div className="mb-8 flex flex-row">
                      <div className="basis-3/12 flex-grow">
                        {getCommonIcons('Education', 50, 50)}
                      </div>
                      <div className="basis-9/12 flex-grow">
                        <div className="flex flex-col">
                          <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                            Start Free
                          </p>
                          <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                            Member /Parent /Guardian
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-9 flex justify-center">
                      <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        type="submit"
                        onClick={handleContinue} // Updated to use handleContinue function
                        className="text-white rounded-md w-8/12">
                        Continue
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

export default Membership_Options;
