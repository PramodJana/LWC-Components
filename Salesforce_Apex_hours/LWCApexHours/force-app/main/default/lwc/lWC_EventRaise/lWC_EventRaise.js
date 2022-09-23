import { LightningElement } from 'lwc';

export default class LWC_EventRaise extends LightningElement {
    raiseEvent(event){
        let txtInput = this.template.querySelector(".txtInput");
        const v = txtInput.value;
        const textChangeEvent = new CustomEvent('txtChange',{
            detail : {v},
        });
   
   //fire event
   this.dispatchEvent(textChangeEvent);
    }
    
}