/**
 * @param {string} text
 * @param {number} w
 * @param {number} h
 * @param {number[]} fonts
 * @param {FontInfo} fontInfo
 * @return {number}
 */
var maxFont = function (text, w, h, fonts, fontInfo) {
    let resultIndex = -1;
    let low = 0;
    let high = fonts.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const fs = fonts[mid];
        const calcH = fontInfo.getHeight(fs);
        if (calcH > h) {
            high = mid - 1;
            continue;
        }
        let totalW = 0;
        for (let i = 0; i < text.length; i++) {
            totalW += fontInfo.getWidth(fs, text[i]);
            if (totalW > w) {
                break;
            }
        }
        if (totalW > w) {
            high = mid - 1;
        } else {
            resultIndex = Math.max(resultIndex, mid);
            low = mid + 1;
        }
    }
    if (resultIndex === -1) {
        return -1;
    }
    return fonts[resultIndex];
};
