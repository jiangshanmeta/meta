/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const hashMap = strs.reduce((obj, item) => {
        const key = item.split('').sort().join('');
        (obj[key] || (obj[key] = [])).push(item);
        return obj;
    }, {});
    return Object.values(hashMap);
};
