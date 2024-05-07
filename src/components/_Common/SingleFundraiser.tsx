"use client";
import { Button } from "@nextui-org/react";

import Image from "next/image";
import getCampaignIcon from "@/components/_Common/CampaignCategoryIcon";
import { useState } from "react";
import getCommonIcons from "./CommonIcons";

const SingleFundraiser = (
  {
    id,
    image,
    category,
    comment,
    comment_color = 'black',
    comment_direction = 'left'
  }: {
    id: number;
    image: string;
    category: string;
    comment: string;
    comment_color?: string;
    comment_direction?: string;
  }) => {

  return (
    <section id={`${id}`} className="w-[450px] relative overflow-hidden justify-start items-center border-2 rounded-md bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div className="text-center flex-grow">
        <div className="flex flex-row h-32 items-center justify-start">
          <div className="basis 3/12">
            <div className="relative h-28 w-28 flex justify-center m-2 items-center cursor-pointer">
              <Image
                src={image}
                alt="user image"
                layout="fill"
                objectFit="cover"
                className="z-20 rounded-lg transition duration-300 ease-in-out"
              />
              <div>
              <Image className="z-20 absolute left-0 top-0 bg-gradient-to-r from-primary to-transparent" src={getCampaignIcon(category)} width="40" height="40" alt="icon" />
              </div>
            </div>
          </div>
          <div className="basis 7/12 relative">
            <h4 className={`h-28 m-2 overflow-hidden text-clip  text-sm xl:text-md 2xl:text-lg font-medium leading-tight'
                ${comment_color ? comment_color[0] == '#' ? `text-[${comment_color}]` : `text-${comment_color}` : ''}
                ${comment_direction === 'left' ? 'text-left' :
                  comment_direction === 'right' ? 'text-right' :
                  comment_direction === 'center' ? 'text-center' : ''}`}>
              {comment}
            </h4>
          </div>
          <div className="basis 1/12 flex-grow pr-3 scale-100 hover:scale-105 duration-150 cursor-pointer">
            {getCommonIcons('Delete', 50, 50)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleFundraiser;
