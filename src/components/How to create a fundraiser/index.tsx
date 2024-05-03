"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const How_To_Create_A_Fundraiser = () => {

  return (
    <section>
      <div className="bg-gray-50 dark:bg-dark relative z-10 overflow-hidden pb-[20px] pt-[80px] md:pt-[80px] lg:pt-[80px]">
        <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
        <div className="container w-full flex-col flex-wrap items-center">
          <div className="flex flex-row flex-wrap items-center">
            <div className="flex flex-row w-full items-center justify-center">
              <div className="scale-100 hover:scale-105 duration-150">
                <Link href="/fundraising-dashboard">
                  <svg fill="#3758f9" width="46" height="46" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330" xmlSpace="preserve">
                    <path id="XMLID_6_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394
	                          c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998
	                          c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0
	                          c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
                  </svg>
                </Link>
              </div>

              <div className="text-center flex-grow">
                <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Ready to Boost Your Dreams?
                </h1>
              </div>

              <div className="scale-100 hover:scale-105 duration-150">
                <Link href="">
                  <svg width="45"
                    height="45"
                    viewBox="0 0 496.158 496.158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    {/* <circle style={{ fill: "#3758f9" }} cx="242.4" cy="242.4" r="242.4" />
                    <path style={{ fill: "#3758f9" }} d="M0,242.4C0,376,108,484,242.4,484C376,484,484,376,484,242.4" />
                    <polygon style={{ fill: "#ffffff" }} points="394.4,202.4 282.4,202.4 282.4,90.4 202.4,90.4 202.4,202.4 90.4,202.4 90.4,282.4 
	                        202.4,282.4 202.4,394.4 282.4,394.4 282.4,282.4 394.4,282.4 "/>
                    <polygon style={{ fill: "#ffffff" }} points="282.4,200.8 200.8,282.4 202.4,282.4 202.4,394.4 282.4,394.4 282.4,282.4 394.4,282.4 
	                        394.4,202.4 282.4,202.4 "/> */}
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <p className="text-body-color dark:text-dark-6 mb-5 text-base">
            <h4 className="text-center text-primary text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight">
              Here&apos;s Your üboost How-To Guide&#33;
            </h4>
          </p>
        </div>
      </div>
      <div className="bg-gray-100 relative flex flex-row sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-12 sm:px-20 md:px-24 lg:px-28 lx:px-32 2xl:px-36 3xl:px-40 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
        <div className="w-full sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8">
          <div className="relative rounded-md bg-gradient-to-t from-primary to-ublue-700 aspect-[1/1] items-center justify-center">
            <div className="">
              <Image src="/images/how to create a fundraiser/fun girl.png" alt="campaign image" fill />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full 2xl:w-1/2 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20">
          <p className="text-left leading-normal text-gray-800 text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            So, you&apos;ve joined the üboost party? Fantastic&#33; Now, let&apos;s kick off your fundraising journey in three simple, super-fun steps:
          </p>
          <br />
          <p className="text-left leading-normal text-gray-800 text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            Step 1: Hit the create campaign button &quot;+&quot;.
          </p>
          <br />
          <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
            Dive into üboost and channel your inner fundraising superstar&#33; Look for the create campaign button &quot;+&quot; in the top right corner of your screen. Give it a name, a pic, and a short description.
          </p>
          <br />
          <p className="text-left leading-normal text-gray-800 text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            Step 2: Lights, Camera, Action – Create a Video That Pops&#33;
          </p>
          <br />
          <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
            Time to shine in the spotlight&#33; Craft a video that screams &quot;YOU.&quot; Share your passion, your dreams, and why your campaign is the coolest thing since sliced bread. Don&apos;t forget to sprinkle in some filters, emojis, and a dash of your unique personality. üboost is your stage – own it&#33; Upload your video in the &quot;Create a Tag&quot; screen.
          </p>
          <br />
          <p className="text-left leading-normal text-gray-800 text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            Step 3: Tag, You&apos;re It – Share the Love&#33;
          </p>
          <br />
          <p className="text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
            Now, the fun part&#33; Hit the &quot;Tag&quot; button and send your masterpiece to your friends or family via text or email. Picture this: friends, family, and even your neighbor&apos;s dog watching your video, cheering you on&#33; It&apos;s like a virtual pep rally for your dreams. Ready, set, tag away&#33; Hit the &quot;Send&quot; button.
            And there you have it&#33; Three steps to kickstart your üboost campaign. So, what are you waiting for? Hit that &quot;Create Campaign&quot; button, dazzle the world with your video, and tag your way to fundraising glory&#33;
            <br />
            <br />
            üboost – Because fundraising should be as fun as chasing your dreams&#33;
          </p>
          <br />
        </div>
      </div>
    </section>
  );
};

export default How_To_Create_A_Fundraiser;
