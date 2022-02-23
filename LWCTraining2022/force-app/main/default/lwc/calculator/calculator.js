import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    firstNumber = 0;
    secondNumber = 0;
    result = 0;

    handleChange(event){
        let targetName = event.target.name;
        if(targetName === 'fno'){
            this.firstNumber = parseFloat(event.target.value);
        }
        else
        {
            this.secondNumber = parseFloat(event.target.value);
        }
    }
    add(){
        this.result = 'Addition is.... ' + (this.firstNumber + this.secondNumber);
    }
    subtract(){
        if(this.firstNumber>this.secondNumber){
            this.result = "Difference is... "+(this.firstNumber - this.secondNumber);
        }
        else
        {this.result = "Difference is... "+(this.secondNumber - this.firstNumber);
        }
    }
}