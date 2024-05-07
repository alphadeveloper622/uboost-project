import Breadcrumb from "@/components/_Common/Breadcrumb";
import Campaign_Detail from "@/components/Campaign Detail";
import { Campaign } from "@/types/campaign";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Detail",
  description: "",
};

const Fundraisng_Detail = () => {

  const campaign: Campaign = {
    id: 1,
    title: '2024 FBTXHEAT Basketball Fundraiser ',
    category: 'Sports',
    image: '/images/campaign detail/avatar.jpg',
    video: 'https://zuboost.s3.us-east-1.amazonaws.com/3f633f11-fd74-463c-988c-f32dad76e76b.mp4',
    comment: 'We will embrace a new world with youth and hope. Please donate to us.',
    fundraiser: {
      name: 'Fort Bend Texas Heat',
      image: '/images/campaign detail/avatar.jpg',
      description: 'member',
    },
    goal: 20000,
    raised: 14000,
    createdDate: "2024.4.4",
  };

  return (
    <>
      <Campaign_Detail campaign={campaign} />
    </>
  );
};

export default Fundraisng_Detail;
