import SectionTitle from "../_Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="bg-white dark:bg-dark py-2 pt-10 lg:pb-16 lg:pt-20">
      <div className="container">
        <SectionTitle
          subtitle=""
          title="Featured"
          paragraph=""
          center
        />
        <div className="continer mx-10">
          <div className="justify-center items-center mx-4 mt-4 flex flex-wrap xl:mx-28 2xl:mx-36">
            {featuresData.map((feature, i) => (
              <SingleFeature key={i} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
