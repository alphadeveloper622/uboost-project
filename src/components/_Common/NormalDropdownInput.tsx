const NormalDropdownInput = ({
  id,
  name,
  placeholder,
  options,
  namecolor = "black",
  placeholdercolor = "primary",
  optioncolor = "black",
  width = "full",
  name_direction = "left",
  option_direction = "left",
}: {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  namecolor?: string;
  placeholdercolor?: string;
  optioncolor?: string;
  width?: string;
  option_direction?: string;
  name_direction?: string;
}) => {
  return (
    <div id={id} className={`px-2 mb-8 ${width=='full' ? `w-[${width}]` : 'w-full'}`}>
      <label
        htmlFor="name"
        className={`mb-3 block text-sm font-medium 
          ${namecolor ? namecolor[0] == '#' ? `text-[${namecolor}]` : 'text-' + namecolor : ''}
          ${name_direction === 'left' ? 'text-left' :
            name_direction === 'right' ? 'text-right' :
            name_direction === 'center' ? 'text-center' : ''
          }`}
      >
        {name}
      </label>
      <select
        className={`select border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none 
          ${optioncolor ? optioncolor[0] == '#' ? "text-[" + optioncolor + "]" : "text-" + optioncolor : ""}
          ${option_direction === 'left' ? 'text-left' :
            option_direction === 'right' ? 'text-right' :
            option_direction === 'center' ? 'text-center' : ''
          }`}>
        <option className={placeholdercolor ? placeholdercolor[0] == '#' ? `text-[${placeholdercolor}]` : 'text-' + placeholdercolor : ''} disabled selected>{placeholder}</option>
        {options.map((option) => (
          <option key={option} id={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default NormalDropdownInput;
