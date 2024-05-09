const SingleTip = (
  {
    id,
    title,
    content,
    title_color = 'black',
    content_color = 'black',
    title_direction = 'left',
    content_direction = 'left'
  }:
    {
      id?: string;
      title: string;
      content: string;
      title_color?: string;
      content_color?: string;
      title_direction?: string;
      content_direction?: string;
    }
) => {
  return (
    <div id={id}>
      <p className={`leading-normal text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium
     ${title_color ? (title_color[0] === '#' ? `text-[${title_color}]` : 'text-' + title_color) : ''} 
     ${title_direction === 'left' ? 'text-left' : title_direction === 'right' ? 'text-right' : title_direction === 'center' ? 'text-center' : ''}`}>
        {title}
      </p>
      <br />
      <p className={`text-left leading-normal text-gray-800 text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium
      ${content_color ? (content_color[0] === '#' ? `text-[${content_color}]` : 'text-' + content_color) : ''} 
      ${content_direction === 'left' ? 'text-left' : content_direction === 'right' ? 'text-right' : content_direction === 'center' ? 'text-center' : ''}`}>
        {content}
      </p>
      <br />
    </div>);
};

export default SingleTip;