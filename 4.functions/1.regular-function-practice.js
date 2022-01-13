
//A function can have one or more parameters
function showMessage(firstName,lastName)
{
  console.log("Hello"+" "+firstName+" "+lastName)
}
showMessage("prabhat","kumar")

/*
! You can pass less or more arguments 
!while calling a function. 
!If you pass less arguments then rest of the parameters will be undefined. 
!If you pass more arguments then additional arguments will be ignored. 

*/

function showMessage(firstName,middleName,lastName)
{
  //console.log("Hello"+" "+firstName+" "+middleName+" "+lastName)
}
// showMessage("prabhat","kumar","thakur")//we pass parameter exactly as given in the function arguments
// showMessage("prabhat","kumar")//display Hello prabhat kumar undefined
// showMessage("prabhat","kumar","shubham","kumar")//display Hello prabhat kumar shubham

/*
?  Arguments object
*/
function printMessages(firstName,lastName) {
console.log("Hello"+" "+firstName+" "+lastName) 
console.log("Hello"+" "+arguments[0]+" "+arguments[1])  
}
printMessages("shubham","kumar")

/*
? An arguments object is still valid even if function does not include any parameters
*/

function myfun()
{
    console.log("Hello"+" "+arguments[0]+" "+arguments[1])
}(myfun(13,56))

/*
@ A function can return another function in JavaScript.
*/
function multiple(x)
{
 // console.log(this)
    function fn(y){
      return x*y
    }
   
    return fn;
}

var triple = multiple(3)(9);
console.log(triple)

/*
? Variables created without a declaration keyword (var, let, or const) are always global,
? even if they are created inside a function.
*/
function fun()
{
  value=19;

}
console.log(value)
console.log(fun())


//--------------------------------------------------
function foo() {
  function bar() {
    return 1;
  }
bar()

}

console.log(foo());

//-----------------------------------------------

function addSquares(a){
  function square(x) {
    return a*x;
  }
  return square;
}
var z=addSquares(6)(16);
console.log(z)

//--------------------------------------------------
function addSquare(a,b) {
  function getSquare(x)
  {
    return x*x
  }

  return getSquare(a)+getSquare(b)
  
}
console.log(addSquare(12,12))

//-----------------------------------------------------------
function outside(x) {
    function inside(y)
    {
      return x+y
    }  
    return inside
}
//console.log(outside(8))
console.log(outside(7)(7))

//----------------------------------------------------------

function A(x)
{
  function B(y){

    function C(z)
    {
      return (x+y+z);
    }
    return C(2)
  }
  return B(7)
}

console.log(A())

//-------------------------------------------

var poet=function(name) // the outer function defines a variables called "name"
{
  var getName=function(){ //The inner function has access to the "name " variable of the outer function
    return name;
  }

  return getName; //return the inner function ,thereby exposing it to outer scopes

}
 var myPoet=poet("prabhat")//prabhat
console.log(myPoet()) 



