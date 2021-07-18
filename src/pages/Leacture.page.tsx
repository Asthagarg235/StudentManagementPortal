import { FC , memo } from "react";
import { useParams } from "react-router-dom";
interface Props{}
interface RouteParams {
    leactureNumber: string;
    batchNumber: string;
}

const Leacture: React.FC<Props> = (props) => {
    const { leactureNumber, batchNumber } = useParams<RouteParams>();
  return (
    <div>
        Showing date of leacture #{leactureNumber} of batch #{batchNumber}
    </div>
);
};

Leacture.defaultProps = {
}

export default Leacture;