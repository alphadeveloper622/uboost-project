"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import SingleTip from '@/components/_Common/SingleTip';

const How_To_Create_A_Fundraiser = () => {
  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle
        id="top title"
        title="Ready to Boost Your Dreams?"
        left_link_name={'Back'}
        left_link_url={'/fundraising-dashboard'}
        left_link_icon={getNormalLinkIcon('Back')}
        bg_color="#FFFFFF"
      />
      <div className="wow fadeInUp flex flex-row relative flex-wrap sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-4 sm:px-8 md:px-16 lg:px-24 lx:px-32 2xl:px-36 3xl:px-32 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8" data-wow-delay=".2s">
        <div className="w-full flex flex-col items-center sm:w-full md:w-1/3 px-0 sm:px-0 2xl:px-4 3xl:px-8 py-2 lx:py-4 2xl:py-6 3xl:py-8">
          <div className={`relative mb-4 w-10/12 h-auto rounded-md bg-gradient-to-t from-primary to-ublue-700 aspect-[1/1] items-center justify-center`}>
            <Image
              src="/images/how to create a fundraiser/fun girl.png"
              alt="about image"
              width={1450}
              height={1370}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start sm:w-full md:w-2/3 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 py-2 lx:py-4 2xl:py-6 3xl:py-8">
          <p className="text-left leading-normal text-gray-800 text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            So, you&apos;ve joined the üboost party? Fantastic&#33; Now, let&apos;s kick off your fundraising journey in three simple, super-fun steps:
          </p>
          <br />
          <SingleTip
            id='tip1'
            title='Step 1: Hit the create campaign button &quot;+&quot;.'
            content='Dive into üboost and channel your inner fundraising superstar&#33; Look for the create campaign button &quot;+&quot; in the top right corner of your screen. Give it a name, a pic, and a short description.'
          />
          <SingleTip
            id='tip2'
            title='Step 2: Lights, Camera, Action – Create a Video That Pops&#33;'
            content='Time to shine in the spotlight&#33; Craft a video that screams &quot;YOU.&quot; Share your passion, your dreams, and why your campaign is the coolest thing since sliced bread. Don&apos;t forget to sprinkle in some filters, emojis, and a dash of your unique personality. üboost is your stage – own it&#33; Upload your video in the &quot;Create a Tag&quot; screen.'
          />
          <SingleTip
            id='tip3'
            title='Step 3: Tag, You&apos;re It – Share the Love&#33;'
            content=' 
            Now, the fun part&#33; Hit the &quot;Tag&quot; button and send your masterpiece to your friends or family via text or email. Picture this: friends, family, and even your neighbor&apos;s dog watching your video, cheering you on&#33; It&apos;s like a virtual pep rally for your dreams. Ready, set, tag away&#33; Hit the &quot;Send&quot; button.
            And there you have it&#33; Three steps to kickstart your üboost campaign. So, what are you waiting for? Hit that &quot;Create Campaign&quot; button, dazzle the world with your video, and tag your way to fundraising glory&#33;
            <br />
            <br />
            üboost – Because fundraising should be as fun as chasing your dreams&#33;'
          />
        </div>
      </div>
    </section>
  );
};

export default How_To_Create_A_Fundraiser;
