/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    const secretMap = {};
    const guessMap = {};
    let bull = 0;

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] !== guess[i]) {
            if (secretMap[secret[i]] === undefined) {
                secretMap[secret[i]] = 1;
            } else {
                secretMap[secret[i]]++;
            }
            if (guessMap[guess[i]] === undefined) {
                guessMap[guess[i]] = 1;
            } else {
                guessMap[guess[i]]++;
            }
        } else {
            bull++;
        }
    }
    let cow = 0;
    Object.keys(guessMap).forEach((num) => {
        cow += Math.min(guessMap[num], secretMap[num] || 0);
    });

    return `${bull}A${cow}B`;
};
