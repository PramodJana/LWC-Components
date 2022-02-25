import { api, LightningElement } from 'lwc';

export default class RecordFormDemo extends LightningElement {
    @api recordId;

    fields = ['Name','Title','Email','Phone'];
}