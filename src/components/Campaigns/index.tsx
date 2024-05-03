"use client";
import Link from "next/link";
import SectionTitle from "../_Common/SectionTitle";
import SingleCampaign from "./SingleCampaign";
import campaignData from "./campaignData";
import { usePathname } from "next/navigation";

const Campaigns = () => {
  const pathUrl = usePathname();

  return (
    <section
      id="campaigns"
      className="bg-gradient-to-t from-ublue-50 to-white dark:bg-bg-color-dark py-2 pt-10 lg:pb-16 lg:pt-20"
    >
      {pathUrl !== "/" ?
        (<div>
          
        </div>) :
        (<div>
          <SectionTitle
            title="Trending"
            paragraph=""
            center
          />
        </div>)}
      <div className="px-8 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex flex-wrap justify-between gap-y-10">
          {campaignData.map((campaign) => (
            <div key={campaign.id}>
              <SingleCampaign campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
      <div className="basis-1/2 content-center pt-10">
        <div className="w-full px-4">
          <div className="mx-auto text-center">
            <a
              href="/"
              className="w-72 md:w-76 lg:w-80 xl:w-84 2xl:w-88 3xl:w-96 inline-flex items-center justify-center rounded-md bg-primary hover:bg-primary/90 scale-100 hover:scale-105 px-7 py-2 text-center text-base font-medium text-white duration-150"
            >
              Show More Campaigns
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
