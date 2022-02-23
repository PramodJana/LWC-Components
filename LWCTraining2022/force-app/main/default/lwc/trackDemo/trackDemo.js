import { LightningElement, track } from 'lwc';

export default class TrackDemo extends LightningElement {
    //products property is Reactive
    @track products = ['Colgate','Pepsodent','Dandkanti'];

    addProduct(){
        //this.products = ['Lux','Lifeboy','Pears'];
        this.products.push('Vicco');
    }
}