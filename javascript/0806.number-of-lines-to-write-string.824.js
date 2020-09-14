// 水题
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
    let lineCount = 1;
    let curLine = 0;
    for (let i = 0; i < S.length; i++) {
        const width = widths[S.charCodeAt(i) - 97];
        if (curLine + width < 101) {
            // 还能放得下，更新占据的空间
            curLine += width;
        } else {
            // 放不下了，换行
            lineCount++;
            curLine = width;
        }
    }
    return [
        lineCount, curLine, ];
};
