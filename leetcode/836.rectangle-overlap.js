/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */

// 一个思路和223题类似，假设相交，看相交后的XY
var isRectangleOverlap = function(rec1, rec2) {
    // 排除不相交的情况
    // 即排除x2<=x3 || x1>=x4 || y2<=y3 || y1>=y4
    return !(
        rec1[0]>=rec2[2] ||
        rec2[0]>=rec1[2] ||
        rec1[1]>=rec2[3] ||
        rec2[1]>=rec1[3]
    )
};