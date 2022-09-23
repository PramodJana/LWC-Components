import { api, LightningElement } from 'lwc';

export default class MyComponent2 extends LightningElement {
    @api firstName2 = "Pramod Jana";
    @api strtitle = "Welcome in Salesforce";
    @api showImage = false;
    @api imageUrl = 'https://developer.salesforce.com/resources2/images/salesforce-header-logo.png';
}