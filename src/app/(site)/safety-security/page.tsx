import Breadcrumb from "@/components/Common/Breadcrumb";
import SafetyAndSecurity from "@/components/Safety&Security";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Safety & Security",
  description: "",
};

const SafetyAndSecurityPage = () => {
  return (
    <>
      <Breadcrumb pageName="Safety & Security" />
      <SafetyAndSecurity />
    </>
  );
};

export default SafetyAndSecurityPage;
