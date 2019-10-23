
console.log('-------------------------- forEach ------------------------------------');

var myArr = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat']

myArr.forEach(function(day, index) {
    console.log(`starts with ${index+1} -- ${day}`)
})

console.log('-------------------------- for in ------------------------------------');
var obj = {
    a: 1, 
    b: 2, 
    c: 3
};

// Key 값을 변수에 담음
for (var prop in obj) {
    console.log(prop, obj[prop]); // a 1, b 2, c 3
}

// Key 값을 변수에 담음
for (var prop in myArr) {
    console.log(prop, myArr[prop]); // a 1, b 2, c 3
}

