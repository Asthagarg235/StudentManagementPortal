import ProgressBar from "./ProgressBar";
import "../../index.css";

export default {
    title: "Progress Bar",
    component: ProgressBar,
};

const Template = (args: any) => <ProgressBar {...args}></ProgressBar>;

export const main : any = Template.bind({});

main.args = {};