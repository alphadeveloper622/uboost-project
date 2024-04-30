import Breadcrumb from "@/components/_Common/Breadcrumb";
import Campaign_Detail from "@/components/Campaign Detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "",
  description: "",
};

const Fundraisng_Detail = () => {
  return (
    <>
      <Breadcrumb pageName="Campaing Detail" />
      <Campaign_Detail />
    </>
  );
};

export default Fundraisng_Detail;
