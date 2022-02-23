import { LightningElement } from 'lwc';

export default class ForEachDemo extends LightningElement {
    // products = ['Lux', 'Santoor','Lifeboy','Dove'];

    //Js Object
    products = [
        {pno :1 , pname: 'test1' , pprice:50},
        {pno :1 , pname: 'test2' , pprice:250},
        {pno :1 , pname: 'test3' , pprice:530},
    ];
}