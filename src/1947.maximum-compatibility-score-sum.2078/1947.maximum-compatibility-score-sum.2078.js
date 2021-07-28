/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function (students, mentors) {
    const M = students.length;
    const N = students[0].length;
    const studentsA = students.map((answers) => {
        let result = 0;
        for (let i = 0; i < answers.length; i++) {
            result = result * 2 + answers[i];
        }
        return result;
    });
    const mentorsA = mentors.map((answers) => {
        let result = 0;
        for (let i = 0; i < answers.length; i++) {
            result = result * 2 + answers[i];
        }
        return result;
    });

    let result = 0;
    const used = new Array(M).fill(false);
    const backTracking = (i, total) => {
        if (i === M) {
            result = Math.max(result, total);
            return;
        }
        for (let j = 0; j < M; j++) {
            if (used[j]) {
                continue;
            }
            used[j] = true;
            backTracking(i + 1, total + N - count1(studentsA[i] ^ mentorsA[j]));
            used[j] = false;
        }
    };
    backTracking(0, 0);

    return result;
};

function count1 (num) {
    let result = 0;
    while (num) {
        result++;
        num = num & (num - 1);
    }
    return result;
}
