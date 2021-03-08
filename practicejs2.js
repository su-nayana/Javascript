//Error Handling

let a=10;
console.log(a);
console.log("hello");
//b is undefined
    try{
        console.log(b);
    }
    catch(err){
        console.error(err.message);
    }
    finally{
        console.log("Finally executed");
    }
console.log("hello");

//Date functions,Math
var d1=new Date();
console.log(d1)


//for proper representation of date formats
console.log(d1.toUTCString())
console.log(d1.toDateString())
console.log(d1.toISOString())


//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//months from 0 to 11
var d2 = new Date(2020, 15, 29, 11, 30, 30, 50);
console.log(d2);
   
var d3 = new Date(2020, 15, 29, 11, 30, 30);
console.log(d3)
var d4 = new Date(2020, 15, 29, 11, 30);
console.log(d4)
var d5 = new Date(2020, 15, 29, 11);
console.log(d5)
var d6 = new Date(2020, 15, 29);
console.log(d6)
var d7 = new Date(2020, 15);
console.log(d7)

//date parse will convert into milliseconds
var msec = Date.parse("March 06, 2002");
console.log(msec);
/*
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
*/

/*
'1st January 1970' usually called as "epoch date" 
is the date when the time started for Unix computers, 
and that timestamp is marked as '0'. 
*/
console.log(d1.getFullYear());
console.log(d1.getMonth());
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getDay());
console.log(d1.getTime());


/*
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/


//Type conversions
//Can use any of the methods for num/date/bool to string
console.log(String(124))
console.log((124).toString())

//String to num/bool/date
console.log(Number("124"))
console.log(Number("hello"))   //gives NaN(not a number)

//automatic type conversion
console.log(5+null)  //gives 5
console.log("5"+null)   //gives 5null
console.log("5"+10)    //gives 510
console.log("5"-2)
console.log("5"*"2")



//Events
function displayDate() {
    document.getElementById("forclick").innerHTML = Date();
}

function displayVal() {
    document.getElementById("forclick").innerHTML = "We are trying events";
}





//RegExp
// sequence of characters that forms a search pattern.
//i is for case insensitive
var s="Hello i am Sunayana";
var n1=s.search("sunayana");
var n2=s.search(/sunayana/i);
console.log(n1);
console.log(n2);


// g is for global scope matches all substrings matched

var s="hello,this is a hello";
var n3=s.match(/hello/g);
console.log(n3);

//m is for mutliline
var s="hello,\nthis is\n a hello";
var n3=s.match(/hello/m);
console.log(n3);


var str = "Give 100%!"; 
var patt1 = /\d/g;
console.log(str.match(patt1));
//checks matched pattern in beginning of a ord
var str = "HELLO, LOOK AT YOU!"; 
var patt1 = /\bLO/;
console.log(str.search(patt1));

var patt1 = /LO\b/;
console.log(str.search(patt1));

var str = "1, 100 or 1000?";
var patt1 = /10?/g;
console.log(str.match(patt1));



var l=/a/.exec("This is a string using exec in a function")
console.log(l.index)
/*It searches a string for a pattern,
 and returns true or false, depending on the result.*/


var pattern1=/a/;
console.log(pattern1.test("this is a line to check if it contains a"))






//Arrays
//creation(array literal and new Array)

var a1=[1,2,3];
var b1=new Array("hi","hello","hey");
var c1=new Array(1,10);
console.log(c1);



//changing values
a1[0]=4;
console.log(a1);
console.log(a1.length);
console.log(a1.sort());



//checking if array or not
console.log(Array.isArray(a1));
console.log(a1 instanceof Array);
//third method is to crate our own isArray fn
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
  }


console.log(isArray(a1));



//Array methods
//toString
console.log(b1.toString());
console.log(a1.join(" "));

a1.push(5);
console.log(a1);
a1.pop();
console.log(a1);

//popping, working on the first element instead of the last.(shift)
//removing first array element and shifting all to front indexes
a1.shift();


//unshift is to add elements at the beginning
a1.unshift(1);

//this is not a good approach as it can lead to holes
//it is better to use pop or shift
delete a1[2];

//splice
//first arg is where elements should be added
//second arg is how to many elem should be removed
//also can be used to remove elements without creating holes
console.log(a1);
a1.splice(2,1,1);
console.log(a1);

//merging two arrays(concat)
d1=a1.concat(c1);
console.log(d1);


