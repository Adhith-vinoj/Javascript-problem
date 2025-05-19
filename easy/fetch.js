

let fetchs =async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    console.log(data)
  }
  
  fetchs()



  function callMe() {
    console.log('Pizza is ready! 🍕');
  }
  
  function orderPizza(callback) {
    console.log('Ordering pizza...');
    // After some time...
    callback(); // "calling you"
  }
  
  orderPizza(callMe);
  
  
  
  function greetMorning(name) {
    console.log('Good morning, ' + name + '!');
  }
  
  function greetEvening(name) {
    console.log('Good evening, ' + name + '!');
  }
  
  function greet(name, callback) {
    callback(name);
  }
  
  greet('Alice', greetMorning); 
  greet('Bob', greetEvening);    
  
  
  
  
  
  
  
  function call(name){
    console.log("hello" + name)
  }
  
  function set(name){
    console.log("hai how are you" + ' '+ name)
  }
  function sell(name, callback){
    callback(name)
  }
  
  sell("Adhith", call)
  sell("Adhith", set)
  
  