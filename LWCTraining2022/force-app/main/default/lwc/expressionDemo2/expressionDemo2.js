import { LightningElement } from 'lwc';

export default class ExpressionDemo2 extends LightningElement {
    firstName = 'Pramod';
    lastName = 'Jana'
    // fullName = this.firstName + " " + this.lastName;

    get fullName(){
        return this.firstName+ ' '+ this.lastName;
    }
    handleChange(event)
    {
        let targetName = event.target.name;
        if(targetName === 'fName')
        {
            this.firstName = event.target.value;
        }
        else{
            this.lastName = event.target.value;
        }
    }
}