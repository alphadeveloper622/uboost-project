import Add_New_Profile1 from "@/components/Add New Profile/Add New Profile1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Parent / Guardian Consent",
  description: "",
};

const Add_New_Profile1_Page = () => {
  return (
    <>
      <Add_New_Profile1 />
    </>
  );
};

export default Add_New_Profile1_Page;
