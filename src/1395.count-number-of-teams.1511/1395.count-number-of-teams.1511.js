/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
    const smaller = new Array(rating.length).fill(0);
    const larger = new Array(rating.length).fill(0);
    for (let i = 1; i < rating.length; i++) {
        for (let j = 0; j < i; j++) {
            rating[j] < rating[i] && smaller[i]++;
            rating[j] > rating[i] && larger[i]++;
        }
    }
    let result = 0;
    for (let i = 2; i < rating.length; i++) {
        for (let j = 1; j < i; j++) {
            if (rating[j] < rating[i]) {
                result += smaller[j];
            } else if (rating[j] > rating[i]) {
                result += larger[j];
            }
        }
    }
    return result;
};
