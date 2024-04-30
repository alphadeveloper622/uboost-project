"use client";
import { Feature } from "@/types/feature";
import { Button } from "@material-tailwind/react";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-4 mt-8 md:w-1/2 lg:w-1/3">
      <div className="bg-ublue-50 wow fadeInUp rounded-[20px] p-10 px-5 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10 min-h-[75vh]" data-wow-delay=".15s">
        <div className="relative z-10 mb-8 w-60 h-60 content-center mx-16">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white text-center">
          {title}
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {paragraph}
        </p>
        <div className="mx-auto text-center">
          <a
            href={btnLink}
            className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-2 text-center text-base font-medium text-white duration-300 hover:bg-primary/80"
          >
            {btn}
          </a>
        </div>

      </div>
    </div>
  );
};

export default SingleFeature;
