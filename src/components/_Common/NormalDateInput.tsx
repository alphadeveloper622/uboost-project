import { DateInput } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import CalendarIcon from '@/components/_Common/CalendarIcon';
import { resolveElementWidth, resolveTextColor, resolveTextDirection } from "./Common Types";

function isValidDate(dateStr: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
}

const NormalDateInput = ({
  id,
  name,
  defaultDate = "2024-04-04",
  placeholder = "2024-04-04",
  name_color = "black",
  inputcolor = "black",
  width = "full",
  name_direction = "left",
  input_direction = "left",
}: {
  id?: string;
  name: string;
  defaultDate: string;
  placeholder: string,
  name_color?: string;
  inputcolor?: string;
  width?: string;
  name_direction?: string;
  input_direction?: string;
}) => {
  const safeDate = isValidDate(defaultDate) ? defaultDate : "2024-04-04";
  return (
    <div id={id} className={`px-2 mb-8 justify-center ${resolveElementWidth({ width:width })}`}>
      <label
        htmlFor={name}
        className={`mb-3 block text-sm font-medium 
        ${resolveTextColor({ color:name_color })} 
        ${resolveTextDirection({direction:name_direction})}`}
      >
        {name}
      </label>
      <DateInput
        className={`border-stroke w-full rounded-sm border bg-ugary my-1 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none
        ${resolveTextColor({ color:inputcolor })} 
        ${resolveTextDirection({direction:input_direction})}`}
        style={{ backgroundColor: 'blue' }}
        label=""
        defaultValue={parseDate(safeDate)}
        labelPlacement="outside"
        startContent={
          <CalendarIcon className="text-gray-600 text-3xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
};

export default NormalDateInput;