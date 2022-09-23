import { LightningElement, track } from 'lwc';

export default class GreetTextLWC extends LightningElement {
    @track greetings = 'Apex Hours';

    greetUser(event){
        let txtInput = this.template.querySelector(".txtInput");
        this.greetings = txtInput.value;
    }
}