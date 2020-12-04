// In a social group, there are N people, with unique integer ids from 0 to N-1.
// We have a list of logs, where each logs[i] = [timestamp, id_A, id_B] contains a non-negative integer timestamp, and the ids of two different people.
// Each log represents the time in which two different people became friends.  Friendship is symmetric: if A is friends with B, then B is friends with A.
// Let's say that person A is acquainted with person B if A is friends with B, or A is a friend of someone acquainted with B.
// Return the earliest time for which every person became acquainted with every other person. Return -1 if there is no such earliest time.

/**
 * @param {number[][]} logs
 * @param {number} N
 * @return {number}
 */
// 其实是问这些节点最早什么时候归并到一个集合中
// 并查集
var earliestAcq = function (logs, N) {
    // logs不保证顺序，按照ts时间从小到大排列
    logs.sort((a, b) => a[0] - b[0]);
    // parentIds 为所属集合id 默认为自己
    const parentIds = new Array(N);
    for (let i = 0; i < N; i++) {
        parentIds[i] = i;
    }
    let setCount = N;
    for (let i = 0; i < logs.length; i++) {
        const [
            ts, ida, idb, ] = logs[i];
        let pa = parentIds[ida];
        while (parentIds[pa] !== pa) {
            pa = parentIds[pa];
        }
        let pb = parentIds[idb];
        while (parentIds[pb] !== pb) {
            pb = parentIds[pb];
        }
        // 属于不同集合 合并 集合数量减一
        if (pa !== pb) {
            setCount--;
            if (setCount === 1) {
                return ts;
            }
            const cp = Math.min(pa, pb);
            parentIds[pa] = cp;
            parentIds[pb] = cp;
            parentIds[ida] = cp;
            parentIds[idb] = cp;
        }
    }
    return -1;
};
