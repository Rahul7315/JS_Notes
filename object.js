//Object
//In js object has various values & methods.
// It can be represent by the key-> value pair 

//This is the object literal
const car =  {
    ename : "Rahul",
    age: "20"
}

console.log(car.ename);
console.log(car.age);

//This method using instance

const car1 = new Object();
car1.name = "Rahul"
car1.age = 22

console.log(car1.name , car1.age);


//using constructor

function car3(emp,age){
    this.emp = emp;
    this.age =  age;
}
c = new car3("Rahul",22);
console.log(c.emp,c.age);

//we use constructor method, because it initized before the other methods
//Array: Js array is an object that represent same collection of similar type of value
//Arrays are mutable so we can update the value of array

//using literal method:

var empnames = ["Rahul","Ram","Mohan"];
for(var i=0; i < empnames.length; i++){
    console.log(empnames[i]);
}

//using new instance

const empdetails = new Array();
empdetails[0] = "worker"
empdetails[1] = "manager"
empdetails[2] = "labor"

for(var i = 0; i < empdetails.length; i++)
{
    console.log(empdetails[i]);
}

//using Constructor method

const empsalary = new Array(10000, 2000, 5000)
for(i = 0; i < empsalary.length; i++){
    console.log(empsalary[i]);
}

//methods & properties 
//toString: Covert to string
//join: join all the array values
//pop: remove last method value
//push: add new array
//shift: remove value from start
//unshift: add value at start
//concat: concat array
//sort: sort the array assending & decending order (use compare function(make manaully))
//reverse: reverse the array
//splice & slice: array.splice(start position, no of element to remove, add new values)
//
const num = [1,2,3,4,5]

//convert array to string
var b = num.toString();
console.log(b);
// push & pop
var c = num.pop();
console.log(c);
var d = num.push(90);
console.log(num,d);
var e = num.join('and');
console.log(e);

//shift & unshift
var x = num.shift();
console.log(x,num);
var x1 = num.unshift(40);
console.log(x1, num);





//string is colletion of characters
//string is immuteable so we can not change it. 
// var name = string
//string.length: count length of character
//string literal: we can insert variable in sentence
//Escape sequence: special characters 
//Uppper&Lower case: upper case & lower case the sentence
//Replace the name: change the text
//slice: it slice the text, it will keep from slice(0,3) characters only
//concat method: concat the string
//trim: remove space from sentence
//parsInt & parsString: convert from strings to int & int to string., we use because to grab int or string value from the sentence.
//

var name1 = "Rahul"
var name2 = " Ram"
//The string lenght
console.log(name1.length);
//The string literals
console.log(`${name1} is Friend of ${name2}`);
//upper & lower case 
console.log(name1.toUpperCase());
console.log(name2.toLowerCase());
//Slice
console.log(name1.slice(0,3));
//replace
console.log(name1.replace("Rahul","Rahul11"));
//concate
console.log(name1.concat("is friend of", name2));


//for.loop: To display array
//for..Each..loop: To display array, it perform the any function on each of array 
//Array.from: convert any object to array
//for..of: to display array in easy way
//for..in: to display array key As well as value


//for of
for(let i of name1){
    console.log(i);
}

//for..loop
for(var i= 0; i < ename.lenght; i++){
    var c = ename[i];
    console.log(c);
}

//Array.from
const name = "Rahul"

var c = Array.from(name);
console.log(c);

//for..each
empnames.forEach((element)=>{
    console.log(element);
})


//array map method
//map: create new array by performing any operation on each function

//var num = [10, 20, 30 ,50]

const c = num.map((value)=>{
    //to display directly
    console.log(value);
    return value;
    //return with operation
    return value + 1;
})
console.log(c);


//filter: to filter value from array & create new array

const c = num.filter((a)=>{
    return a < 50;
})
console.log(c);

//reduce: it return the value, for exp: we have array [1,2,3,4], It will take one vl & 
//var num = [10, 20, 30 ,50]
const d = num.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(d); //return val: 110


//var, let, const
//var is global scope, if we change the value inside function or block, it will changed globally
//let is block scope, if we change the value inside block or function, it will change for only that function not for globally, 
// we can not re declare the let
//const: const never change, always use const or let



//expression & operator 
//arithmetic operator
//assignment operator
//comparison operator
//logical operator


//conditional expression: if some condition is valid in that case it will execute the statement
//if..st
//if.else..st
//if.else if.st..else.st


//while..loop: based on condition, statement execute
//do..while: execute at least one & it checked condition in last

//function: to organized code & reuse of code

//BOM & DOM
//browser object model:
//Document object model:The HTML DOM is a standard object model
//The HTML DOM is a standard for how to get, change, add, or delete HTML elements.


//.getElementById: is the method 
//.innerHTML: to grab text from js & display on html end using .getElementById

//<p id= "demo"></p>
//document.getElementById('demo').innerHTML = "Hello world";


//DOM document object: If you want to access any element in an HTML page, you always start with accessing the document object.
//document.getElementById(id) 	Find an element by element id
//document.getElementsByTagName(name) 	Find elements by tag name
//document.getElementsByClassName(name) 	Find elements by class name
//querySelector()
//querySelectorAll()

//change the element
//element.innerHTML =  new html content 	Change the inner HTML of an element
//element.attribute = new value 	Change the attribute value of an HTML element

//example of modified of dom using getElementById
var heading = document.getElementById('heading');
heading.innerHTML = "List of lanuages";
heading.style.backgroundColor = "red"

//example of modified of dom using getElementByClassname
var item  = document.getElementByClassName('list');


// we can manupilate the html from js using append & remove
//create new Element
  //create element
  const newDiv = document.createElement('div');
  //to add id
  newDiv.id = "textbox-id"
  //add class 
  newDiv.className = "className"
  //add text 
  newDivtext = document.createTextNode("This is Rahul");
  console.log(newDivtext);
  
  
  //append the text inside the div
  
  newDiv.append(newDivtext); 
  
  //define body from the HTML body tag
  const body = document.getElementById('body');
  //append the newDiv inside body
  body.append(newDiv);


  //setAttribute & removeAttribute inside the HTMLtag
  const para = document.querySelector('#currentTime');
//set setAttribute (attribute name & value)
para.setAttribute('title','this is time');
//get setAttribute
console.log(para.title);
//remove Attribute
para.removeAttribute('title');
console.log(para.title);

//data-set: for modification of attribute
//dataset
para.dataset.newTitle = "my time";
console.log(para.dataset.newTitle);

//class


//addEventListener: The addEventListener() method attaches an event handler to the specified element.
//You can add many event handlers to one element.
//element.addEventListener(event, function, useCapture);
//The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
//The second parameter is the function we want to call when the event occurs.
//The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

//type of event: mouseover, mouseout, click
//document.getElementById("myBtn").addEventListener("click", displayDate); or
//btn.addEventlisterner("click", e=>{ //code });

//add event lister 
const btnmsg = document.querySelector('#btn-click');
btnmsg.addEventListener('click', e => {
  console.log("hello");
   document.getElementById('message').innerHTML = "This is addEventlistener";
});

//remove EventListener
//element.removeEventListener("mousemove", myFunction); 


//Js async function:

//promises:promises is promises for result, if your promises failed then you will notified
//same with success promises , A Promise contains both the producing code and calls to the consuming code
//the promises will work in background when it will done, the function will notify you. it provide facilities to function to run parallel
//if there is multiple promises in that case it will excute togather.
//there are two methods:.then() & .catch()


//promise
const p = new Promise((resolve,reject) => {
  //this will run direct
    console.log("This Is Rahul 1");
    //this function run after 5 seconds
    setTimeout(function() {
      console.log("This is Rahul 2");
    }, 5000);
  })
  
  console.log(p);


  //prmises .then & catch
  //if we just want to display the result in that case .then
  //if we just want to display error message then catch
  
  //prmises .then & catch

const m = new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = 10;
      let b = 20;
      
      if(a > b ){
        resolve("Promise resolved"); // You might want to resolve the promise here
      }
      else{
         reject(new Error("Invalid"));
      }
     
    }, 2000);
  });
  
  m.then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
  );


  
  











