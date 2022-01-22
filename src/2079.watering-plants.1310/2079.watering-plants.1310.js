/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
    let result = 0;
    let rest = capacity;
    for (let i = 0; i < plants.length; i++) {
        if (rest < plants[i]) {
            result += 2 * i + 1;
            rest = capacity - plants[i];
        } else {
            result++;
            rest -= plants[i];
        }
    }
    return result;
};
