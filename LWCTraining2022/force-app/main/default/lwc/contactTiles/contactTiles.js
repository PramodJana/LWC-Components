import { api, LightningElement } from 'lwc';

export default class ContactTiles extends LightningElement {
    @api contacts;

    handleContactSelected(event){
        // alert('contactTiles says : contactselected event received from contactTile');
        // alert('contactTiles says : selected contact id is.... ' + event.detail.contactId);
    }
}