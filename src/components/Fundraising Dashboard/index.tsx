"use client";
import Link from "next/link";
import SingleCampaign from "./SingleCampaign";
import campaignData from "./campaignData";

const Fundraising_Dashboard = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-10 dark:bg-dark-2"
    >
      <>
        <div className="dark:bg-dark relative z-10 overflow-hidden pb-[20px] pt-[80px] md:pt-[80px] lg:pt-[80px]">
          <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
          <div className="container">
            <div className="flex flex-row flex-wrap items-center">
              <div className="flex flex-row w-full px-4">
                <div className="">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 496.158 496.158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path fill="#3758f9" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.003,0,111.063,0,248.085
                        c0,137.002,111.07,248.07,248.083,248.07C385.088,496.155,496.158,385.087,496.158,248.085z"/>
                    <path fill="#FFFFFF" d="M408.326,267.403v-38.649l-36.572-11.494c-3.107-12.406-8.03-24.09-14.476-34.756l17.779-34.071
                        l-27.332-27.33l-34.171,17.828c-10.621-6.372-22.247-11.236-34.588-14.309l-11.562-36.789h-38.652l-11.562,36.789
                        c-12.338,3.072-23.965,7.937-34.586,14.309l-34.172-17.828l-27.331,27.332l17.778,34.069c-6.444,10.666-11.367,22.35-14.472,34.756
                        l-36.575,11.494v38.649l36.431,11.451c3.078,12.524,7.997,24.32,14.468,35.084l-17.63,33.784l27.332,27.331l33.688-17.575
                        c10.803,6.546,22.659,11.523,35.251,14.636l11.379,36.211h38.652l11.38-36.211c12.593-3.112,24.448-8.09,35.254-14.636
                        l33.688,17.575l27.332-27.331l-17.628-33.784c6.47-10.764,11.389-22.56,14.466-35.084L408.326,267.403z M248.08,332.899
                        c-46.697,0-84.552-37.855-84.552-84.553c0-46.695,37.855-84.551,84.552-84.551c46.694,0,84.549,37.855,84.549,84.551
                        C332.629,295.044,294.774,332.899,248.08,332.899z"/>
                  </svg>
                </div>

                <div className="text-center flex-grow">
                  <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                    Fundraising Dashboard
                  </h1>
                </div>

                <div>
                  <div className="">
                    <svg width="50"
                      height="50"
                      viewBox="0 0 496.158 496.158"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current">
                      <circle style={{ fill: "#3758f9" }} cx="242.4" cy="242.4" r="242.4" />
                      <path style={{ fill: "#3758f9" }} d="M0,242.4C0,376,108,484,242.4,484C376,484,484,376,484,242.4" />
                      <polygon style={{ fill: "#ffffff" }} points="394.4,202.4 282.4,202.4 282.4,90.4 202.4,90.4 202.4,202.4 90.4,202.4 90.4,282.4 
	                        202.4,282.4 202.4,394.4 282.4,394.4 282.4,282.4 394.4,282.4 "/>
                      <polygon style={{ fill: "#ffffff" }} points="282.4,200.8 200.8,282.4 202.4,282.4 202.4,394.4 282.4,394.4 282.4,282.4 394.4,282.4 
	                        394.4,202.4 282.4,202.4 "/>
                    </svg>
                  </div>
                </div>

              </div>
              <div className="flex flex-row w-full px-4 items-center justify-center">
                <Link href="">
                  <h4 className="text-center text-primary hover:text-primary/60 text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight">
                    Need help starting a campaign? Click here
                  </h4>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </>
      <div className="mb-12 max-w-full items-center px-2 sm:px-2 md:px-0 lg:px-8 lx:px-10 2xl:px-14 3xl:px-20 sm:pt-4 md:pt-8 lg:pt-10 lx:pt-12 2xl:pt-14 3xl:pt-16">
        <h2 className="mb-5 text-3xl font-bold text-primary text-center dark:text-white sm:text-[40px] sm:leading-[1.2]">
          Fundraisers
        </h2>
      </div>
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
              href=""
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

export default Fundraising_Dashboard;
