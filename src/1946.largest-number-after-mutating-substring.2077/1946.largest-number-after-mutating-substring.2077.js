/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function (num, change) {
    let index = 0;
    while (index < num.length) {
        if ((+num[index]) >= change[num[index]]) {
            index++;
            continue;
        } else {
            break;
        }
    }
    const startIndex = index;
    while (index < num.length) {
        if ((+num[index]) <= change[num[index]]) {
            index++;
            continue;
        } else {
            break;
        }
    }
    const sub = [];
    for (let i = startIndex; i < index; i++) {
        sub.push(change[num[i]]);
    }

    return `${num.slice(0, startIndex)}${sub.join('')}${num.slice(index)}`;
};
