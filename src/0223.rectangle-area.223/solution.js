/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */

// 难点在于交集面积的计算
// 以Y坐标为例，y1 第一个下Y y2 第一个上Y y3 第二个下Y y3 第二个上Y
// 有交集，则下Y为 max(y1,y3) 上Y为min(y2,y4)
// 必须上Y>下Y才有Y坐标交集
// X同理
var computeArea = function (A, B, C, D, E, F, G, H) {
    const itersectionY1 = Math.max(B, F);
    const itersectionY2 = Math.min(D, H);
    const itersectionX1 = Math.max(A, E);
    const itersectionX2 = Math.min(C, G);
    const itersection = (itersectionY2 > itersectionY1) && (itersectionX2 > itersectionX1)
        ? (itersectionY2 - itersectionY1) * (itersectionX2 - itersectionX1) : 0;
    return (D - B) * (C - A) + (H - F) * (G - E) - itersection;
};
