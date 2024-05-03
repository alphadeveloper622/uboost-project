import Fundraising_Dashboard from "@/components/Fundraising Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Fundraising Dashboard",
  description: "",
};

const Fundraising_Dashboard_Page = () => {
  return (
    <>
      <Fundraising_Dashboard />
    </>
  );
};

export default Fundraising_Dashboard_Page;
