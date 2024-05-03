const SectionTitle = ({
  subtitle,
  title,
  paragraph,
  width = "1920px",
  center,
}: {
  subtitle?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) => {
  return (
    <div className="flex flex-wrap py-10 justify-center items-center"> 
      <div
        className={`wow fadeInUp w-full${
          center ? "mx-auto text-center" : "mx-auto text-left"
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        {subtitle && (
          <span className="mb-4 block text-lg font-semibold text-primary">
            {subtitle}
          </span>
        )}
        <h2 className="mb-5 text-3xl font-bold text-primary dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2] xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed px-12 md:px-24 xl:px-52 2xl:px-52 3xl:px-60">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
