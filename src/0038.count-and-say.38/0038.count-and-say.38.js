/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var rst = '1';
    var arr;
    var last;
    var counter;
    for (var i = 1; i < n; i++) {
        last = rst[0];
        arr = [];
        counter = 1;
        for (var j = 1; j < rst.length; j++) {
            if (rst[j] === last) {
                counter++;
            } else {
                arr.push(counter, last);
                last = rst[j];
                counter = 1;
            }
        }
        arr.push(counter, last);
        rst = arr.join('');
    }
    return rst;
};
