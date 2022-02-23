import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    //by default private property
    //childProperty = 5;

    //now public property
    @api childProperty;

    @api printChildProperty(){
        alert('Value of childProperty : '+ this.childProperty);
    }

    handleClick(){
        //childevent is the name of the event. This name must be always in lowercase
        // let custEvent = new CustomEvent('childevent',{detail:123});
        // let custEvent = new CustomEvent('childevent',{detail:{abc:789}});
        let custEvent = new CustomEvent('childevent',
                                                     {detail:{produsts:['Lux','Suger','Jaggery']},
                                                      bubbles:true,
                                                    composed:true});
        this.dispatchEvent(custEvent);
    }
}