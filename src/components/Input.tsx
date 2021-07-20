import { FC, InputHTMLAttributes, memo } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement>{
    id: string;
    touched?: boolean;
    error?: string;
}
const Input: React.FC<Props> = ({touched, error, id, className, placeholder, ...rest}) => {
  return (
    <>
            <div>
              {id && placeholder && (
              <label htmlFor= {id} className="sr-only">
                {placeholder}
              </label>
              )}
              <input
                id={id}
                {...rest}
                className={"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" + className}
                placeholder={placeholder}
              />
            </div>
            {touched && <div className="text-red-500 text-xs">{error}</div>}
    </>
);
};

Input.defaultProps = {
}

export default memo(Input);