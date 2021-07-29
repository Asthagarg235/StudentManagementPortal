import Alert from "./Alert";
import "../../index.css";

export default {
    title: "Alert",
    component: Alert,
    argTypes: {
        theme:{
            control: {type: "select"}
        },
    },
};

const Template = (args: any) => <Alert {...args}></Alert>;

export const main : any = Template.bind({});

main.args = {};