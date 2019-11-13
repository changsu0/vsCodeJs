const g_tableData = new Array();
let rowData = new Object();

// 이건 설명 안해도 RG?
rowData.name        = 'BorisLove';
rowData.age         = 11;
rowData.phone       = '01013467946';
rowData.email       = 'BorisLove@naver.com';
rowData.birth       = '890804';
rowData.hobby       = 'H07';
rowData.specialty   = 'S03';
g_tableData.push(rowData);

// 이건 설명 안해도 RG?
rowData = {name : 'HectorShannon', age : 53, phone : '01013467947', email : 'HectorShannon@naver.com', birth : '470412', hobby : 'H06', specialty : 'S02'};
g_tableData.push(rowData);
rowData = {name : 'TarikGoodman', age : 24, phone : '01013467948', email : 'TarikGoodman@naver.com', birth : '761211', hobby : 'H05', specialty : 'S01'};
g_tableData.push(rowData);
rowData = {name : 'TimothyRose', age : 84, phone : '01013467949', email : 'TimothyRose@naver.com', birth : '160611', hobby : 'H04', specialty : 'S03'};
g_tableData.push(rowData);
rowData = {name : 'LuciusWatts', age : 62, phone : '01013467950', email : 'LuciusWatts@naver.com', birth : '380909', hobby : 'H03', specialty : 'S02'};
g_tableData.push(rowData);
rowData = {name : 'ChadwickWatts', age : 13, phone : '01013467951', email : 'ChadwickWatts@naver.com', birth : '871121', hobby : 'H02', specialty : 'S01'};
g_tableData.push(rowData);
rowData = {name : 'BenedictRamirez', age : 23, phone : '01013467952', email : 'BenedictRamirez@naver.com', birth : '770101', hobby : 'H01', specialty : 'S03'};
g_tableData.push(rowData);
rowData = {name : 'ChanningClark', age : 24, phone : '01013467953', email : 'ChanningClark@naver.com', birth : '760425', hobby : 'H07', specialty : 'S02'};
g_tableData.push(rowData);
rowData = {name : 'LamarFranklin', age : 85, phone : '01013467954', email : 'LamarFranklin@naver.com', birth : '150115', hobby : 'H06', specialty : 'S01'};
g_tableData.push(rowData);
rowData = {name : 'HardingOwens', age : 64, phone : '01013467955', email : 'HardingOwens@naver.com', birth : '360730', hobby : 'H05', specialty : 'S03'};
g_tableData.push(rowData);
rowData = {name : 'KyleMarsh', age : 32, phone : '01013467956', email : 'KyleMarsh@naver.com', birth : '680908', hobby : 'H04', specialty : 'S02'};
g_tableData.push(rowData);
rowData = {name : 'JustinGarrett', age : 27, phone : '01013467957', email : 'JustinGarrett@naver.com', birth : '730711', hobby : 'H03', specialty : 'S01'};
g_tableData.push(rowData);
rowData = {name : 'RalphSweet', age : 78, phone : '01013467958', email : 'RalphSweet@naver.com', birth : '221120', hobby : 'H02', specialty : 'S03'};
g_tableData.push(rowData);
rowData = {name : 'QuentinEwing', age : 91, phone : '01013467959', email : 'QuentinEwing@naver.com', birth : '090503', hobby : 'H01', specialty : 'S02'};
g_tableData.push(rowData);
rowData = {name : 'DavidHudson', age : 5, phone : '01013467960', email : 'DavidHudson@naver.com', birth : '950533', hobby : 'H07', specialty : 'S01'};
g_tableData.push(rowData);
rowData = {name : 'OrlandoHooper', age : 46, phone : '01013467961', email : 'OrlandoHooper@naver.com', birth : '540401', hobby : 'H06', specialty : 'S03'};
g_tableData.push(rowData);
rowData = {name : 'TobiasHansen', age : 64, phone : '01013467962', email : 'TobiasHansen@naver.com', birth : '360309', hobby : 'H05', specialty : 'S02'};
g_tableData.push(rowData);
rowData = {name : 'DolanMorton', age : 39, phone : '01013467963', email : 'DolanMorton@naver.com', birth : '611230', hobby : 'H04', specialty : 'S01'};
g_tableData.push(rowData);
rowData = {name : 'BrianGarner', age : 17, phone : '01013467964', email : 'BrianGarner@naver.com', birth : '830201', hobby : 'H03', specialty : 'S03'};
g_tableData.push(rowData);
rowData = {name : 'WangJuarez', age : 28, phone : '01013467965', email : 'WangJuarez@naver.com', birth : '720307', hobby : 'H02', specialty : 'S02'};
g_tableData.push(rowData);

/**
|--------------------------------------------------
| 핸드폰번호 구분 '-'
| 정규식 인터넷으로 찾음
|--------------------------------------------------
*/
const fn_phoneNoGubun = function(num){
    return num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
}
/**
|--------------------------------------------------
| 생년월일 구분 '.'
| 정규식 인터넷으로 찾음
|--------------------------------------------------
*/
const fn_birthComma = function(birth){
    return birth.replace(/([0-9]{2})([0-9]+)([0-9]{2})/,"$1.$2.$3");
}
/**
|--------------------------------------------------
| Alert Event
|--------------------------------------------------
*/
const fn_btnAlert = function(name, age, phone, email, birth, hobby, specialty){
    let strInfo = '';
        strInfo += '이름 : '        + name      + ' / ';
        strInfo += '나이 : '        + age       + ' / ';
        strInfo += '전화번호 : '    + phone     + ' / ';
        strInfo += '이메일 : '      + email     + ' / ';
        strInfo += '생일 : '        + birth     + ' / ';
        strInfo += '취미 : '        + hobby     + ' / ';
        strInfo += '특기 : '        + specialty;
    alert( strInfo );
}

let innerHtml = '';
// g_tableData : 테이블에 뿌려 줄 데이터를 돌린당
// item : [{},{},{}] 오브젝트 배열에 들어있는 값 중 배열의 i번째 오브젝트를 의미함 즉 {name : 'WangJuarez', age : 28, ....}
// index : 일반적인 for문의 i와 같은 의미 한바퀴 돌때마다 index++ 됨
g_tableData.forEach((item, index) => {
    innerHtml += '<tr>';
    innerHtml += '<td>' + Number(index+1) + '</td>';
    innerHtml += '<td>' + item.name + '</td>';
    innerHtml += '<td>' + item.age + '</td>';
    // 전번 3 - 4 - 4 형태로 만들어주기위한 함수호출
    innerHtml += '<td>' + fn_phoneNoGubun(item.phone) + '</td>';
    innerHtml += '<td>' + item.email + '</td>';
    // 생일 2 . 2 . 2 형태로 만들어 주기위한 함수호출
    innerHtml += '<td>' + fn_birthComma(item.birth) + '</td>';
    innerHtml += '<td>' + item.hobby + '</td>';
    innerHtml += '<td>' + item.specialty + '</td>';
    // Alert을 찍어주기위한 함수호출
    // 함수에 파라미터는 문자열 형태로 줘야 하기 때문에 앞뒤로 '문자열' 싱글 쿼테이션을 감싸야 한다.
    // 하지만 innerHtml에 담는 Html자체가 문자열이기 때문에 역슬러시를 \' 앞에 붙임으로써 싱글쿼테이션으로 인식 시킨다.
    // 즉 실제 표현되는 html은 fn_btnAlert('이름', '나이', '전번'...) 과 같이 표현이 된다
    innerHtml += '<td><button onclick="fn_btnAlert(\'' 
                + item.name + '\', \'' 
                + item.age + '\', \'' 
                + fn_phoneNoGubun(item.phone) + '\', \'' 
                + item.email + '\', \'' 
                + fn_birthComma(item.birth) + '\', \'' 
                + item.hobby + '\', \'' 
                + item.specialty + '\')">' 
                + item.name 
                + '</button></td>';
    innerHtml += '</tr>';
});

// 모든 html이 그려진 이후 아래 영역에 있는 스크립트를 실행한다.
$( document ).ready(function() {
    // ID선택자 안에 html을 넣는다(html을 문자로 표현하여 던져줌)
    $('#primaryTbody').html(innerHtml);
});
