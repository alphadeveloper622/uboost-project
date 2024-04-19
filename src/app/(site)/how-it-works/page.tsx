import Breadcrumb from "@/components/Common/Breadcrumb";
import HowItWorks from "@/components/HowItWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Uboost Works",
  description: "",
};

const HowItWorksPage = () => {
  return (
    <>
      <Breadcrumb pageName="How It Works" />
      <HowItWorks />
    </>
  );
};

export default HowItWorksPage;
