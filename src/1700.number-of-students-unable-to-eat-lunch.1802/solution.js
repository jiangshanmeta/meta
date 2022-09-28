/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let one = 0;
    let zero = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i] === 0) {
            zero++;
        } else {
            one++;
        }
    }
    for (let i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i] === 0) {
            if (zero > 0) {
                zero--;
            } else {
                break;
            }
        } else {
            if (one > 0) {
                one--;
            } else {
                break;
            }
        }
    }
    return zero + one;
};
