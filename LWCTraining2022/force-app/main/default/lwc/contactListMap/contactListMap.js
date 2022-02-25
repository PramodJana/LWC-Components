import { LightningElement, track, wire } from 'lwc';

import getLocations from '@salesforce/apex/ContactController.getLocations';

export default class ContactListMap extends LightningElement {
    @track mapMarker = [];

    @wire(getLocations)
    wiredGetLocations({data,error}){
        this.mapMarker = []; //Flusing of Data is needed here else the map component will not be re-rendered and no pointers will be shown
        if(data){
            data.forEach(contact=>{
                this.mapMarker.push({
                    location : {
                        City: contact.MailingCity,
                        Country:contact.MailingCountry,
                    },
                    title: contact.MailingCity+' :: '+contact.MailingCountry,
                })
            })
        }
    };
}