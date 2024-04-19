import Breadcrumb from "@/components/Common/Breadcrumb";
import GetInvolved from "@/components/GetInvolved";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Get Involved Page | Please get involved!",
  description: "",
};

const GetInvolvedPage = () => {
  return (
    <>
      <Breadcrumb pageName="Get Involved" />

      <GetInvolved />
    </>
  );
};

export default GetInvolvedPage;
