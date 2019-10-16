
console.log('-------------------------- Arrow Functions ------------------------------------');

console.log('-------------------------- Sum ------------------------------------');
// Sum
// return Number
function sum(a, b){
    return a + b
}

let sum2 = (a, b) => a + b

console.log( sum2(111, 222) )

console.log('-------------------------- isPositive ------------------------------------');

// 필터 
// return Boolean
function isPositive(number) {
    return number >= 0
}

let isPositive2 = number => number >= 0

console.log( isPositive2(2) )

console.log('-------------------------- randomNumber ------------------------------------');

// 필터 
// return List<Map>
function randomNumber() {
    return Math.random
}

let randomNumber2 = () => Math.random

console.log( randomNumber2 )

console.log('-------------------------- addEventListener ------------------------------------');

// 필터 
// return 
document.addEventListener('click', function(){
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))


console.log('-------------------------- print Name ------------------------------------');

// 필터 
// return 
class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout(() => {
            console.log('Arrow : ' + this.name)
        }, 100)
    }

    printNameFunction(){
        setTimeout(function() {
            console.log('Function : ' + this.name)
        }, 100)
    }
}

let person = new Person('hhh');
person.printNameArrow()
person.printNameFunction()

console.log(  )

console.log('-------------------------- addEventListener ------------------------------------');

// 필터 
// return List<Map>

console.log(  )

console.log('-------------------------- addEventListener ------------------------------------');

// 필터 
// return List<Map>

console.log(  )

console.log('-------------------------- addEventListener ------------------------------------');

// 필터 
// return List<Map>

console.log(  )

console.log('-------------------------- addEventListener ------------------------------------');

// 필터 
// return List<Map>