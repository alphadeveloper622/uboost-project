import { TeamType } from "@/types/team";
import SectionTitle from "@/components/_Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Member1",
    designation: "UI Designer",
    image: "/images/team/01.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Member2",
    designation: "Product Designer",
    image: "/images/team/02.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Member3",
    designation: "App Developer",
    image: "/images/team/03.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Member4",
    designation: "Content Writer",
    image: "/images/team/04.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Resources = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle=""
            title="Resources"
            paragraph=""
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center">
              <h2 className="m-40 text-3xl font-bold text-primary dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                ????? Alpha Developer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
