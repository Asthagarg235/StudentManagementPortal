import StackAvtar from "./StackAvtar";

import "../../index.css";


const xyz = {
    title : "Stacking Avatar",
    component : StackAvtar ,
    
    
}
    
const Template =  (args : any) => <StackAvtar {...args} ></StackAvtar>

export const Main: any = Template.bind({});
Main.args = {

  

};



export default xyz;

