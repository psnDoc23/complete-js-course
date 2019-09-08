/////////////////////////////////////
// Lecture: Hoisting


// functions
/*
calculateAge(1965); // works! b/c hoisting loads the calcAge function first...

function calculateAge(year) {
    console.log(2016 - year);
}
*/


// now try w/ function expressions
// retirement(1956);

// retirement(1990); DOES NOT WORK!!! Why?:
// DGR: IMPORTANT
// only works for function DECLARATIONS, NOT function EXPRESSIONS!!!
/*
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
retirement(1990); // (works)

*/

// variables
// #1
// console.log(age); // DOESN'T WORK (Error) b/c VARIABLES need to exist somewhere in the code to be hoisted!

// #2
// console.log(age); // hoisted, but not like functions (data type is undefined)
// var age = 23;

/*
console.log(age); // global var age undefined at this point
var age = 23; // stored in the global execution context

function foo() {
    console.log(age); // undefined in the function context
    var age = 65; // stored in the foo execution context
    console.log(age); // stored and assigned in function execution context
}
foo();
console.log(age); // printed from global execution context
// Take home: global age and function age are two COMPLETELY DIFFERENT VARIABLES!!!
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c); // can't access because third() is in different scope than second()
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// DGR: Method borrowing!!!
mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
