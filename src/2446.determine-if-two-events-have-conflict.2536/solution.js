/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
    const e1s = formatTS(event1[0]);
    const e1e = formatTS(event1[1]);
    const e2s = formatTS(event2[0]);
    const e2e = formatTS(event2[1]);
    if (e2e < e1s || e1e < e2s) {
        return false;
    }
    return true;
};

function formatTS (str) {
    return (+str.slice(0, 2)) * 60 + (+str.slice(3));
}
