function getName(a,b,c) {
    return a + b+c
}

function getName(a) {
   return a
}

function getName(a,b) {
   return a + b
}
function getName(a,b){
   return a,b
}

console.log(getName(1))
console.log(getName(1,2))
console.log(getName(1,2,3))
console.log(getName(1,2,3,4))


//the Function() constructor
const myFunctionName = new Function("a", "b","return a*b");
let myfun=myFunctionName(3,5)
console.log(myfun)