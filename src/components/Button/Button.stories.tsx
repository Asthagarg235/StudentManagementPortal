import Button from "./Button";
import "../../index.css";

const xyz = {
    title: "My awesome button",
    component: Button,
    argTypes: {
        theme:{
            control: {type: "select"}
        },
    },
};

const Template = (args: any) => <Button {...args} theme="primary">sign in</Button>;

export const main : any = Template.bind({});
main.args = {
    children: "Sign in",
    type: "submit",
    className: "",
    disabled: "false",
};

export default xyz;