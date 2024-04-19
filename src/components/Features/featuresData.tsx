import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src={"/images/features/Talent Boost Africa.svg"}
        alt="Talent Boost Africa"
        width={200}
        height={200}
        className="header-logo w-full dark:hidden"
      />
    ),
    title: "Talent Boost Africa",
    paragraph: "This groundbreaking program offers financial assistance to amateur athletes ages 6-17, covering coaching fees, fitness training, and gear and equipment. Don't miss this opportunity to make a difference in the lives of aspiring athletes! Eligible sports include Basketball, Football (Soccer), Tennis, Golf, Track & Field, and wrestling. Eligible athletes, coaches, and training facilities, sign up below. The program begins May 1st, 2024.",
    btn: "Contact us below!",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <Image
        src={"/images/features/Need a boost.svg"}
        alt="Need a boost"
        width={200}
        height={200}
        className="header-logo w-full dark:hidden"
      />
    ),
    title: "Need a Boost?",
    paragraph: "Unlock the power of generosity with üboost. Whether you're raising funds for a personal project, charitable cause, or community initiative, üboost provides the tools and support you need to make your vision a reality. With our innovative features and commitment to accountability, transparency, and connectedness, üboost empowers you to inspire change and rally support from a global community. Join üboost today and start making a difference in the world. Join the waitlist.",
    btn: "Contact us below!",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <Image
        src={"/images/features/Be a booster.svg"}
        alt="Be a booser"
        width={200}
        height={200}
        className="header-logo w-full dark:hidden"
      />
    ),
    title: "Be a booster",
    paragraph: "Become a booster on üboost and ignite change in the causes that matter most to you. As a booster, you'll join a vibrant community of like-minded individuals dedicated to making a difference. Whether you're passionate about supporting education, healthcare, environmental conservation, or social justice, üboost provides the platform and resources to amplify your impact. Join üboost today and start boosting your favorite campaigns to help create a better world for all. oin the waitlist.",
    btn: "Contact us below!",
    btnLink: "/#",
  }
];
export default featuresData;
