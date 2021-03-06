
let myArr = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat']
console.log('-------------------------- forEach ------------------------------------');

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log( element )
}

console.log('-------------------------- forEach ------------------------------------');

myArr.forEach(function(day, index) {
    console.log(`starts with ${index+1} -- ${day}`)
})

console.log('-------------------------- for in ------------------------------------');
let obj = {
    a: 1, 
    b: 2, 
    c: 3
};

// Key 값을 변수에 담음
for (var prop in obj) {
    console.log(prop, obj[prop]); // a 1, b 2, c 3
}

console.log('-------------------------- 많이 쓰는 문제 (있나없나 체크) ------------------------------------');

// 문제 : 위 배열 중 wed값이 존재 하면 A 프로세스, 존재하지 않으면 B 프로세스를 실행하라.
// true, false

// 최댓값을 포함하는 정수 난수 생성하기
const randomNum = function (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}


// 무작위 난수를 30번 발생시켜 숫자 25가 나오면 alert( '당첨' ), 
// 숫자 25가 없으면 console.log( '꽝!' )을 출력하세요

let loopCnt = 5;
let minCnt = 1 ;
let maxCnt = 50;

// 숫자
let forChkNum = 0; 
for (let index = 0; index < loopCnt; index++) {
    let num = randomNum(minCnt, maxCnt)
    if(num  === 25){
        forChkNum = 1;
        break;
    }
}

if (forChkNum > 0) {
    alert( '숫자 당첨' )
}else{
    console.log( '숫자 꽝' )
}

// 문자
let forChkStr = '실패'; 
for (let index = 0; index < loopCnt; index++) {
    let num = randomNum(minCnt, maxCnt)
    if(num  === 25){
        forChkStr = '성공';
        break;
    }
}

if (forChkStr === '성공') {
    alert( '문자 당첨' )
}else{
    console.log( '문자 꽝' )
}

// Boolean
let forChkBool = false; 
for (let index = 0; index < loopCnt; index++) {
    let num = randomNum(minCnt, maxCnt)
    if(num  === 25){
        forChkBool = true;
        break;
    }
}

if (forChkBool) {
    alert( '불린 당첨' )
}else{
    console.log( '불린 꽝' )
}











/* 
10.24 문제 - 10.30 확인
0부터 9.9까지(소수점 1자리)의 난수를 100번 생성하여 이전 데이터와 현재 데이터를 비교하여
두 수의 차가 +-5.0 초과하면 이전 값 과 현재 값, 차이 값을 저장하여 출력하시오

예) 난수 7번 발생 ( 1.1, 3.9, 9.1, 4.1, 8.3, 2.7, 3.4)
결과 = 2건
- 이전 값 : 3.9, 현재 값 : 9.1, 차이 값 : -5.2
- 이전 값 : 8.3, 현재 값 : 2.7, 차이 값 : 5.6 */