"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import SingleTip from '@/components/_Common/SingleTip';

const Top_Ten_Tips = () => {
  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle
        id="top title"
        title="Top Ten Tips"
        left_link_name={'Back'}
        left_link_url={'/add-new-tag/create-a-message'}
        left_link_icon={getNormalLinkIcon('Back')}
        bg_color="#FFFFFF"
      />
      <div className="wow fadeInUp flex flex-row relative flex-wrap sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16 px-4 sm:px-8 md:px-16 lg:px-24 lx:px-32 2xl:px-36 3xl:px-32 pt-2 lx:pt-4 2xl:pt-6 3xl:pt-8" data-wow-delay=".2s">
        <div className="w-full flex flex-col items-center sm:w-full md:w-1/3 px-0 2xl:px-4 3xl:px-8 py-2 lx:py-4 2xl:py-6 3xl:py-8">
          <div className={`relative mb-4 w-10/12 h-auto rounded-md bg-gradient-to-t from-primary to-ublue-700 items-center justify-center`}>
            <Image
              src="/images/ten top tips/sports man.png"
              alt="about image"
              width={1450}
              height={1370}
              className="h-full w-full object-cover object-center rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start sm:w-full md:w-2/3 px-0 sm:px-0 md:px-4 lg:px-8 lx:px-12 2xl:px-16 3xl:px-20 py-2 lx:py-4 2xl:py-6 3xl:py-8">
          <p className="text-left leading-normal text-gray-800 text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            Top 10 Tips for a Stellar üboost Video Campaign!
          </p>
          <br />
          <SingleTip
            id='tip1'
            title='1. Authenticity is Key'
            content='Be YOU! Speak from the heart, share your genuine passion, and let your personality shine. Authenticity connects, and that&apos;s what üboost is all about.'
          />
          <SingleTip
            id='tip2'
            title='2. Tell Your Story'
            content='What&apos;s your dream? Why is your campaign important? Take your viewers on a journey. The more compelling your story, the more people will want to be part of it.'
          />
          <SingleTip
            id='tip3'
            title='3. Keep it Snappy'
            content='Attention spans are short, so keep your video short and sweet. Aim for 1-2 minutes – hit the highlights. Most people know you need their support.'
          />
          <SingleTip
            id='tip4'
            title='4. Show, Don&apos;t Just Tell'
            content='Actions speak louder than words. If your campaign is about sports, show off your skills. If it&apos;s for education, highlight your achievements. Visuals make a lasting impression. '
          />
          <SingleTip
            id='tip5'
            title='5. Make it Fun and Engaging'
            content='Inject some fun into your video! Use filters, emojis, and maybe a little dance move. The more entertaining, the more likely people will watch, enjoy, and contribute.'
          />
          <SingleTip
            id='tip6'
            title='6. Express Gratitude'
            content='Thank your potential supporters! Let them know how much their contribution means to you. Gratitude goes a long way in building a connection.'
          />
          <SingleTip
            id='tip7'
            title='7. Set Clear Goals'
            content='Be transparent about your fundraising goal. Clearly state how the funds will be used and the impact it will have. People are more likely to support a campaign with a clear purpose.'
          />
          <SingleTip
            id='tip8'
            title='8. Personalize Your Ask'
            content='When tagging contacts, personalize your messages. Add names in the message box. Explain why their support is vital and how it contributes to your dream.'
          />
          <SingleTip
            id='tip9'
            title='9. Share Progress Updates'
            content='Keep your supporters in the loop! Regularly update them on your progress. Celebrate milestones, express gratitude, and keep the excitement alive. Easily do that with Posts.'
          />
          <SingleTip
            id='tip10'
            title='10. Call to Action'
            content='End your video with a strong call to action. Encourage viewers to share your campaign with their network, donate $5 $19 $15 $20 whatever they can, and be part of your journey. A clear call to action motivates action!'
          />
          <p className='text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium'>
            Ready to rock your üboost video campaign? Go on, create, share, and watch your dreams take flight!
          </p>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Top_Ten_Tips;
