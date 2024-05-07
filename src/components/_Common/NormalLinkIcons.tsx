import Link from "next/link";


const getNormalLinkIcon = (iconName: string, iconLink: string, iconColor = "primary"): JSX.Element => {
  var iconlink;
  switch (iconName) {
    case 'Setting':
      iconlink =
        (<Link href={iconLink}>
          <svg
            width="46"
            height="46"
            viewBox="0 0 496.158 496.158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path className={iconColor === "primary" ? "fill-primary" : `fill-[${iconColor}]`} d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.003,0,111.063,0,248.085
        c0,137.002,111.07,248.07,248.083,248.07C385.088,496.155,496.158,385.087,496.158,248.085z"/>
            <path fill="#FFFFFF" d="M408.326,267.403v-38.649l-36.572-11.494c-3.107-12.406-8.03-24.09-14.476-34.756l17.779-34.071
        l-27.332-27.33l-34.171,17.828c-10.621-6.372-22.247-11.236-34.588-14.309l-11.562-36.789h-38.652l-11.562,36.789
        c-12.338,3.072-23.965,7.937-34.586,14.309l-34.172-17.828l-27.331,27.332l17.778,34.069c-6.444,10.666-11.367,22.35-14.472,34.756
        l-36.575,11.494v38.649l36.431,11.451c3.078,12.524,7.997,24.32,14.468,35.084l-17.63,33.784l27.332,27.331l33.688-17.575
        c10.803,6.546,22.659,11.523,35.251,14.636l11.379,36.211h38.652l11.38-36.211c12.593-3.112,24.448-8.09,35.254-14.636
        l33.688,17.575l27.332-27.331l-17.628-33.784c6.47-10.764,11.389-22.56,14.466-35.084L408.326,267.403z M248.08,332.899
        c-46.697,0-84.552-37.855-84.552-84.553c0-46.695,37.855-84.551,84.552-84.551c46.694,0,84.549,37.855,84.549,84.551
        C332.629,295.044,294.774,332.899,248.08,332.899z"/>
          </svg>
        </Link>)
      break;
    case 'Plus':
      iconlink =
        <Link href={iconLink}>
          <svg width="45"
            height="45"
            viewBox="0 0 496.158 496.158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle className={iconColor === "primary" ? "fill-primary" : "fill-[${iconColor}]"} cx="242.4" cy="242.4" r="242.4" />
            <path className={iconColor === "primary" ? "fill-primary" : "fill-[${iconColor}]"} d="M0,242.4C0,376,108,484,242.4,484C376,484,484,376,484,242.4" />
            <polygon style={{ fill: "#ffffff" }} points="394.4,202.4 282.4,202.4 282.4,90.4 202.4,90.4 202.4,202.4 90.4,202.4 90.4,282.4 
	                        202.4,282.4 202.4,394.4 282.4,394.4 282.4,282.4 394.4,282.4 "/>
            <polygon style={{ fill: "#ffffff" }} points="282.4,200.8 200.8,282.4 202.4,282.4 202.4,394.4 282.4,394.4 282.4,282.4 394.4,282.4 
	                        394.4,202.4 282.4,202.4 "/>
          </svg>
        </Link>
      break;
    case 'Back':
      iconlink =
        <Link href={iconLink}>
          <svg className={iconColor === "primary" ? "fill-primary" : "fill-[${iconColor}]"} width="46" height="46" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330" xmlSpace="preserve">
            <path id="XMLID_6_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394
	                          c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998
	                          c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0
	                          c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
          </svg>
        </Link>
      break;
    case 'Forward':
      iconlink =
        <Link href={iconLink} className="rotate-180">
          <svg className={iconColor === "primary" ? "fill-primary" : "fill-[${iconColor}]"} width="46" height="46" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330" xmlSpace="preserve">
            <path id="XMLID_6_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394
	                          c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998
	                          c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0
	                          c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
          </svg>
        </Link>
      break;
    case 'Home':
      iconlink =
        <Link href={iconLink} className="rotate-180">
          <svg className={iconColor === "primary" ? "fill-primary" : "fill-[${iconColor}]"} width="55" height="55" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-2.792-1.198a.396.396 0 0 0-.149-.54L8.661 5.104a.396.396 0 0 0-.393 0l-2.31 1.324v-.895a.318.318 0 0 0-.317-.317h-.968a.318.318 0 0 0-.317.317v1.813l-.872.5a.396.396 0 1 0 .393.686l4.589-2.629 4.619 2.63a.395.395 0 0 0 .54-.148zm-1.02.786L8.467 6.815l-4.11 2.356v4.465a.318.318 0 0 0 .316.317h7.615a.318.318 0 0 0 .317-.317zm-6.647.607h1.647v1.668H5.958zm5.045 1.668H9.356V9.778h1.647z" />
          </svg>
        </Link>
      break;
    default:
      iconlink =
        (<svg
          width="46"
          height="46"
          viewBox="0 0 496.158 496.158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>)
      break;
  }
  return <>{iconlink}</>;
}

export default getNormalLinkIcon;