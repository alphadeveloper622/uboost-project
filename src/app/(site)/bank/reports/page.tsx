import Reports from "@/components/Bank/Reports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Reports",
    description: "",
};

const Reports_Page = () => {
  return (
    <>
      <Reports />
    </>
  );
};

export default Reports_Page;
