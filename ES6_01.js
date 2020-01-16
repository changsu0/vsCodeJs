const items = [
    { name : 'Bike',        price : 100},
    { name : 'TV',          price : 200},
    { name : 'Album',       price : 10},
    { name : 'Book',        price : 5},
    { name : 'Phone',       price : 500},
    { name : 'Computer',    price : 1000},
    { name : 'Keyboard',    price : 25},
];
 
console.log('-------------------------- 필터 ------------------------------------');

// 필터 
// return List<Map>
const filteredItems = items.filter((item) => {
    return item.price === 5
});
console.log(filteredItems);
console.log('-------------------------- Map ------------------------------------');

// Map 
// return Array
const itemNames = items.map((item) => {
    return item.price
});
console.log(itemNames);
console.log('-------------------------- Find ------------------------------------');

// Find 
// return Map
const foundItem = items.find((item) => {
    return item.name === 'Computer'
});

console.log(foundItem);
console.log('-------------------------- forEach ------------------------------------');

// forEach 
// return void
items.forEach((item) => {
    if (item.price >= 200) {
        console.log(item.name)
    }
});

console.log('-------------------------- some ------------------------------------');

// some 
// Desc : Min, Max 찾기
// return Boolean
const hasInexpensiveItems = items.some((item) => {
    return item.price >= 1000
});

console.log(hasInexpensiveItems);

console.log('-------------------------- every ------------------------------------');

// every 
// Desc : 데이터 포함 값 찾기
// return Boolean
const hasInexpensiveItemsEvery = items.every((item) => {
    return item.price <= 999
});

console.log(hasInexpensiveItemsEvery);


console.log('-------------------------- reduce ------------------------------------');

// reduce 
// Desc : Total값 Sum
// return Number
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0);

console.log(total);


console.log('-------------------------- includes ------------------------------------');

// includes 
// Desc : 배열 크기 찾기
// return Boolean
const arrNumber = [1, 2, 3, 4, 5];

const includesTwo = arrNumber.includes(2);

console.log(includesTwo);


console.log('-------------------------- forEach 응용 : Table 그리기 ------------------------------------');

// forEach 응용 : Table 그리기
// return void
let innerHtml = '';
items.forEach((item, index) => {
    innerHtml += '<tr>';
    innerHtml += '<td>' + Number(index + 1) + '</td>';
    innerHtml += '<td>' + item.name + '</td>';
    innerHtml += '<td>' + item.price + '</td>';
    innerHtml += '</tr>';
});


console.log('-------------------------- 필터 응용 : Table 그리기 ------------------------------------');

// 필터 응용 : Table 그리기
// return void
let innerHtmlFilter = '';
filteredItems.forEach((item, index) => {
    innerHtmlFilter += '<tr>';
    innerHtmlFilter += '<td>' + Number(index + 1) + '</td>';
    innerHtmlFilter += '<td>' + item.name + '</td>';
    innerHtmlFilter += '<td>' + item.price + '</td>';
    innerHtmlFilter += '</tr>';
});

$( document ).ready(function() {
    $('#primaryTbody').html(innerHtml);
    $('#successTbody').html(innerHtmlFilter);
});
