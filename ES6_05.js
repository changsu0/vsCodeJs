
console.log('-------------------------- 재귀함수 ------------------------------------');

var sports = {
    soccer: {
        step: {
            value: 11
        },
        time: 90
    },
    basketball: {
        member: 5,
        time: 48
    }
};
function showValues(sports) {
    var type, obj;
    for (type in sports) {
        obj = sports[type];
        typeof obj === "object" ? showValues(obj) : console.log(type + " : " + obj);
    }
}
showValues(sports);
/* * 실행 결과 * value : 11 time : 90 member : 5 time: 48 */
