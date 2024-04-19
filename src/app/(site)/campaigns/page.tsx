import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
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
