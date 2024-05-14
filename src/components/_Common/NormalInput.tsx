import { resolveElementWidth, resolveTextColor, resolveTextDirection } from "./Common Types";

const NormalInput = ({
  id,
  name,
  placeholder,
  name_color = "black",
  inputcolor = "black",
  width = "full",
  name_direction = "left",
  input_direction = "left",
}: {
  id?: string;
  name: string;
  placeholder: string;
  name_color?: string;
  inputcolor?: string;
  width?: string;
  name_direction?: string;
  input_direction?: string;
}) => {
  return (
    <div id={id} className={`px-2 mb-8 justify-center ${resolveElementWidth({width:width})}`}>
      <label
        htmlFor="name"
        className={`mb-3 block text-sm font-medium 
          ${resolveTextColor({ color: name_color })}
          ${resolveTextDirection({ direction: name_direction })}`}>
        {name}
      </label>
      <input
        id="inputvalue"
        type="text"
        placeholder={placeholder}
        className={`border-stroke w-full rounded-sm border bg-ugary px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none
        ${resolveTextColor({ color: inputcolor })}
        ${resolveTextDirection({ direction: input_direction })}`}
      />
    </div>
  );
};

export default NormalInput;
