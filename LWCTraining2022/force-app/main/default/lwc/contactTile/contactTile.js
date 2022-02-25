import { LightningElement,api } from 'lwc';

export default class ContactTile extends LightningElement {
    @api contact;
    handleContactClick(){
        let custEvent = new CustomEvent('contactselected',{
            detail: {contactId : this.contact.Id},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(custEvent);
    }
}