"use client";
import Link from "next/link";
import SingleCampaign from "../_Common/SingleCampaign";
import campaignData from "./campaignData";
import NormalTitle from "@/components/_Common/NormalTitle";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";

const Fundraising_Dashboard = () => {
  return (
    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTitle id="top title" title="Fundraising Dashboard"
      description="Need help starting a campaign? Click here" 
      description_link="/how-to-create-a-fundraiser"
      left_link={getNormalLinkIcon('Setting', '/settings')}
      right_link={getNormalLinkIcon('Plus', '/add-new-campaign')}
      bg_color="#FFFFFF"
      />

      <div className="sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16">
        <div className="mb-12 max-w-full items-center px-2 sm:px-2 md:px-0 lg:px-8 lx:px-10 2xl:px-14 3xl:px-20 sm:pt-4 md:pt-8 lg:pt-10 lx:pt-12 2xl:pt-14 3xl:pt-16">
          <h2 className="mb-5 text-3xl font-bold text-primary text-center dark:text-white sm:text-[40px] sm:leading-[1.2]">
            Fundraisers
          </h2>
        </div>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-y-10 gap-x-10">
            {campaignData.map((campaign) => (
              <div key={campaign.id}>
                <SingleCampaign campaign={campaign} />
              </div>
            ))}
          </div>
          <div className="basis-1/2 content-center pt-10">
            <div className="w-full px-4">
              <div className="mx-auto text-center">
                <Link
                  href=""
                  className="inline-block rounded-md border border-transparent w-96 bg-primary px-7 py-3 text-base font-medium text-white transition hover:bg-primary/80"
                >
                  Show More Campaigns
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundraising_Dashboard;
