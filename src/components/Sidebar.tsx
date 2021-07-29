import { memo } from "react";
import { logout } from "../api";

import Button from "./Button/Button";
interface Props{
}
const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className = "h-screen w-80 bg-gray-200 text-black">
        This is side bar     
        <Button 
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}>Logout</Button>    
    </div>
);
};

Sidebar.defaultProps = {
}

export default memo(Sidebar);