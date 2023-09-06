console.log("App.js is working")
var a=2
var b=8

var c= a+b
console.log("Sum is : ", c)
console.log(`Sum is :  ${c}` )  
// in curli braces ypu can write any js code

//we import the module from file modules.js
var calc = require('./modules.js')
res= calc.add(2,3)
console.log("Sum is "+ res)


//two ways fo reading file
const fs = require('fs')
fs.readFile('./', 'utf-8', function(err , data){
console.log('')
})


fs.readFile('./', "utf-8", (err , data)=>{
    console.log('')
})