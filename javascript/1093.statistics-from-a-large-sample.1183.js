/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
    const valueList = [];
    // countList存的是到目前为止总共有多少个数
    const countList = [];
    let sum = 0;
    let totalCount = 0;
    let modeValue;
    let modeCount = 0;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < count.length; i++) {
        if (count[i] === 0) {
            continue;
        }
        min = Math.min(min, i);
        max = Math.max(max, i);
        if (count[i] > modeCount) {
            modeCount = count[i];
            modeValue = i;
        }
        sum += i * count[i];
        totalCount += count[i];
        valueList.push(i);
        countList.push(totalCount);
    }

    let median;
    // 二分找中位数所在位置
    const target = Math.ceil(totalCount / 2);
    let z = countList.length - 1;
    let low = 0;
    let high = countList.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (countList[mid] < target) {
            low = mid + 1;
        } else {
            z = Math.min(z, mid);
            high = mid - 1;
        }
    }

    if (totalCount & 1) {
        median = valueList[z];
    } else {
        const value1 = valueList[z];
        const value2 = valueList[target < countList[z] ? z : z + 1];
        median = (value1 + value2) / 2;
    }

    return [
        min,
        max,
        sum / totalCount,
        median,
        modeValue,
    ];
};
