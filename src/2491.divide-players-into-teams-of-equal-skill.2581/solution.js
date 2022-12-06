/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    skill.sort((a, b) => a - b);
    const sum = skill[0] + skill[skill.length - 1];
    let result = skill[0] * skill[skill.length - 1];
    let left = 1;
    let right = skill.length - 2;
    while (left < right) {
        if (skill[left] + skill[right] !== sum) {
            return -1;
        }
        result += skill[left++] * skill[right--];
    }
    return result;
};
