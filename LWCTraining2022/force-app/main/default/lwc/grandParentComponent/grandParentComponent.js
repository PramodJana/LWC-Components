import { LightningElement } from 'lwc';

export default class GrandParentComponent extends LightningElement {
    handleChildEvent(event){
        alert(`grandParentComponent: ChildComponent Custom Event Received`);
        alert('grandParentComp : data received from the child'+ event.detail.produsts);
    }
}