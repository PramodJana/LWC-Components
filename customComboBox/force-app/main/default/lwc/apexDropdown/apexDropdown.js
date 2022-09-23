import { LightningElement, track } from 'lwc';
import {OmniscriptBaseMixin} from 'vlocity_cmt/omniscriptBaseMixin';

export default class ApexDropdown extends OmniscriptBaseMixin(LightningElement) {

    AccountIndustryValue;
    SuccessResponse;

    @track AccountIndustryOptions;
   
    handleAccountIndustryChange(event){
        this.AccountIndustryValue = event.detail.value;
    }

    handleFetchAccountIndustry(){
        const input={

        };
        const options = {
            chainable : true,
        };
        const params = {
            input : input,
            sClassName : 'vlocity_cmt.IntegrationProcedureService',
            sMethodName : 'LWC_AccountIndustry',
            options : options,
        };
        let optionvalues = [];
        this.omniRemoteCall(params,true)
        .then(response=>{
            this.SuccessResponse=true;
            const gotAccountIndustry = response.result.IPResult.AccountIndustry;
            gotAccountIndustry.forEach(element => {
                optionvalues.push({
                    label: element,
                    value: element
                })
            });
            this.AccountIndustryOptions = optionvalues;
        })
        .catch(error=>{
           this.SuccessResponse=false;
        });
    }

    AccountIndustryChange(event){
        var input = this.template.querySelector('.account-industry');
        var accIndustry = input.value;
        this.AccountIndustryValue = accIndustry;
        this.handleFetchAccountIndustry();
    }
}