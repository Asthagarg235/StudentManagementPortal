import Input from "./Input";
import "../../index.css";

export default {
    title: "Input",
    component: Input,
};

const Template = (args: any) => <Input {...args}></Input>;

export const main : any = Template.bind({});

main.args = {};