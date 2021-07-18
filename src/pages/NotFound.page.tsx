import { FC , memo } from "react";
interface Props{
}
const NotFound: React.FC<Props> = (props) => {
  return (
    <div className="w-screen h-screen bg-gray-400">
        Sorry the page not found
    </div>
);
};

NotFound.defaultProps = {
}

export default memo(NotFound);