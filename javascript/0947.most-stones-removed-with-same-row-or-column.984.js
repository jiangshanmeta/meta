/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    const enqueued = new Array(stones.length).fill(false);
    const rows = {};
    const cols = {};
    const indexMap = {};
    for (let i = 0; i < stones.length; i++) {
        if (rows[stones[i][0]] === undefined) {
            rows[stones[i][0]] = [
                stones[i], ];
        } else {
            rows[stones[i][0]].push(stones[i]);
        }
        if (cols[stones[i][1]] === undefined) {
            cols[stones[i][1]] = [
                stones[i], ];
        } else {
            cols[stones[i][1]].push(stones[i]);
        }
        indexMap[`${stones[i][0]},${stones[i][1]}`] = i;
    }

    let result = 0;
    for (let i = 0; i < enqueued.length; i++) {
        if (enqueued[i]) {
            continue;
        }
        enqueued[i] = true;
        const stack = [
            stones[i], ];
        while (stack.length) {
            const node = stack.pop();
            for (let j = 0; j < rows[node[0]].length; j++) {
                const relativeNode = rows[node[0]][j];
                if (enqueued[indexMap[`${relativeNode[0]},${relativeNode[1]}`]]) {
                    continue;
                }
                enqueued[indexMap[`${relativeNode[0]},${relativeNode[1]}`]] = true;
                stack.push(relativeNode);
                result++;
            }
            for (let j = 0; j < cols[node[1]].length; j++) {
                const relativeNode = cols[node[1]][j];
                if (enqueued[indexMap[`${relativeNode[0]},${relativeNode[1]}`]]) {
                    continue;
                }
                enqueued[indexMap[`${relativeNode[0]},${relativeNode[1]}`]] = true;
                stack.push(relativeNode);
                result++;
            }
        }
    }
    return result;
};
