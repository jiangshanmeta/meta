/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function (favoriteCompanies) {
    const maps = favoriteCompanies.map((sequence) => {
        return sequence.reduce((obj, item) => {
            obj[item] = true;
            return obj;
        }, {});
    });
    const result = [];
    for (let i = 0; i < favoriteCompanies.length; i++) {
        let flag = true;
        for (let j = 0; j < favoriteCompanies.length; j++) {
            if (i === j) {
                continue;
            }
            if (isSubset(maps[j], favoriteCompanies[i])) {
                flag = false;
                break;
            }
        }
        flag && result.push(i);
    }
    return result;
};
function isSubset (map, list) {
    return list.every((str) => map[str]);
}
