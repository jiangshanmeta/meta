/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var staticHash = [
        ["","I","II","III","IV","V","VI","VII","VIII","IX"],
        ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
        ["","M","MM","MMM"],
    ];
    
    var arr = [];
    arr.unshift(staticHash[0][num%10]);
    arr.unshift(staticHash[1][Math.floor(num/10)%10]);
    arr.unshift(staticHash[2][Math.floor(num/100)%10]);
    arr.unshift(staticHash[3][Math.floor(num/1000)]);
    return arr.join("");
};