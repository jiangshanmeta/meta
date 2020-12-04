/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const groupBy = strs.reduce((obj, str) => {
        const sorted = str.split('').sort();
        if (!obj[sorted]) {
            obj[sorted] = [
                str, ];
        } else {
            obj[sorted].push(str);
        }
        return obj;
    }, Object.create(null));

    return Object.values(groupBy);
};
