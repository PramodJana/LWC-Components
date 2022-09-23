import { api, LightningElement } from 'lwc';

export default class ButtonDiv extends LightningElement {
    @api label;
    @api icon;

    handleButtonDiv(){
        this.dispatchEvent(new CustomEvent(buttonclick,{
            bubbles: true
        }));
    }
}