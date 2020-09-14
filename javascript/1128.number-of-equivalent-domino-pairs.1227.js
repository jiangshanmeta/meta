/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let result = 0;
    const map = {};
    for (let i = 0; i < dominoes.length; i++) {
        let [
            c, d, ] = dominoes[i];
        // 统一处理成c<d
        if (c > d) {
            [
                d, c, ] = [
                c, d, ];
        }
        if (map[`${c},${d}`] > 0) {
            result += map[`${c},${d}`];
        }
        map[`${c},${d}`] = (map[`${c},${d}`] || 0) + 1;
    }
    return result;
};
