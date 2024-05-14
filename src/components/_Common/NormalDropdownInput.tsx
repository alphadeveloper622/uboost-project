import { resolveElementWidth, resolveTextColor, resolveTextDirection } from "./Common Types";

const NormalDropdownInput = ({
  id,
  name,
  placeholder,
  options,
  name_color = "black",
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
  name_color?: string;
  placeholdercolor?: string;
  optioncolor?: string;
  width?: string;
  option_direction?: string;
  name_direction?: string;
}) => {
  return (
    <div id={id} className={`px-2 mb-8 ${resolveElementWidth({width:width})}`}>
      <label
        htmlFor="name"
        className={`mb-3 block text-sm font-medium 
          ${resolveTextColor({ color: name_color })}
          ${resolveTextDirection({ direction: name_direction })}`}>
        {name}
      </label>
      <select
        className={`select border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none 
        ${resolveTextColor({ color: optioncolor })}
        ${resolveTextDirection({ direction: option_direction })}`}>
        <option className={resolveTextColor({color: placeholdercolor})} disabled selected>{placeholder}</option>
        {options.map((option) => (
          <option key={option} id={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default NormalDropdownInput;
