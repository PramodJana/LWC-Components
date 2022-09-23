import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {
    contactObject = CONTACT_OBJECT;
    myFields = [FIRST_NAME,LAST_NAME,EMAIL];

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title:"Contact created",
            message: "Record ID: "+event.detail.id,
            variant:"success"
        });
        this.dispatchEvent(toastEvent);
    }
}