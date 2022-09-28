/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    // 先排序 这样子目录会紧挨着父目录
    folder.sort();
    const result = [];
    for (let i = 0; i < folder.length; i++) {
        // 判断前一个是否是父目录 注意这个/ 因为有 /a /ab 这种情况
        if (result.length === 0 || !folder[i].startsWith(result[result.length - 1] + '/')) {
            result.push(folder[i]);
        }
    }
    return result;
};
