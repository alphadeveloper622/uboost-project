import BankList from "@/components/Bank/BankList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bank",
    description: "",
};

const BankList_Page = () => {
  return (
    <>
      <BankList />
    </>
  );
};

export default BankList_Page;
