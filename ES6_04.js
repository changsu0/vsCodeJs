const obj = new Object();

obj.a = 1;
obj.b = '1';
obj.c = true;

console.log(obj)


const jsonObj = {
    a : 1
    , b : '1'
    , c : true
};

console.log(jsonObj)

const strA = 'show me the money'

console.log(strA.search('q'))
console.log(strA.startsWith('me', 5))
console.log(strA.toLocaleLowerCase())
console.log(strA.toLocaleUpperCase())
console.log(strA.toUpperCase())

const arrA = new Array()

arrA.push('a')
arrA.push('b')
arrA.push('c')

console.log(arrA)

arrA.join('a')
arrA.join('b')
arrA.join('c')

console.log(arrA)

const arrObj = [
    {a : 5, b : '5', c : true}
    , {a : 3, b : '3', c : true}
    , {a : 1, b : '1', c : true}
    , {a : 2, b : '2', c : true}
    , {a : 4, b : '4', c : true}
]

// reduce 
// Desc : Total값 Sum
// return Number
const total = arrObj.reduce((currentTotal, item) => {
    return item.a + currentTotal
}, 0);

console.log(total);

fnA();

var strB = 'strB Global'
let strC = 'strC Global'
const strD = 'strD Global'

function fnA(){
    var strB = 'strB'
    let strC = 'strC'
    const strD = 'strD'
    console.log(strB)
    console.log(strC)
    console.log(strD)
}

let fnB = function(){
    console.log('fnB')
}
fnB()

var strB = 'strB Global'
//let strC = 'strC Global'

console.log(strB)
console.log(strC)
console.log(strD)





strAA = 'aaa'
var strAA;
console.log(strAA)

let strBB;
strBB = 'aaa'

console.log(strBB)