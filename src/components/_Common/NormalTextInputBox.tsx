const NormalTextInputBox = ({
  id,
  name,
  placeholder,
  row = 5,
  name_color = "black",
  textarea_color = "black",
  width = "full",
  name_direction = "left",
  textarea_direction = "left",
}: {
  id: string;
  name: string;
  placeholder: string;
  row: number;
  name_color?: string;
  textarea_color?: string;
  width?: string;
  name_direction?: string;
  textarea_direction?: string;
}) => {
  return (
    <div id={id} className={`px-2 mb-8 ${width == 'full' ? `w-[${width}]` : 'w-full'}`}>
      <label
        htmlFor="name"
        className={`mb-3 block text-sm font-medium 
          ${name_color ? name_color[0] == '#' ? `text-[${name_color}]` : 'text-' + name_color : ''}
          ${name_direction === 'left' ? 'text-left' :
            name_direction === 'right' ? 'text-right' :
              name_direction === 'center' ? 'text-center' : ''
          }`}
      >
        {name}
      </label>
      <textarea
        id="text-input-box"
        rows={row}
        placeholder={placeholder}
        className={`border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none
          ${textarea_color ? textarea_color[0] == '#' ? `text-[${textarea_color}]` : `text-${textarea_color}` : ''}
          ${textarea_direction === 'left' ? 'text-left' :
            textarea_direction === 'right' ? 'text-right' :
              textarea_direction === 'center' ? 'text-center' : ''}
          `}
      ></textarea>
    </div>
  );
};

export default NormalTextInputBox;
