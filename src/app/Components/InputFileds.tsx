import React from "react";
interface Iprop {
  label: string;
  type?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string; // Ensure to get the value prop
  error?: string; // Optional error message
}

const InputFileds: React.FC<Iprop> = ({
  label,
  type,
  name,
  onChange,
  onBlur
,value}) => {
  return (
    <div>
      <div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur} // Handle blur event for validation
           value={value}
           
            className="block py-2.5  px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};

export default InputFileds;
