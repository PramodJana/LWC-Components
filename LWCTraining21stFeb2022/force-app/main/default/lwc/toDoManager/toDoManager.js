import { LightningElement, track } from 'lwc';

export default class ToDoManager extends LightningElement {
    @track time = "8:15 PM";
    @track greeting = "Good Evening";
    @track todos = [];
     connectedCallback(){
         this.getTime();
         this.populateTodos();

         setInterval(()=>{
             this.getTime();
            // console.log(this.getTime());
         },1000*60);
     }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
        this.time=`${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }

    getHour(hour){
        return hour === 0 ? 12 :hour>12? (hour-12):hour;
    }

    getMidDay(hour){
        return hour >=12 ? "PM" :"AM";
    }

    getDoubleDigit(digit){
        return digit<10? "0"+digit:digit;
    }

    setGreeting(hour){
        if(hour<12)
        {
            this.greeting = "Good Morning";
        }
        else if(hour>=12 && hour<12)
        {
            this.greeting = "Good Afternoon";
        }
        else
        {
            this.greeting = "Good Evening";
        }
    }

    addToDoHandler(){
        const inputBox = this.template.querySelector("lightning-input");
        console.log('current value ',inputBox.value);

        const todo = {
            todoId : this.todos.length,
            todoName : inputBox.value,
            done : false,
            todoDate : new Date(),
        }

        this.todos.push(todo);
        inputBox.value="";
    }

    get upcomingTasks(){
        return this.todos && this.todos.length ? this.todos.filter(todo => !todo.done) : [];
    }

    get completedTasks(){
        return this.todos && this.todos.length ? this.todos.filter(todo => todo.done) : [];
    }

    populateTodos(){
        const todos = [
            {
                todoId :0,
                todoName : "Feed the dog",
                done : false,
                todoDate : new Date(),
            },
            {
                todoId :1,
                todoName : "Wash the car",
                done : false,
                todoDate : new Date(),
            },
            {
                todoId :0,
                todoName : "Send Email to manager",
                done : true,
                todoDate : new Date(),
            },
        ];
        this.todos=todos;
    }

}