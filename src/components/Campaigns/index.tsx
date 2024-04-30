"use client";
import Link from "next/link";
import SectionTitle from "../_Common/SectionTitle";
import SingleCampaign from "./SingleCampaign";
import campaignData from "./campaignData";

const Campaigns = () => {
  return (
    <section
      id="campaigns"
      className="bg-gradient-to-t from-ublue-50 to-white dark:bg-bg-color-dark py-2 pt-10 lg:pb-16 lg:pt-20"
    >
      <SectionTitle
        title="Trending"
        paragraph=""
        center
      />

      <div className="px-8 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-12 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          {campaignData.map((campaign) => (
            <div key={campaign.id} className="w-full">
              <SingleCampaign campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
      <div className="basis-1/2 content-center pt-10">
        <div className="w-full px-4">
          <div className="mx-auto text-center">
            <Link
              href="/"
              className="inline-block rounded-md border border-transparent w-96 bg-primary px-7 py-3 text-base font-medium text-white transition hover:bg-primary/80"
            >
              Show More Campaigns
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
