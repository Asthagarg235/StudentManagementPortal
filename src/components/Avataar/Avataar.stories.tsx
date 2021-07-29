import Avaatar from "./Avaatar";
import "../../index.css";

export default {
    title: "Avataar",
    component: Avaatar
};

const Template = (args: any) => <Avaatar {...args}></Avaatar>;

export const main : any = Template.bind({});

main.args = {
};