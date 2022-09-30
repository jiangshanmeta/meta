/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, ];
    const daysBeforeMonth = [0, ];
    for (let i = 0; i < daysPerMonth.length - 1; i++) {
        daysBeforeMonth[i + 1] = daysBeforeMonth[i] + daysPerMonth[i];
    }
    const parse = (s) => {
        const [m, d, ] = s.split('-');
        return daysBeforeMonth[+m - 1] + (+d);
    };

    const start = Math.max(
        parse(arriveAlice),
        parse(arriveBob)
    );
    const end = Math.min(
        parse(leaveAlice),
        parse(leaveBob)
    );

    return Math.max(0, end - start + 1);
};
