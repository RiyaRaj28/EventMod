// Events Module
// Node.js has built in module called Events.
// wheere you can create, fire and listen for your own events.Events

// example 1 - Registering for the event to be fired only one time using once 
// example 2 - Create an event emitter instance and register a couple of callbacks 
// example 3 - registering for the event with callback parameters


// const EventEmitter //here the first letter is capital in the variable
//1

const EventEmitter = require("events");

const event = new EventEmitter(); 

event.on('sayMyName', () => {           //defined what would happen when event is fired
    console.log("your name is vinod");
});


// Emitter objects emit named events that cause preiously registered listeners to be called . 
// So an emitter object has two main features -  

// 1. emitting name events  
// 2. registring and unregistering listener functions.



//2. Multiple callbacks

event.on('sayMyName', () => {           //defined what would happen when event is fired
    console.log("your name is vinita");
});


event.on('sayMyName', () => {           //defined what would happen when event is fired
    console.log("your name is vinay");
});

event.emit("sayMyName");  //fired the event 

//3. registering for the event 

event.on('checkPage', (sc, msg) => {      //sc: status code              function defined
    console.log(`status code is ${sc} and the page is ${msg}`);
}); 
event.emit("checkPage", 200, "OK");   //function call




