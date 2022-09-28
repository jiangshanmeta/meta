/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function (binary) {
    const list = binary.split('');
    let index1 = 0;
    let index2 = 0;
    while (index1 < list.length - 1) {
        if (list[index1] === '1') {
            index1++;
            continue;
        }

        index2 = Math.max(index1 + 1, index2);
        while (index2 < list.length && list[index2] === '1') {
            index2++;
        }
        if (index2 === list.length) {
            break;
        }
        swap(list, index1 + 1, index2);
        list[index1++] = '1';
    }

    return list.join('');
};

function swap (array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}
