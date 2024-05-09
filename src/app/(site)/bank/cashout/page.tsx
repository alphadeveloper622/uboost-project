import Cash_Out from "@/components/Bank/Cash Out";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cash Out",
  description: "",
};

const Cash_Out_Page = () => {
  return (
    <>
      <Cash_Out />
    </>
  );
};

export default Cash_Out_Page;
