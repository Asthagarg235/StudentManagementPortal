import {memo} from "react";
interface Props{
}
const ProgressBar: React.FC<Props> = () => {
    const completed = 1/2;
  return (
    <div className={"bg-gray-200 h-5 w-" + {completed} + " rounded-full"}>
        <div className={"bg-blue-400 w-1/2 h-5 rounded-full"}>
    
        </div>
    </div>
);
};

ProgressBar.defaultProps = {
}

export default memo(ProgressBar);