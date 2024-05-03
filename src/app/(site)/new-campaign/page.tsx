import New_Campaign from "@/components/New Campaign";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Campaign",
  description: "",
};

const New_Campaign_Page = () => {
  return (
    <>
      <New_Campaign />
    </>
  );
};

export default New_Campaign_Page;
