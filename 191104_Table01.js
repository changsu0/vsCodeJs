const g_tableData = new Array();
let rowData = new Object();

rowData.name        = 'BorisLove';
rowData.age         = 11;
rowData.phone       = '01013467946';
rowData.email       = 'BorisLove@naver.com';
rowData.birth       = '890804';
rowData.hobby       = 'H07';
rowData.specialty   = 'S03';
g_tableData.push(rowData);

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
| 취미 공통코드
|--------------------------------------------------
*/
const g_hobby = [
    {code : 'H01', value : '숨쉬기'},
    {code : 'H02', value : '담배'},
    {code : 'H03', value : '술'},
    {code : 'H04', value : '커피'},
    {code : 'H05', value : '코딩'},
    {code : 'H06', value : '독서'},
    {code : 'H07', value : '여행'},
];
/**
|--------------------------------------------------
| 특기 공통코드
|--------------------------------------------------
*/
const g_specialty = [
    {code : 'S01', value : '먹기'},
    {code : 'S02', value : '자기'},
    {code : 'S03', value : '싸기'},
];
/**
|--------------------------------------------------
| 핸드폰번호 구분 '-'
|--------------------------------------------------
*/
const fn_phoneNoGubun = function(num){
    return num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
}
/**
|--------------------------------------------------
| 생년월일 구분 '.'
|--------------------------------------------------
*/
const fn_birthComma = function(birth){
    return birth.replace(/([0-9]{2})([0-9]+)([0-9]{2})/,"$1.$2.$3");
}
/**
|--------------------------------------------------
| 취미 Val찾기
|--------------------------------------------------
*/
const fn_hobbyVal = function(code){
    let findVal = g_hobby.find((item) => {
        if (item.code === code) {
            return item;
        }
    });
    return findVal.value;
}
/**
|--------------------------------------------------
| 특기 Val찾기
|--------------------------------------------------
*/
const fn_specialtyVal = function(code){
    let strSpecialtyVal = '';
    g_specialty.forEach((item) => {
        if (item.code === code) {
            strSpecialtyVal = item.value;
        }
    });
    return strSpecialtyVal;
}
/**
|--------------------------------------------------
| SelectBox 만들기
|--------------------------------------------------
*/
const fn_makeSelBox = function(objCode, defaultCode, selID){
    let strSel = '<select id="' + selID + '">';
    objCode.forEach((item) => {
        if (defaultCode === item.code) {
            strSel += '<option value="' + item.code + '" selected="selected">' + item.value + '</option>';
        } else {
            strSel += '<option value="' + item.code + '">' + item.value + '</option>';
        }
    });
    strSel += '</select>';
    return strSel;
}
/**
|--------------------------------------------------
| Radio 만들기
|--------------------------------------------------
*/
const fn_makeRadio = function(objCode, defaultCode, rdoName){
    let strSel = '';
    objCode.forEach((item) => {
        if (defaultCode === item.code) {
            strSel += '<input type="radio" name="' + rdoName + '" value="' + item.code + '" checked="checked" /> ' + item.value;
        } else {
            strSel += '<input type="radio" name="' + rdoName + '" value="' + item.code + '" /> ' + item.value;
        }
    });
    return strSel;
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

g_tableData.forEach((item, index) => {
    innerHtml += '<tr>';
    innerHtml += '<td>' + Number(index+1) + '</td>';
    innerHtml += '<td>' + item.name + '</td>';
    innerHtml += '<td>' + item.age + '</td>';
    innerHtml += '<td>' + fn_phoneNoGubun(item.phone) + '</td>';
    innerHtml += '<td>' + item.email + '</td>';
    innerHtml += '<td>' + fn_birthComma(item.birth) + '</td>';
    innerHtml += '<td>' + fn_makeSelBox(g_hobby, item.hobby, 'selHobby'+index) + '</td>';
    innerHtml += '<td>' + fn_makeRadio(g_specialty, item.specialty, 'rdoSpecialty'+index) + '</td>';
    innerHtml += '<td><button onclick="fn_btnAlert(\'' + item.name + '\', \'' + item.age + '\', \'' 
                + fn_phoneNoGubun(item.phone) + '\', \'' + item.email + '\', \'' + fn_birthComma(item.birth) + '\', \'' 
                + fn_hobbyVal(item.hobby) + '\', \'' + fn_specialtyVal(item.specialty) + '\')">' + item.name + '</button></td>';
    innerHtml += '</tr>';
})


$( document ).ready(function() {
    $('#primaryTbody').html(innerHtml);
});
