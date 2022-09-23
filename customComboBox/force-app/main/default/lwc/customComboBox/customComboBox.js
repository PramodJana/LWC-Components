import { LightningElement, api, track} from 'lwc';
import {OmniscriptBaseMixin} from 'vlocity_cmt/omniscriptBaseMixin';
export default class CustomComboBox extends OmniscriptBaseMixin(LightningElement) {

// ***********************************************************************************************************
// LWC LIFECYCLE
// ***********************************************************************************************************

connectedCallback(){
    const input = {};
    const options = {
        chainable : true,
    };

    const params={
        input : input,
        sClassName: 'vlocity_cmt.IntegrationProcedureService',
        sMethodName : 'LWC_AccountIndustry',
        options : options,
    };

    let optionvalues = [];
    this.omniRemoteCall(params, true).then(response => {
        console.log('response',response);
        const gotAccountIndustry = response.result.IPResult.AccountIndustry;
        gotAccountIndustry.forEach(element => {
            optionvalues.push({
                label: element,
                value: element
            })
        });
        this.options = optionvalues;
    })
    .catch(error => {
        console.log('error',error);
    });

}

    value;
    options;
    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    handleChange(event) {
        this.value = event.detail.value;
    }
}