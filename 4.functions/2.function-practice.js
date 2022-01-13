/*
?? Declaring function
*/

function say(name)
{
   console.log("Say hello")
   return "say hello using return"
}
console.log(say());
//---------------------------------------------
//function inside function
function hypotenuse(m,n){
 function square(num)
 {
     return num*num
 }
return Math.sqrt(square(m)+square(n))
}
var result=hypotenuse(3,4)
console.log(result)//5

//---------------------------------
//function expressions:-In which functions are assigned to a variables
var area=function (radius){ //anonymous function
    return Math.PI*radius*radius;
}
console.log(area(5,9,3,4))

//---------------------

//variable scope in Functions
var num=1 //global variable
function showGlobal()
{
    console.log(num)
}
showGlobal()

//---nested function
function verify(name)//outer function
{
    function isJohn()
    {
        return name==="John"
    }
    if(isJohn())
    {
        return "Yep,this is john!!"
    }
}
console.log(verify("John"))

//----Prototype 
function Counter(count){
    this.count=count  //object property
  

}
Counter.prototype.count=2 //prototype property
var counter=new Counter(6)
console.log(counter.count)

//-----------Immediate functions

// function print()
// {
//     console.log("Learning JS!!!")
// }
// console.log(print())


// (function () {
//     console.log("Learning JS using immediate function!");
// }());

(function square(value) {
    var result = value * value;
    console.log(result);
})(10);


