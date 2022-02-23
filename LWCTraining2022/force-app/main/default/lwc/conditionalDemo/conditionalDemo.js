import { LightningElement } from 'lwc';

export default class ConditionalDemo extends LightningElement {
    show = true;
    handleChange(){
        this.show = !this.show;
    }
}