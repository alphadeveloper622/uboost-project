import Review_And_Send from "@/components/Add New Tag/Review And Send";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Review And Send",
  description: "",
};

const Review_And_Send_Page = () => {
  return (
    <>
      <Review_And_Send />
    </>
  );
};

export default Review_And_Send_Page;
