import Button from "./Button";
import "../../index.css";
import * as icons from "react-icons/hi";

const AllIcons = {undefined, ...icons}

export default {
    title: "My awesome button",
    component: Button,
    argTypes: {
        theme:{
            control: {type: "select"}
        },
        Icon:{
            options: Object.keys(AllIcons),
            
            control: {
                type: "select",
            },
        },
    },
};

const Template = (args: any) => <Button {...args} theme="primary">sign in</Button>;

export const main : any = Template.bind({});
main.args = {
    children: "Sign in",
    type: "submit",
    className: "",
    disabled: false,
};