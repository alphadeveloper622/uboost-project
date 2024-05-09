import Age_Verification from "@/components/Add New Profile/Age Verification";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Age Verification",
    description: "",
};

const Age_Verification_Page = () => {
  return (
    <>
      <Age_Verification />
    </>
  );
};

export default Age_Verification_Page;
