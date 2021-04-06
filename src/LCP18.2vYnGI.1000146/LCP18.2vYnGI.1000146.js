/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function (staple, drinks, x) {
    let result = 0;
    staple.sort((a, b) => a - b);
    drinks.sort((a, b) => a - b);
    let index = drinks.length - 1;
    const mod = 1000000007;
    for (let i = 0; i < staple.length; i++) {
        while (index > -1 && staple[i] + drinks[index] > x) {
            index--;
        }
        result = (result + index + 1) % mod;
    }
    return result;
};
