import Breadcrumb from "@/components/_Common/Breadcrumb";
import Campaigns from "@/components/Campaigns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Campaigns Page",
  description: "This is Campaigns page description",
};

const CampaignsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Campaigns" />
      <Campaigns />
    </>
  );
};

export default CampaignsPage;
