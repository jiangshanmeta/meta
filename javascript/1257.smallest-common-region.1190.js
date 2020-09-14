/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
// LCA
var findSmallestRegion = function (regions, region1, region2) {
    // 子节点=>父节点
    const parentMap = {};
    for (let i = 0; i < regions.length; i++) {
        for (let j = 1; j < regions[i].length; j++) {
            parentMap[regions[i][j]] = regions[i][0];
        }
        if (!parentMap[regions[i][0]]) {
            parentMap[regions[i][0]] = regions[i][0];
        }
    }

    const list1 = [
        region1, ];
    const list2 = [
        region2, ];
    while (parentMap[region1] !== region1) {
        list1.push(parentMap[region1]);
        region1 = parentMap[region1];
    }
    while (parentMap[region2] !== region2) {
        list2.push(parentMap[region2]);
        region2 = parentMap[region2];
    }
    list1.reverse();
    list2.reverse();
    for (let i = Math.min(list1.length, list2.length) - 1; i > -1; i--) {
        if (list1[i] === list2[i]) {
            return list1[i];
        }
    }
};
