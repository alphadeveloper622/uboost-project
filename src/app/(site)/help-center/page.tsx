import Help_Center from "@/components/Help Center";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center",
  description: "",
};

const Settings_Page = () => {
  return (
    <>
      <Help_Center />
    </>
  );
};

export default Settings_Page;
