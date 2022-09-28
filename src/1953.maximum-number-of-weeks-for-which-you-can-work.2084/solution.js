/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function (milestones) {
    let sum = milestones[0];
    let max = milestones[0];
    for (let i = 1; i < milestones.length; i++) {
        sum += milestones[i];
        max = Math.max(max, milestones[i]);
    }
    // sum 除了最大的剩下的总任务数
    sum -= max;
    // 当且仅当最大的一个任务数-1 <= 剩余任务数 所有任务均可完成
    if (sum >= max - 1) {
        return sum + max;
    }
    // 不能全部完成 剩余所有的任务可以完成 最大任务完成sum+1个
    return sum * 2 + 1;
};
