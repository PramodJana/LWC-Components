import { LightningElement, track } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';

const DELAY =350;
export default class SearchPage extends LightningElement {
    @track accounts;
    @track error;

    handleKeyChange(event){
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;

        this.delayTimeout = setInterval(()=>{
            findAccounts({searchKey})
            .then(result=>{
                this.accounts = result;
                this.error = undefined;
            })
            .catch(error=>{
                this.error = error;
                this.accounts= undefined;
            });
        }, DELAY);
    }
}