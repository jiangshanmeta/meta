/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function (color) {
    const candidates = [0x0, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff, ];
    const datas = [
        parseInt(color.slice(1, 3), 16),
        parseInt(color.slice(3, 5), 16),
        parseInt(color.slice(5), 16),
    ].map((num) => {
        return binarySearch(num).toString(16).padStart(2, '0');
    });

    function binarySearch (num) {
        let index = 0;
        let low = 0;
        let high = candidates.length - 1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (candidates[mid] > num) {
                high = mid - 1;
            } else {
                index = Math.max(mid, index);
                low = mid + 1;
            }
        }
        if (index + 1 < candidates.length && candidates[index + 1] - num < num - candidates[index]) {
            return candidates[index + 1];
        } else {
            return candidates[index];
        }
    }

    return `#${datas.join('')}`;
};
