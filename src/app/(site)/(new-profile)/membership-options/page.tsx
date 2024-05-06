import Membership_Options from "@/components/Add New Profile/Membership Options";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Membership Options",
  description: "",
};

const Membership_Options_Page = () => {
  return (
    <>
      <Membership_Options />
    </>
  );
};

export default Membership_Options_Page;
