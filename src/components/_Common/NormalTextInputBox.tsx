import { resolveBGColor, resolveElementWidth, resolveTextColor, resolveTextDirection } from "./Common Types";

type NormalTextInputBoxProps = {
  id: string;
  name: string;
  placeholder: string;
  row?: number;
  name_color?: string;
  textarea_color?: string;
  width?: string;
  name_direction?: string;
  textarea_direction?: string;
  textarea_bg_color?:string;
};

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
  textarea_bg_color = 'white',
}: NormalTextInputBoxProps) => {
  return (
    <div id={id} className={`px-2 py-4 ${resolveElementWidth({width:width})}`}>
      <label
        htmlFor={name} // Ensure htmlFor matches the expected id or name of the input element
        className={`mb-3 block text-md font-medium 
          ${resolveTextColor({ color: name_color })}
          ${resolveTextDirection({ direction: name_direction })}`}>
        
        {name}
      </label>
      <textarea
        id="text-input-box"
        rows={row}
        placeholder={placeholder}
        className={`border-stroke w-full resize-none rounded-sm border px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:shadow-two dark:focus:border-primary dark:focus:shadow-none
        ${resolveBGColor({ color: textarea_color })}
        ${resolveTextColor({ color: textarea_color })}
        ${resolveTextDirection({ direction: textarea_direction })}`}>
        </textarea>
    </div>
  );
};

export default NormalTextInputBox;
