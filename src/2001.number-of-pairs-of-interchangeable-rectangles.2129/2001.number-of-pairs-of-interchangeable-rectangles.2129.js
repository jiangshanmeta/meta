/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
    const map = new Map();
    for (const [w, h, ] of rectangles) {
        const ratio = w / h;
        if (map.has(ratio)) {
            map.set(ratio, map.get(ratio) + 1);
        } else {
            map.set(ratio, 1);
        }
    }
    let result = 0;
    for (const pair of map.values()) {
        result += pair * (pair - 1) / 2;
    }
    return result;
};
