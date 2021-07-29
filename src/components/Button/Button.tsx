import { ButtonHTMLAttributes } from "react";
import { memo } from "react";
import { IconType } from "react-icons";
import { HiLockClosed, HiLogin, HiMoon } from "react-icons/hi";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: "primary" | "secondary";
    children: string;
    Icon?: IconType;
    
}
const Button: React.FC<Props> = ({children, className, Icon, theme, ...rest}) => {
    const themeClasses = theme === "primary"? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500" : "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500";
    const iconThemeClasses = theme === "primary"? "text-indigo-500 group-hover:text-indigo-400" : "text-gray-500 group-hover:text-gray-400";
  return (
    <button 
    {...rest}
   className={"group relative w-32 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 " + themeClasses + " " + className}
     >
   <span className={"absolute left-0 inset-y-0 flex items-center pl-3" + iconThemeClasses}>
     <HiLockClosed className="h-4 w-4 " aria-hidden="true" />
   </span>
   {children}
    </button>
);
};

Button.defaultProps = {
    theme: "primary"

}

export default memo(Button);