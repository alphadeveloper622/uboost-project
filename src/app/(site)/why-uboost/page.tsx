import Breadcrumb from "@/components/_Common/Breadcrumb";
import Why_uboost from "@/components/Why uboost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Why üboost",
  description: "",
};

const Why_uboost_Page = () => {
  return (
    <>
      <Breadcrumb pageName="Why üboost" />

      <Why_uboost />
    </>
  );
};

export default Why_uboost_Page;
