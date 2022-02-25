import { LightningElement, wire } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

import CONTACT_SELECTED_CHANNEL from '@salesforce/messageChannel/contactSelected__c';
import {subscribe, unsubscribe, MessageContext} from 'lightning/messageService';

import { getRecord,deleteRecord } from 'lightning/uiRecordApi';

// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { showToast } from 'c/utility';

import FIELD_NAME from '@salesforce/schema/Contact.Name';
import FIELD_TITLE from '@salesforce/schema/Contact.Title';
import FIELD_EMAIL from '@salesforce/schema/Contact.Email';
import FIELD_PHONE  from '@salesforce/schema/Contact.Phone';


const FIELDS = [FIELD_NAME, FIELD_TITLE, FIELD_PHONE, FIELD_EMAIL];

export default class ContactSubscriber extends NavigationMixin(LightningElement) {
    subscription;

    recordId;

    @wire(getRecord,{recordId:'$recordId',fields:FIELDS})
    contact;


    @wire(MessageContext)
    context;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    disconnectedCallback(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    subscribeToMessageChannel(){
        this.subscription = subscribe(this.context,CONTACT_SELECTED_CHANNEL,(receivedMessage)=>{
            this.handleMessage(receivedMessage);
        });
    }

    handleMessage(message){
        // alert('contactSubscriber says : published message received');
        // alert('contactSubscriber says : Received selected contact id : ' + message.contactRecordId);
        this.recordId = message.contactRecordId;
    }

    editRecord(){
        let pageReference = {type:'standard__recordPage',
                            attributes:{
                                recordId: this.recordId,
                                objectApiName: 'Contact',
                                actionName: 'edit'
                            }
                        }
        this[NavigationMixin.Navigate](pageReference);
    }

    deleteContact(){
        deleteRecord(this.recordId)
        .then(()=>{
            // alert('Record deleted Successfully');
            // const event = new ShowToastEvent({
            //     title: 'Delete Record',
            //     message: 'Record Has Been Successfully Deleted',
            //     mode: "dismissible" ,
            //     variant: 'Success'
            // });
            // this.dispatchEvent(event);
            showToast(this,'Delete Record','Record Has Been Successfully Deleted','Success',"dismissible");

        })
        .catch(()=>{
            // alert('Record deletion failed');
            showToast(this,'Delete Record','Record Has not been Deleted','error',"dismissible");
        });
    }
    
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