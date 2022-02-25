import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactPublisher extends LightningElement {
    @wire(getContacts)
    contacts; //contacts.data refers to list of contacts
}