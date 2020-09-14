/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// 就是贪心
var numRescueBoats = function (people, limit) {
    let count = 0;
    // 按照从胖到瘦排列
    people.sort((a, b) => b - a);
    let index1 = 0;
    let index2 = people.length - 1;
    // 优先放胖子(尽可能胖)，看能不能捎带一个瘦子(尽可能瘦)
    while (index1 < index2) {
        (people[index1] + people[index2]) < (limit + 1) && index2--;
        index1++;
        count++;
    }
    // 最后一个人的情况
    index1 === index2 && count++;
    return count;
};
