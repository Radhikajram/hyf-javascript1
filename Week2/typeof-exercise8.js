/*. Write a program that checks the types of two variables and prints 
out SAME TYPE if they are the same type. */

let a = 1;
let b = "one"
let isBoolean = true;
let myArray = [ 'one','two','three']

// log the value of 4 different variable.
console.log ('The value of variable a is :' + a)
console.log ('The value of variable b is :' + b)
console.log ('The value of variable iaBoolean is :' + isBoolean)
console.log ('The value of variable myArray is :' + myArray)

// Log  type of the vairable
console.log ('The Type  of variable a is : Integer' )
console.log ('The Type of variable b is : String')
console.log ('The  Type of variable iaBoolean is : Boolean')
console.log ('The  Type of variable myArray is : Array')

//Log type of variable using 'typeOf' method.
console.log ('The Type  of variable a is : ' + typeof(a) )
console.log ('The Type of variable b is : ' +  typeof(b))
console.log ('The  Type of variable iaBoolean is :   ' + typeof(isBoolean))
console.log ('The  Type of variable myArray is : ' + typeof(myArray))

//Compare two different typeOf variable and log the message.
if (typeof(a) === typeof(b))
{
    console.log('The variable a and b are of same type: ' + typeof(a));

}
else {
    console.log('The variable a and b are of different type: ' + ' Type of a is :' + typeof(a) 
    + ' and type of b is : ' + typeof(b) )
}


