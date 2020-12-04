// Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.
// Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
    const ids = [];
    const groupBy = {};
    for (let i = 0; i < items.length; i++) {
        const [
            id, score, ] = items[i];
        // 按照id聚合分数
        if (!groupBy[id]) {
            ids.push(id);
            groupBy[id] = [];
        }
        groupBy[id].push(score);
    }

    return ids.map((id) => {
        const scores = groupBy[id].sort((a, b) => b - a);
        let sum = 0;
        // 取最高的前五个分数
        for (let i = 0; i < 5; i++) {
            sum += scores[i];
        }
        return [
            id, parseInt(sum / 5), ];
    });
};
