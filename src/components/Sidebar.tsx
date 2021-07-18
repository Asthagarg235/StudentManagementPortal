import { FC , memo } from "react";
interface Props{
}
const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className = "h-screen w-80 bg-gray-100 text-black">
        This is side bar         
    </div>
);
};

Sidebar.defaultProps = {
}

export default memo(Sidebar);