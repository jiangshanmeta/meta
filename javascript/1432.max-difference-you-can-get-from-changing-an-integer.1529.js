/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
    const max = getMax(num);
    const min = getMin(num);
    return max - min;
};

function getMax (num) {
    const list = num.toString(10).split('');
    for (let i = 0; i < list.length; i++) {
        if (list[i] !== '9') {
            const digit = list[i];
            for (let j = i; j < list.length; j++) {
                if (list[j] === digit) {
                    list[j] = '9';
                }
            }
            return +list.join('');
        }
    }
    return num;
}

function getMin (num) {
    if (num < 10) {
        return 1;
    }
    const list = num.toString(10).split('');
    if (list[0] !== '1') {
        const digit = list[0];
        for (let i = 0; i < list.length; i++) {
            if (list[i] === digit) {
                list[i] = '1';
            }
        }
        return +list.join('');
    }

    for (let i = 1; i < list.length; i++) {
        if (list[i] !== '0' && list[i] !== list[0]) {
            const digit = list[i];
            for (let j = i; j < list.length; j++) {
                if (list[j] === digit) {
                    list[j] = '0';
                }
            }
            return +list.join('');
        }
    }

    return num;
}
