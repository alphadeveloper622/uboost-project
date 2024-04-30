import Breadcrumb from "@/components/_Common/Breadcrumb";
import Get_In_Touch from "@/components/Get In Touch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Get In Touch Page | Please get in touch!",
  description: "",
};

const Get_In_Touch_Page = () => {
  return (
    <>
      <Breadcrumb pageName="Get In Touch" />

      <Get_In_Touch />
    </>
  );
};

export default Get_In_Touch_Page;
