/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function (A, B) {
    const max = A + B;
    const result = new Array(max);
    let ca = 0;
    let cb = 0;
    for (let i = 0; i < max; i++) {
        if (ca === 2) {
            result[i] = 'b';
            B--;
            ca = 0;
            cb = 1;
            continue;
        }
        if (cb === 2) {
            result[i] = 'a';
            A--;
            cb = 0;
            ca = 1;
            continue;
        }
        if (A >= B) {
            result[i] = 'a';
            ca++;
            A--;
        } else {
            result[i] = 'b';
            cb++;
            B--;
        }
    }

    return result.join('');
};
