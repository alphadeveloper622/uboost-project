import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-4 mt-8 md:w-1/2 lg:w-1/3">
      <div className="bg-ublue-50 wow fadeInUp rounded-[20px] p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10" data-wow-delay=".15s">
        <div className="relative z-10 mb-8 w-60 h-60 content-center mx-16">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white text-center">
          {title}
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {paragraph}
        </p>
        <Link
          href={btnLink}
          className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
