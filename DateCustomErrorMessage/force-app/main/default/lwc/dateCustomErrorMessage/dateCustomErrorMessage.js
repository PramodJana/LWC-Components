import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';
export default class DateCustomErrorMessage extends OmniscriptBaseMixin(LightningElement) {

    handleDateChange(event)
    {
        var inputcmp = this.template.querySelector('.test-date');
        var value = inputcmp.value;
        if(value=='')
        {
            inputcmp.setCustomValidity('You are supposed to give some value in this field, this field cannot be empty');
        }
        else
        {
            inputcmp.setCustomValidity('');
        }
        inputcmp.reportValidity();
    }
}