import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    //Private and Reactive Property
    parentProperty = 8;

    handleChange(event){
       // this.parentProperty = event.detail.value;
       this.parentProperty = event.target.value;
    }

    handleClick(){
        let childComponentReference = this.template.querySelector('c-child-component');
        childComponentReference.printChildProperty();
    }
    handleChildEvent(event){
        alert(`parentComponent: ChildComponent Custom Event Received`);
        alert('parentComp : data received from the child'+ event.detail.produsts);
    }
}