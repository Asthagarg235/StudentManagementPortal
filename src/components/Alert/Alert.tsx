import React from "react";
import { useState } from "react";
interface Props{
    theme: "primary" | "Error" | "Success";
}
const Alert: React.FC<Props> = ({theme}) => {
    
    function f(){
        var themeClasses = "";
        if(theme=="primary"){
            themeClasses = "text-blue-600 bg-blue-100";
        }
        else if(theme == "Error"){
            themeClasses="text-red-600 bg-red-100";
        }
        else{
            themeClasses="text-green-600 bg-green-100";
        }
        return themeClasses;
    }
    const [open, setOpen] = useState(true);
  return (
      <div className={(open ? "" : "hidden")}>
    <div className={"flex flex-row w-full border-0 pb-2 pt-2 pl-5 text-sm ml-10 rounded-md " + f()} role="alert">
        <strong>{theme + "! "}</strong>
            Lorem Ipsum is simply dummy text of the printing. 
        <button onClick={() => setOpen(!open)} type="button" className="close justify-end self-center" data-dismiss="alert" aria-label="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close flex-end " data-dismiss="alert">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    </div>
);
};

Alert.defaultProps = {
}

export default Alert;