import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';

export default class OmniScriptRemoteCall extends OmniscriptBaseMixin(LightningElement) {

    handleFetchAccountIndustry(event){
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
        this.omniRemoteCall(params,true)
        .then(response=>{
            console.log(response,'response');
        })
        .catch(error=>{
            console.log(error,'error');
        });
    }


    handleCallIntegrationProcedure(event){
        console.log("Sussesfully Clicked Call Integration Procedure");
        const input ={
        };
        const options = {
            chainable : true,
        };
        const params ={
            input : input,
            sClassName : 'vlocity_cmt.IntegrationProcedureService',
            sMethodName :'LWC_Test',
            options :options,
        };
        this.omniRemoteCall(params, true).then(response=>{
            console.log(response, 'response');
        })
        .catch(error=>{
            console.log(error,'error');
        });
    }

    handleCallApexClass(event){
        console.log("Sussesfully Clicked Call Apex Class");
        const options = {
        };
        const input = {};
        const params ={
            input : input,
            sClassName : 'FetchAccountData',
            sMethodName :'fetchData',
            options :options,
        };
        this.omniRemoteCall(params, true).then(response=>{
            window.console.log(response);
        })
        .catch(error=>{
            window.console.log(error,'error');
        });
    }
}