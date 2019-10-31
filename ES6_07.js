// 루프 카운트
const loopCnt = 100;
// 난수 Min 범위
const minRange = 1;
// 난수 Max 범위
const maxRange = 50;
// 두 수 차이값
const diffCnt = 7;
// 연속 카운트
const continuityCnt = 5;

// 최대값을 포함하는 정수 난수 생성하기
const randomNum = function (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최대값, 최소값도 포함
}

// 이전 값
let beforeNum = 0;
// 연속된 값 저장 배열
let arrVal = new Array();
// 결과 저장 배열
let arrRst = new Array();

// Temp
// 연속된 값 idx 저장 배열
let arrIdxVal = new Array();
// 결과 idx 저장 배열
let arrIdxRst = new Array();

for (let idx = 0; idx < loopCnt; idx++) {
    let ranNum = randomNum( minRange, maxRange );
    
    if (beforeNum > 0) {
        let diffVal = Math.abs( ranNum - beforeNum );

        if (diffVal > diffCnt) {
            arrVal.push( beforeNum );
            arrIdxVal.push( idx );
        }else{
            if (arrVal.length >= continuityCnt) {
                arrRst.push( arrVal );
                arrIdxRst.push( arrIdxVal )
            }
            arrVal = new Array();
            arrIdxVal = new Array();
        }
    }

    beforeNum = ranNum;
}

arrRst.forEach((item, idx) => {
    console.log(item);
    console.log(arrIdxRst[idx]);
    
    // reduce 
    // Desc : Total값 Sum
    // return Number
    const total = item.reduce((currentTotal, inItem) => {
        return inItem + currentTotal;
    }, 0);

    const arrHistory = arrIdxRst[idx];

    let strResult = '';
        strResult += '시작값 : ' + item[0] + ', 마지막값 : ' + item[item.length - 1] + ', 합계 : ' + total + ', 평균 : ' +  Number(total / item.length);
        strResult += ' || 시작 Idx : ' + arrHistory[0] + ', 마지막 Idx : ' + arrHistory[arrHistory.length - 1] + ', 연속 Cnt : ' + arrHistory.length + '회';
    console.log( strResult );
});