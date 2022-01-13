// function sample(varible){
//     return varible
//  }
 
//  var test = function (){
//      return "this is test function"
//  }
 
//  console.log(sample(test()))
//  console.log(sample("uma"))


// function sayHello()
// {
//     return "Say hello"
// // }
// // function greeting(hellomessage,name)
// // {
// //    console.log(hellomessage +"  "+name)
// // }
// // greeting(sayHello(),"prabhat")//A callback is a function passed as an argument to another function

// // function sayHello() {
// //     return function() {
// //        console.log("Hello!");
// //     }
// //  }
 

// //call back function

// // function myDisplayer(some) {
// //   console.log("it is display method..")
 
// //   }
  
// //   function myCalculator(num1, num2) {
// //     var sum = num1 + num2;
// //     return sum;
// //   }
  
// //   var result = myCalculator(5, 5);
// //   console.log(result)
// //   myDisplayer(result);


// var person = new Object()//object creation using Object
// console.log(person)//empty object

// person.id=10
// person["1firstName"]="ajay"
// person["lastName"]="kumar"


// person.city="NOIDA"
// person.country="INDIA"

//  console.log(person,typeof person)
// // console.log(person["city"])
// // console.log(person["1firstName"])


// //object literals
// var obj = { 
    
//     "abc" : "hello" 

// };


// console.log(obj)
// var x = "abc";
// var y = obj[x];



// var student = {

//     //add property 
   
//     id: 1,
//     firstName: "Adam",
//     lastName: "Colson",
//     getFullName: function(){
      
//         console.log(this)
//         return this.firstName + ' ' + this.lastName
//     }
    
   
// }



//  console.log(student,typeof student)
// // console.log(student.getFullName())

// var person  = Object.create(null)//one of the way to create object

// // console.log(person1)
// // console.log(person2)
// console.log(person)
// person["firstName"] ="Scott"
// person["lastName"] ="Desatnick"

// person.getData = function(){

// }

// var cityName="city"
// person[cityName] ="Hyderabad"

// console.log(person["FIRSTNAME"])
// console.log(person['firstName'])

// console.log(person.firstName)

// person.age = 44

// console.log(person.age)

// person.address = {}
// console.log(person.address)
// person.address.street="jsdhas"
// person.address.state="UP"
// person.address.country="India"
// person.address.pincode="kajd"
// console.log(person.address)


console.log(this)//global scope
function Student(firstName, lastName){
    console.log(this)//point to Student
    this.fname = firstName;
    this.lname = lastName
}


var student = new Student("Scott", "Deastnick");
console.log(student)

// person.address.street = "1st main"
// person.address.state = "New York"


// console.log(person.address.street)
// console.log(person.address.state)

// console.log(person.firstName + ' ' + person.lastName)
// console.log(person)