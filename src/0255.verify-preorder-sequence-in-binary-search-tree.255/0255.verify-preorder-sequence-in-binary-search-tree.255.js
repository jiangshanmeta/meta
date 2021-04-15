/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
    return verify(preorder, 0, preorder.length - 1, -Infinity, Infinity);
};

function verify (preorder, start, end, min, max) {
    if (start > end) {
        return true;
    }
    if (preorder[start] < min || preorder[start] > max) {
        return false;
    }
    let rightStart = end + 1;
    for (let i = start + 1; i <= end; i++) {
        if (preorder[i] > preorder[start]) {
            rightStart = i;
            break;
        }
    }
    // console.log(start,end,min,max,rightStart)

    return verify(preorder, start + 1, rightStart - 1, min, preorder[start]) && verify(preorder, rightStart, end, preorder[start], max);
}
