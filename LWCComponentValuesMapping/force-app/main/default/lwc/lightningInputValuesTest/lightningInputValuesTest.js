import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';

const STATE_NAME = 'CustomLWC2';

export default class LightningInputValuesTest extends OmniscriptBaseMixin(LightningElement) {
    firstInput;
    secondInput;

    connectedCallBack(){
        this.firstInput = 'Not Changed';
        if(this.omniGetSaveState(STATE_NAME)?.state !=null)
        {
            this.firstInput = 'changed';
        }
    }

    disconnectedCallback(){
        this.omniSaveState({
            state:{
                firstInput : this.firstInput,
            }
        }, STATE_NAME, true);
    }

    handleInputOne(event){
        this.firstInput = event.detail.value;
        this.omniUpdateDataJson({'firstInput':this.firstInput});
    }

    handleInputTwo(event){
        this.secondInput = event.detail.value;
        this.omniUpdateDataJson({'secondInput':this.secondInput});
    }
}