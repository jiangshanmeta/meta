/**
 * @param {number[][]} points
 * @return {number}
 */
// 就是暴力算
// 根据坐标求三角形面积公式搜一下就好了
var largestTriangleArea = function (points) {
    let max = 0;
    const L = points.length;
    for (let i = 0; i < L - 2; i++) {
        const [
            a, b, ] = points[i];
        for (let j = i + 1; j < L - 1; j++) {
            const [
                c, d, ] = points[j];
            for (let k = j + 1; k < L; k++) {
                const [
                    e, f, ] = points[k];
                const S = Math.abs(a * d + c * f + b * e - d * e - b * c - a * f);
                if (S > max) {
                    max = S;
                }
            }
        }
    }
    return max / 2;
};
