import { api, LightningElement } from 'lwc';

export default class AssistedChildOne extends LightningElement {
    value = '';
    @api radioSelected = '';
   

    get options() {
        return [
            { label: '43', value: '43' },
            { label: '55', value: '55' },
            { label: '65', value: '65' },
        ];
    }
  
    handleRadioClick(event){
        this.radioSelected = event.target.value;

        this.dispatchEvent(new CustomEvent('radioclick',
        {
            detail: this.radioSelected
        }));
    }
}