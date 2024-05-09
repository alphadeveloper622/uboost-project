import Parental_Consent from "@/components/Add New Profile/Parental Consent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Parental Consent",
  description: "",
};

const Parental_Consent_Page = () => {
  return (
    <>
      <Parental_Consent />
    </>
  );
};

export default Parental_Consent_Page;
