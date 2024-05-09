"use client";
import campaignData from "@/components/Campaigns/campaignData";
import NormalTopBarUserInfo from "@/components/_Common/NormalTopBarUserInfo";
import getNormalLinkIcon from "@/components/_Common/NormalLinkIcons";
import SingleFundraiser from "@/components/_Common/SingleFundraiser";
import getCommonIcons from "@/components/_Common/CommonIcons"

const Fundraising_Dashboard = () => {
  return (

    <section className="bg-gradient-to-t from-ublue-100 to-ublue-50">
      <NormalTopBarUserInfo
        username={"Fort Bend Texas Heat"}
        avatar={"/images/campaign detail/avatar.jpg"}
        status={"Member"}
        left_link_name="Settings"
        right_link_name="Add"
        left_link_url={'/settings'}
        right_link_url={'/add-new-campaign'}
        information={"Need help starting a campaign? Click here."}
        information_icon={getCommonIcons('Warning', '30', '30')}
        information_link='/how-to-create-a-fundraiser'
        username_color={'primary'}
        left_link_icon={getNormalLinkIcon('Setting')}
        right_link_icon={getNormalLinkIcon('Plus')}
        username_direction="left"
        status_direction="left" />
      <div className="sm:pb-4 md:pb-8 lg:pb-10 lx:pb-12 2xl:pb-14 3xl:pb-16">
        <div className="mb-12 max-w-full items-center px-2 sm:px-2 md:px-0 lg:px-8 lx:px-10 2xl:px-14 3xl:px-20 sm:pt-4 md:pt-8 lg:pt-10 lx:pt-12 2xl:pt-14 3xl:pt-16">
          <h2 className="mb-5 text-3xl font-bold text-primary text-center dark:text-white sm:text-[40px] sm:leading-[1.2]">
            Fundraisers
          </h2>
        </div>
        <div className="container flex justify-center px-2 sm:px-2 md:px-4 lg:px-8 lx:px-16 2xl:px-20 3xl:px-28">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10">
            {campaignData.map((campaign) => (
              <div key={campaign.id} className="flex justify-center items-center">
                <SingleFundraiser id={campaign.id} image={campaign.image} category={campaign.category} comment={campaign.comment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundraising_Dashboard;
