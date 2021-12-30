/**
 * @param {string} street
 * @return {number}
 */
var minimumBuckets = function (street) {
    let result = 0;
    let lastBucketIndex = -1;
    let index = 0;
    while (index < street.length) {
        if (street[index] === '.') {
            index++;
            continue;
        }
        const start = index++;
        while (index < street.length && street[index] === 'H') {
            index++;
        }
        const count = index - start;

        if (count > 2) {
            return -1;
        }
        if (count === 1) {
            if (start === 0) {
                if (index === street.length) {
                    return -1;
                }
                lastBucketIndex = index;
                result++;
                continue;
            }
            if (lastBucketIndex === start - 1) {
                continue;
            }
            lastBucketIndex = index;
            result++;
        } else if (count === 2) {
            if (index === street.length || start === 0) {
                return -1;
            }
            if (lastBucketIndex !== start - 1) {
                result++;
            }
            result++;
            lastBucketIndex = index;
        }
    }
    return result;
};
