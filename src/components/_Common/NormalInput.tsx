const NormalInput = ({
  id,
  name,
  placeholder,
  namecolor = "black",
  inputcolor = "black",
  width = "full",
  name_direction = "left",
  input_direction = "left",
}: {
  id?: string;
  name: string;
  placeholder: string;
  namecolor?: string;
  inputcolor?: string;
  width?: string;
  name_direction?: string;
  input_direction?: string;
}) => {
  return (
    <div id={id} className={`px-2 mb-8 justify-center ${width === 'full' ? 'w-full' : `w-[${width}]`}`}>
      <label
        htmlFor="name"
        className={`mb-3 block text-sm font-medium 
        ${namecolor ? (namecolor[0] === '#' ? `text-[${namecolor}]` : 'text-' + namecolor) : ''} 
        ${name_direction === 'left' ? 'text-left' : name_direction === 'right' ? 'text-right' : name_direction === 'center' ? 'text-center' : ''}`}
      >
        {name}
      </label>
      <input
        id="inputvalue"
        type="text"
        placeholder={placeholder}
        className={`border-stroke w-full rounded-sm border bg-ugary px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none
          ${inputcolor ? (inputcolor[0] === '#' ? `text-[${inputcolor}]` : `text-${inputcolor}`) : ''}
          ${input_direction ? `text-${input_direction}` : ''}`}
      />
    </div>
  );
};

export default NormalInput;
