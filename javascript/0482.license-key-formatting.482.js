/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    S = S.replace(/-/g, '').toUpperCase();
    const arr = [];
    const mod = S.length % K;
    let index = mod;
    if (mod > 0) {
        let str = '';
        for (let i = 0; i < mod; i++) {
            str += S[i];
        }
        arr.push(str);
    }

    while (index < S.length) {
        let str = '';
        for (let i = 0; i < K; i++) {
            str += S[index + i];
        }
        arr.push(str);
        index += K;
    }

    return arr.join('-');
};
