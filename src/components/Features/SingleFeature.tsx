"use client";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-4 mt-8 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 3xl:w-1/4">
      <div className="bg-ublue-50 wow flex flex-col items-center justify-center fadeInUp rounded-[20px] p-10 px-5 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10 min-h-full" data-wow-delay=".15s">
        <div className="relative z-10 mb-8 w-60 h-60 justify-stretch content-center">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white text-center">
          {title}
        </h3>
        <p className="mb-8 text-body-color utruncate h-[30vh] dark:text-dark-6 lg:mb-11">
          {paragraph}
        </p>
        <div className="mx-auto text-center">
          <a
            href={btnLink}
            className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-primary/90 scale-100 hover:scale-105 px-7 py-2 text-center text-base font-medium text-white duration-150"
          >
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
