import Breadcrumb from "@/components/_Common/Breadcrumb";
import Resources from "@/components/Resources";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Resources",
  description: "",
};

const ResourcesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Resources" />
      <Resources />
    </>
  );
};

export default Resources;
