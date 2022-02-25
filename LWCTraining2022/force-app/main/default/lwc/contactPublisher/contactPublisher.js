import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

import CONTACT_SELECTED_CHANNEL from '@salesforce/messageChannel/contactSelected__c';
import {publish, MessageContext} from 'lightning/messageService';

export default class ContactPublisher extends LightningElement {
    selectedContactId;

    @wire(getContacts)
    contacts; //contacts.data refers to list of contacts

    @wire(MessageContext)
    context;                    //property which holds info about the components going to publish the message

    handleContactSelected(event)
    {
        // alert('contactPublisher says : contactselected event received from contactTile');
        // alert('contactPublisher says : selected contact id is.... ' + event.detail.contactId);

        this.selectedContactId = event.detail.contactId;

        let message = {
            contactRecordId: this.selectedContactId,
        };

        publish(this.context, CONTACT_SELECTED_CHANNEL, message);
    }
}