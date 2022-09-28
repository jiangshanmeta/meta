/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
// Given the availability time slots arrays slots1 and slots2 of two people and a meeting duration duration, return the earliest time slot that works for both of them and is of duration duration.
// If there is no common time slot that satisfies the requirements, return an empty array.
// The format of a time slot is an array of two elements [start, end] representing an inclusive time range from start to end.
// It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1.
var minAvailableDuration = function (slots1, slots2, duration) {
    // 按照开始时间排序
    slots1.sort((a, b) => a[0] - b[0]);
    slots2.sort((a, b) => a[0] - b[0]);
    let index1 = 0;
    let index2 = 0;
    while (index1 < slots1.length && index2 < slots2.length) {
        // 这个人这个时间段不够duration
        if (slots1[index1][1] - slots1[index1][0] < duration) {
            index1++;
            continue;
        }
        if (slots2[index2][1] - slots2[index2][0] < duration) {
            index2++;
            continue;
        }
        // 开始时间比另一个的结束时间靠后 另一个人开始考虑下一个时间段
        if (slots1[index1][0] >= slots2[index2][1]) {
            index2++;
            continue;
        }
        if (slots1[index1][1] <= slots2[index2][0]) {
            index1++;
            continue;
        }
        // 有交集 看开始时间和结束时间
        const start = Math.max(slots1[index1][0], slots2[index2][0]);
        const end = Math.min(slots1[index1][1], slots2[index2][1]);
        if (end - start >= duration) {
            return [
                start, start + duration, ];
        }
        // 时间不够 开始时间较小的那个后移
        if (slots1[index1][0] < slots2[index2][0]) {
            index1++;
        } else {
            index2++;
        }
    }
    return [];
};
