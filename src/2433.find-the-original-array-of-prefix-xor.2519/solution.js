/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    for (let i = pref.length - 1; i > 0; i--) {
        pref[i] = pref[i] ^ pref[i - 1];
    }
    return pref;
};
