console.log(value)//undefined
var value="prabhat"
console.log(value)//prabhat

fun()
function fun()
{
    var valueName;
    console.log(valueName)//undefined
    var valueName="prakash";
    console.log(valueName)//prakash
}



function hoist()
{
    a=10;
    b=100;
    var d=30
}
hoist()

console.log(a)//10
//console.log(d)// Uncaught ReferenceError: b is not defined


x=5;
console.log(x)//5
var x;



greet();

function greet() {
    console.log('Hi, there.');
}




//greeter();
var greeter=function () {
    console.log("Hello Javascript..")
}


//console.log(state)
console.log(8/0)