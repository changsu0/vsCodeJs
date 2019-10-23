
console.log('-------------------------- Array ------------------------------------');

var myArr = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat']

console.log(myArr[0])

let sayHello = function(){
    console.log("Greeting message for user")
}


myArr.forEach(function(day, index) {
    console.log(`starts with ${index+1} -- ${day}`)
})