/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function (arr) {
    let result = process(arr);
    while (!isSame(result, arr)) {
        arr = result;
        result = process(result);
    }
    return result;
};

function process (arr) {
    const result = [...arr, ];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
            result[i]++;
        } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            result[i]--;
        }
    }

    return result;
}

function isSame (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
