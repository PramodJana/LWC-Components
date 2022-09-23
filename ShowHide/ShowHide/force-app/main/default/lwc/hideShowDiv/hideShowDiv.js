import { LightningElement } from 'lwc';

export default class HideShowDiv extends LightningElement {
    showCart = false;

    handleShowCart() {
        this.showCart = !this.showCart;
        const cartDiv = this.template.querySelector(`[data-name=cartBody]`);
        const canvasDiv = this.template.querySelector(`[data-name=canvas]`);
        if(this.showCart)
        {
            console.log('when show cart is true');
            cartDiv.classList.add('slds-size_1-of-3');
            canvasDiv.classList.add('slds-size_2-of-3');
            cartDiv.classList.add('slds-show'); 
            cartDiv.classList.remove('slds-hide');
        }
        else
        {
            console.log('when show cart is false')
            cartDiv.classList.remove('slds-size_1-of-3');
            canvasDiv.classList.remove('slds-size_2-of-3');
            cartDiv.classList.add('slds-hide');
            cartDiv.classList.remove('slds-show'); 
        }
    }
}