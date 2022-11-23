/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
var splitMessage = function (message, limit) {
    for (let i = 1; i <= message.length; i++) {
        const L = i.toString().length;
        if (2 * L + 3 >= limit) {
            break;
        }

        const extra = calcExtraLength(i);
        const total = message.length + extra;

        if (total <= limit * i && total > (i - 1) * limit) {
            let start = 0;
            const result = [];
            for (let j = 1; j <= i; j++) {
                const suffix = `<${j}/${i}>`;
                const restL = limit - suffix.length;
                result.push(message.slice(start, start + restL) + suffix);

                start += restL;
            }
            return result;
        }
    }
    return [];
};

function calcExtraLength (n) {
    const L = n.toString();
    let result = 3 * n + n * L.length;
    for (let i = 1; i < L.length; i++) {
        result += 9 * (10 ** (i - 1)) * i;
    }

    return result + (n - 10 ** (L.length - 1) + 1) * L.length;
}
