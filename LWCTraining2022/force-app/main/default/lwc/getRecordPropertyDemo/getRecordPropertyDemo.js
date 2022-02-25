import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = ['Contact.Name','Contact.Title','Contact.Email','Contact.Phone'];

export default class GetRecordPropertyDemo extends LightningElement {
    @api recordId;

    // @wire(getRecord,{recordId:'0032w00000JhCBNAA3', fields: FIELDS })
    @wire(getRecord,{recordId:'$recordId', fields: FIELDS })
    contact;

    get name(){
        return this.contact.data.fields.Name.value;
    }

    get title(){
        return this.contact.data.fields.Title.value;
    }

    get email(){
        return this.contact.data.fields.Email.value;
    }

    get phone(){
        return this.contact.data.fields.Phone.value;
    }
}