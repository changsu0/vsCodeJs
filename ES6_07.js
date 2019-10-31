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

// Loop
for (let idx = 0; idx < loopCnt; idx++) {
    // Loop 돌때마다 난수 발생
    let ranNum = randomNum( minRange, maxRange );
    
    // 이전 값이 0 이상일때 동작
    if (beforeNum > 0) {
        // 절대값 ( 현재값 - 이전값 )
        let diffVal = Math.abs( ranNum - beforeNum );

        // 두 수의 차이가 기준값 보다 클 경우
        if (diffVal > diffCnt) {
            // 배열에 이전 값 저장
            arrVal.push( beforeNum );
            // 로그를 위한 배열에 Idx 저장
            arrIdxVal.push( idx );

        // 두 수의 차이가 기준값 보다 크지 않을 경우
        }else{
            // 배열에 담긴 길이가 연속기준 카운트보다 크거가 같으면 (*5번이상)
            if (arrVal.length >= continuityCnt) {
                // 결과 배열에 연속된 값 배열 저장
                arrRst.push( arrVal );
                // 결과 배열에 Idx 연속된 값 배열 저장
                arrIdxRst.push( arrIdxVal )
            }
            // 배열 초기화
            arrVal = new Array();
            arrIdxVal = new Array();
        }
    }
    // 이전 값 변수에 현재값 담기
    beforeNum = ranNum;
}

// 결과를 보기위한 forEach
arrRst.forEach((item, idx) => {
    // 차이가 난 연속값 배열
    console.log(item);
    // 차이가 났을때 Idx값 배열
    console.log(arrIdxRst[idx]);
    
    // reduce 
    // Desc : Total값 Sum
    // return Number
    const total = item.reduce((currentTotal, inItem) => {
        return inItem + currentTotal;
    }, 0);

    // Log용 Idx배열 추출
    const arrHistory = arrIdxRst[idx];

    let strResult = '';
        // 문제의 답인 시작, 마지막, 합계, 평균
        strResult += '시작값 : ' + item[0] + ', 마지막값 : ' + item[item.length - 1] + ', 합계 : ' + total + ', 평균 : ' +  Number(total / item.length);
        // 로그를 위한 Idx
        strResult += ' || 시작 Idx : ' + arrHistory[0] + ', 마지막 Idx : ' + arrHistory[arrHistory.length - 1] + ', 연속 Cnt : ' + arrHistory.length + '회';
    
        // 수고링^^
    console.log( strResult );
});