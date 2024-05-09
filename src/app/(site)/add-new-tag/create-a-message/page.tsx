import Create_A_Messgae from "@/components/Add New Tag/Create A Message";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Create A Message",
  description: "",
};

const Create_A_Messgae_Page = () => {
  return (
    <>
      <Create_A_Messgae />
    </>
  );
};

export default Create_A_Messgae_Page;
