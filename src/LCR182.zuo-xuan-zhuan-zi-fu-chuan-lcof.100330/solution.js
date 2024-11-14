/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    if (!s) {
        return '';
    }

    if (n < 1) {
        return s;
    }
    n %= s.length;
    const sequence = s.split('');
    reverse(sequence, 0, n - 1);
    reverse(sequence, n, sequence.length - 1);
    reverse(sequence, 0, sequence.length - 1);
    return sequence.join('');
};

function reverse (sequence, left, right) {
    while (left < right) {
        const tmp = sequence[right];
        sequence[right] = sequence[left];
        sequence[left] = tmp;
        left++;
        right--;
    }
}
