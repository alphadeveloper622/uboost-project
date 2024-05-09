import Top_Ten_Tips from "@/components/Top Ten Tips";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Ten Tips",
  description: "",
};

const Top_Ten_Tips_Page = () => {
  return (
    <>
      <Top_Ten_Tips />
    </>
  );
};

export default Top_Ten_Tips_Page;
