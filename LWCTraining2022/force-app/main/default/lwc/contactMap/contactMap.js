import { LightningElement,api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import FIELD_MAILING_CITY from '@salesforce/schema/Contact.MailingCity';
import FIELD_MAILING_COUNTRY from '@salesforce/schema/Contact.MailingCountry';

const FIELDS = [FIELD_MAILING_CITY,FIELD_MAILING_COUNTRY];

export default class contactMap extends LightningElement {

    mapMarker ;

    @api recordId;

    @wire(getRecord,{recordId:'$recordId',fields :FIELDS})
    wiredGetRecord({data,error}){
        if(data){
            let mailingcity = data.fields.MailingCity.value;
            let mailingcountry = data.fields.MailingCountry.value;
            this.mapMarker = [{
                location :{
                    City :mailingcity,
                    Country :mailingcountry},
                    title :mailingcity +' :: '+ mailingcountry
               
            }];
        }
    }}

