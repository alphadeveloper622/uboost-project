import Link from "next/link";

const NormalTitle = ({
  id,
  title,
  description,
  description_icon,
  bg_color = "transparent", // default Tailwind color class
  title_color = "black", // default Tailwind color class
  description_color = "primary", // default Tailwind color class
  description_link,
  left_link,
  right_link,
  width,
  title_direction,
  description_direction,
}: {
  id?: string;
  title: string;
  description: string;
  description_icon?: JSX.Element;
  bg_color?: string;
  title_color?: string;
  description_color?: string;
  description_link?: string;
  left_link?: JSX.Element;
  right_link?: JSX.Element;
  width?: string;
  title_direction?: React.CSSProperties['textAlign'];
  description_direction?: React.CSSProperties['textAlign'];
}) => {

  return (
    <div className={`relative z-20 overflow-hidden pb-[20px] pt-[80px] md:pt-[80px] lg:pt-[80px] ${bg_color[0] == '#' ? "bg-[" + bg_color + "]" : "bg-" + bg_color} ${width ? `w-[${width}]` : 'w-full'}`}>
      <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
      <div className="container w-full flex-col flex-wrap items-center">
        <div className="flex flex-row flex-wrap items-center">
          <div className="flex flex-row w-full items-center justify-center">
            <div className="scale-100 hover:scale-105 duration-150">
              {left_link}
            </div>
            <div className="text-center flex-grow">
              <p className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] ${title_color == "black" ? "text-black" : `text-[${title_color}]`}`} style={{ textAlign: title_direction }}>
                {title}
              </p>
            </div>
            <div className="scale-100 hover:scale-105 duration-150">
              {right_link}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mb-5 text-base" style={{ textAlign: description_direction }}>
          {description_icon ?
            (<div>
              {description_icon} &nbsp;&nbsp;
            </div>) :
            (<div />)}
            <div
              className={`text-center text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl 2xl:text-2xl font-medium leading-tight ${description_color == "primary" ? "text-primary" : `text-[${description_color}]`}`}>
                {description_link ? (
                  <Link href={description_link || ""} className="hover:underline">
                    {description}
                  </Link>
                ):(
                  <>
                    {description}
                  </>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default NormalTitle;