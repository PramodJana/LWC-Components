import { LightningElement, wire,track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ApexFunctionDemo extends LightningElement {
    @track contacts=[];

    @wire(getContacts)
    wiredGetContacts({data,error}){
        if(data){
                // this.contacts = data;
                data.forEach((contact) =>{
                    this.contacts.push({
                        cname : contact.Name,
                        ctitle: contact.Title,
                        cemail: contact.Email,
                        cid: contact.Id,
                        cphone: contact.Phone,
                    });
                });
                };
        }
       
}