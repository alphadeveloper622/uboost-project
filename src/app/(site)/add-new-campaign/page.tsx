import Add_New_Campaign from "@/components/Add New Campaign";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Campaign",
  description: "",
};

const Add_New_Campaign_Page = () => {
  return (
    <>
      <Add_New_Campaign />
    </>
  );
};

export default Add_New_Campaign_Page;
