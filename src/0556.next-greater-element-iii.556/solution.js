/**
 * @param {number} n
 * @return {number}
 */
// 有点像1053
var nextGreaterElement = function (n) {
    const str = n + '';

    for (let i = str.length - 2; i > -1; i--) {
        if (str[i] < str[i + 1]) {
            let greatIndex = i + 1;
            let greatVal = str[greatIndex];
            for (let j = greatIndex + 1; j < str.length; j++) {
                if (str[j] > str[i] && str[j] < greatVal) {
                    greatIndex = j;
                    greatVal = str[j];
                }
            }

            const strNum = str.slice(0, i) + greatVal + (str.slice(i, greatIndex) + str.slice(greatIndex + 1)).split('').sort().join('');
            if (strNum > 2 ** 31 - 1) {
                return -1;
            }

            return +strNum;
        }
    }
    return -1;
};
