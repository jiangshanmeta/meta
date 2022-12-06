function dividePlayers (skill: number[]): number {
    skill.sort((a, b) => a - b);
    let result = 0;
    const sum = skill[0] + skill[skill.length - 1];
    let left = 0;
    let right = skill.length - 1;
    while (left < right) {
        if (skill[left] + skill[right] !== sum) {
            return -1;
        }
        result += skill[left++] * skill[right--];
    }
    return result;
}
