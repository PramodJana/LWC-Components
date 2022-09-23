import { api, LightningElement } from 'lwc';

export default class AssistedOfferStep1 extends LightningElement {
    @api radiodata="Not Selected";
    handleRadioClick(event){
        this.radiodata = event.detail;
    }
}