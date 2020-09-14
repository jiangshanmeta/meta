/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    const map = {};
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (map[answer] === undefined) {
            map[answer] = 1;
        } else {
            map[answer]++;
        }
    }

    let minNum = 0;
    const set = Object.keys(map);
    for (let i = 0; i < set.length; i++) {
        // 一组answer+1只兔子
        const answer = +set[i];
        // count只兔子 尽可能分到尽可能少的组内
        const count = map[answer];
        minNum += Math.ceil(count / (answer + 1)) * (answer + 1);
    }

    return minNum;
};
