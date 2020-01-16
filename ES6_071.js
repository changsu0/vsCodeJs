//--------------------------------------------1107숙제--------
/*
    100번 돌려서 1~50까지 (중 두 숫자의 차이가 +-7이상 차이나는 결과값이 5번 연속일 떄 
    첫 번째 시작값과, 마지막 값 , 평균값, 합계를 구하시오 
    모든 데이터 타입 조건문, 반복문, 함수 모두 사용 
*/

let arr = new Array();
let cnt = 0;
let gapArr = new Array();
let res = {
    fst : 1,
    fin : 50
};

//정수값 뽑는 함수
function random(fst,fin){
    return (Math.floor(Math.random()*fin)+fst);
}
//차이값 
function gap(x,y){
    return x-y;
}
function sum(Array){
    let sum = 0;
    for(let i=0; i<gapArr.length; i++ ){
        sum += gapArr[i];
    }
    return sum ;
}

for(let i=1; i<=100; i++ ){
    arr[i] = random(res.fst, res.fin);
}

for(let i=0; i<=100-1; i++){
    if(gap(arr[i],arr[i+1]) > 7 || gap(arr[i],arr[i+1]) < -7){
        gapArr.push(arr[i]);
    }else{
        if( gapArr.length >= 5 ){
            console.log(gapArr)
            console.log('첫째값 : '+gapArr[0]+', 마지막값 : '+gapArr[gapArr.length-1]+
            ',합계 : '+sum(gapArr)+ ', 평균 : '+(sum(gapArr)/gapArr.length).toFixed(1)+
            ',연속 cnt :'+ gapArr.length);
        }
        gapArr = new Array();
        
    }
}

