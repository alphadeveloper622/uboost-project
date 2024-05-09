import Confirm_New_Tag from "@/components/Add New Tag/Confirm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Confirm New Tag",
    description: "",
};

const Confirm_New_Tag_Page = () => {
  return (
    <>
      <Confirm_New_Tag />
    </>
  );
};

export default Confirm_New_Tag_Page;
