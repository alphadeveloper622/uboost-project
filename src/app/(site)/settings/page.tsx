import Settings from "@/components/Settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "",
};

const Settings_Page = () => {
  return (
    <>
      <Settings />
    </>
  );
};

export default Settings_Page;
