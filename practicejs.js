//Variables,Comments,Datatypes,Operators

var a;
console.log(typeof a)


//A variable declared without a value will have the value undefined
a=10;
var b="This is a string";
console.log(a)
console.log(typeof a)
console.log(b)
console.log(typeof b)


//If you re-declare a JavaScript variable, it will not lose its value.
var a;
console.log(a)

//Comments in js can be single or multiline
//This is a single line comment
/*
This is
a 
multi line
comment 
*/


//Datatypes
// numbers, strings, objects,boolean,arrays

var x = 1 + "Sunayana";
//It will consider 1 as string and print
console.log(x)

/* JavaScript has dynamic types. This means that
the same variable can be used to
hold different data types*/


//Arrays
var arr=[1,2,3,4];

//Objects
var obj={1:"a",2:"b",3:"c"};


//in JavaScript, the data type of null is an object
var x=null;
console.log(typeof x);

console.log(null==undefined);
console.log(null===undefined);

//In JS arrays are also treated as objects
console.log(typeof arr);

//and(&&),or(||),not(!)
/*comparision(when we try to compare string and number
,string is converted to NaN which is false)*/



console.log(2<"sunayana")


console.log("2">"12")
//it will give true as 2 is greater than 1


console.log("Hello World!")

var a;                       //initialising variable
console.log(typeof a);       //typeof gives datatype of vairable
a=10;                        //declaring value to variable



//---------------String Concatenation(Two ways)--------------------

console.log("value of a is ",a);   //string concat

var x=null;

console.log(`a is ${a}`)    //template literals



var a=1;
var b=++a;                  //increment
var c=a++;
console.log(b)
console.log(c)

var e=10
var f="10"
console.log(e==f)
console.log(e===f)          //strict equal to (compares data types)

console.log(a>b?a:b)

