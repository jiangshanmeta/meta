/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    const map = {};
    let result = 0;
    for (let i = 0; i < colors.length; i++) {
        if (!map[colors[i]]) {
            map[colors[i]] = [i, i, ];
        } else {
            map[colors[i]][1] = i;
        }
    }
    const colorKeys = Object.keys(map);
    for (let i = 0; i < colorKeys.length; i++) {
        for (let j = i + 1; j < colorKeys.length; j++) {
            const [start1, end1, ] = map[colorKeys[i]];
            const [start2, end2, ] = map[colorKeys[j]];
            result = Math.max(
                result,
                Math.abs(end2 - start1),
                Math.abs(end2 - end1),
                Math.abs(end1 - start2)
            );
        }
    }
    return result;
};
