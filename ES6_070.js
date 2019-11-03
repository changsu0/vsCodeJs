/**
|--------------------------------------------------
| `19.10.30(수) 문제풀이
| Loop 100번 돌려서 정수 1~50까지 중 두 숫자의 차이가 +-7이상 차이나는 결과값이
| 5번 이상 연속되었을때, 첫번째 시작값, 마지막값, 합계, 평균값을 구하시오.
| 모든 데이터타입, 조건문, 반복문, 함수 모두 사용하시오
| cmmb
|--------------------------------------------------
*/

/**************************** 상수 선언 시작 ****************************/
const loopCnt = 100;
const minRange = 1;
const maxRange = 50;
const diffCnt = 10;
const continuityCnt = 5;
/**************************** 상수 선언 종료 ****************************/


/**************************** 함수 선언 시작 ****************************/
const fn_randomNum = function (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const fn_arrSum = function(arrItem){
    return arrItem.reduce((currentTotal, inItem) => {
        return inItem + currentTotal;
    }, 0);
}
/**************************** 함수 선언 종료 ****************************/


/**************************** 전역변수 선언 시작 ****************************/
let beforeNum = 0;
let arrVal = new Array();
let arrRst = new Array();
let arrIdxVal = new Array();
let arrIdxRst = new Array();
/**************************** 전역변수 선언 종료 ****************************/


/**************************** 값 비교를 위한 Loop 시작 ****************************/
for (let idx = 0; idx < loopCnt; idx++) {
    let ranNum = fn_randomNum( minRange, maxRange );
    
    if (beforeNum > 0) {
        let diffVal = Math.abs( ranNum - beforeNum );
        if (diffVal > diffCnt) {
            arrVal.push( beforeNum );
            arrIdxVal.push( idx );
            
            
            if (arrVal.length >= continuityCnt) {                
                let tempArrVal = new Array();
                let tempArrIdxVal = new Array();
                arrVal.forEach((item) => {
                    tempArrVal.push(item);
                })
                arrIdxVal.forEach((item) => {
                    tempArrIdxVal.push(item);
                })

                arrRst.push( tempArrVal );
                arrIdxRst.push( tempArrIdxVal );
                
                arrVal.shift();
                arrIdxVal.shift();
            }
        }else{
            arrVal = new Array();
            arrIdxVal = new Array();
        }
    }
    beforeNum = ranNum;
}
/**************************** 값 비교를 위한 Loop 종료 ****************************/


/**************************** 결과를 보기위한 forEach 시작 ****************************/
arrRst.forEach((item, idx) => {
    console.log('이전 값 배열 : ', item);
    console.log('for Index 배열 : ', arrIdxRst[idx]);    
    
    const total = fn_arrSum(item);
    const arrHistory = arrIdxRst[idx];

    let strResult = '';
        strResult += '시작값 : ' + item[0] + ', 마지막값 : ' + item[item.length - 1] + ', 합계 : ' + total + ', 평균 : ' +  Number(total / item.length);
        strResult += ' || 시작 Idx : ' + arrHistory[0] + ', 마지막 Idx : ' + arrHistory[arrHistory.length - 1] + ', 연속 Cnt : ' + arrHistory.length + '회';
    console.log( strResult );
    console.log( '-------------------------------------------------------' );
});
/**************************** 결과를 보기위한 forEach 종료 ****************************/


