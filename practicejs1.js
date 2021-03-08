//Functions,Objects,Classes,Loops


//helps in reusing code 
function fnname(){
    return 1;
}


//function values can be assigned to variables
var x=fnname();
console.log(x);



//var,let,const
//Variables declared with the var keyword cannot have Block Scope.
//So we use let keyword


//Hoisting variables(only with var not let)
name1="sunayana";
console.log(name1);
var name1;

//Arrow functions(single return statements)
let test=(a,b)=>a+b;
console.log(test(1,2));


/*JavaScript objects are containers for 
named values called properties or methods.*/
var class1={
    name:"sunayana",
    age:"19",
    branch:"CSE",
    //Methods are actions that can be performed on objects
    getname:function(){
        return this.name;
    }
}

//can be accessed in two ways
console.log(class1.age);
console.log(class1["age"]);

console.log(class1.getname());


//creating a class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

//instances of class(objects)
var obj1=new Car("Volvo",1988);


//extends and super
class Car1 {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  //inherits class car1
  class Model extends Car1 {
    constructor(brand, mod) {
        //parent constructor
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
  console.log(mycar.show());


//Conditional statements
//if,else,else if


//switch
var text=0;
switch (text) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text)



//loops
//for-in(objects)
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
    console.log(text);
}


//forEach
//for in can be used for arrays but is advised to use forEach when order is imp
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value)
}


//for-of(iterable objects-arrays,strings)
let cars = ["BMW", "Volvo", "Mini"];
let text1 = "";

for (let x of cars) {
    console.log(x);
}




//-------------------Functions------------------------------

function add(a,b){
    console.log("Sum:",a+b)
  }
  function sub(a,b){
    console.log("Difference:",a-b)
  }
  function multiply(a,b){
    console.log("Product:",a*b)
  }
  function div(a,b){
    console.log("Division:",a/b)
  }
  function remainder(a,b){
    console.log("Remainder:",a%b)
  }
  function power(a,b){
    console.log("Power:",a**b)
  }
  function increment(a,b){
    console.log("PreIncrement of a:",++a)
    console.log("PostIncrement of b:",b++)
  }
  function decrement(a,b){
    console.log("PreDecrement of a:",--a)
    console.log("PostDecrement of b:",b--)
  }


//-------------------Switch Case------------------------------
  
  var a=prompt("Enter first number");
  var b=prompt("Enter second number");
  var x=prompt("Enter an arithmetic operator(For Example,+,-)")
  a=(+a)
  b=(+b)
  switch(x){
    case '+' :add(a,b)
              break;
    case '-' :sub(a,b)
              break;
    case '*' :multiply(a,b)
              break;
    case '/' :div(a,b)
              break;
    case '%' :reminder(a,b)
              break;
    case '**' :power(a,b)
              break;
    case '++' :increment(a,b)
              break;
    case '--' :decrement(a,b)
              break;
    default:
        console.log("Invalid option")
    }
  
  

var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
var num3=prompt("Enter third number");
greatest=(a > b ? ( a > c ? a : c) : (b > c ? b : c));
console.log(greatest);
  
var num=prompt("Enter a number");
for(let i=1;i<=10;i++){
console.log(num*i);
}

var num=prompt("Enter a number");
for(let i=1;i<=num;i++){
if(num%i==0)
console.log(i);
}
  
function big(arr){
let largest=arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] > largest) {
    largest = arr[i];
}
}  
return largest
}

array=[10,20,13,52,40];
console.log(big(array));
  
function small(arr){
let smallest=arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] < smallest) {
    smallest = arr[i];
}
}
return smallest
}  

array=[20,10,13,52,40];
console.log(small(array));
  
  
  