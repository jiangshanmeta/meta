/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (height.length < 2) {
        return 0;
    }
    var area = 0;
    var leftIndex = 0;
    var rightIndex = height.length - 1;

    while (leftIndex < rightIndex) {
        area = Math.max(area, Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex));

        if (height[leftIndex] < height[rightIndex]) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }
    return area;
};
