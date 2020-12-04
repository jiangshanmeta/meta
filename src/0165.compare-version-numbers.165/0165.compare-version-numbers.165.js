/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const version1Arr = version1.split('.');
    const version2Arr = version2.split('.');

    const minL = Math.min(version1Arr.length, version2Arr.length);
    for (let i = 0; i < minL; i++) {
        const v1 = +version1Arr[i];
        const v2 = +version2Arr[i];
        if (v1 > v2) {
            return 1;
        } else if (v1 < v2) {
            return -1;
        }
    }
    if (version1Arr.length > version2Arr.length) {
        for (let i = version2Arr.length; i < version1Arr.length; i++) {
            if (+version1Arr[i] !== 0) {
                return 1;
            }
        }
    } else if (version1Arr.length < version2Arr.length) {
        for (let i = version1Arr.length; i < version2Arr.length; i++) {
            if (+version2Arr[i] !== 0) {
                return -1;
            }
        }
    }
    return 0;
};
