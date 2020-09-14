/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
    let count = 0;
    for (let i = 0; i < shift.length; i++) {
        const [
            direction, amount, ] = shift[i];
        if (direction === 0) {
            count += amount;
        } else {
            count -= amount;
        }
    }
    const list = s.split('');

    if (count > 0) {
        count %= s.length;
        for (let i = 0; i < count; i++) {
            list.push(list.shift());
        }
    } else if (count < 0) {
        count = -count;
        count %= s.length;
        for (let i = 0; i < count; i++) {
            list.unshift(list.pop());
        }
    }
    return list.join('');
};
