import Breadcrumb from "@/components/_Common/Breadcrumb";
import HowItWorks from "@/components/How It Works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Uboost Works",
  description: "",
};

const How_It_Works_Page = () => {
  return (
    <>
      <Breadcrumb pageName="How It Works" />
      <HowItWorks />
    </>
  );
};

export default How_It_Works_Page;
