import { FC , memo, useEffect } from "react";
interface Props{
}
const AuthHero: React.FC<Props> = (props) => {
    console.log("AuthHero rendering");
    useEffect(() => {
        console.log("AuthHero rendering for the first time")
    }, []);
  return (
    <div className="h-screen w-1/2 bg-black text-white">
        Logo will go here.
    </div>
);
};

AuthHero.defaultProps = {
}

export default memo(AuthHero);