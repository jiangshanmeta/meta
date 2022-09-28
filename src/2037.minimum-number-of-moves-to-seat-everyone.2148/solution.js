/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < seats.length; i++) {
        result += Math.abs(seats[i] - students[i]);
    }
    return result;
};
