import Cards from "./Cards";
import "../../index.css";

export default {
    title: "Cards",
    component: Cards
};

const Template = (args: any) => <Cards {...args}></Cards>;

export const main : any = Template.bind({});

main.args = {
    imageLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
  userName: "Interview Page",
  description: "This is mutually created page",
  creator: "User Three",
};