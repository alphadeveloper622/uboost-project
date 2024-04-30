import Breadcrumb from "@/components/_Common/Breadcrumb";
import More from "@/components/More";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "More...",
  description: "",
};

const More_Page = () => {
  return (
    <>
      <Breadcrumb pageName="More..." />
      <More />
    </>
  );
};

export default More_Page;
