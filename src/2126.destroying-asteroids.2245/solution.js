/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
    asteroids.sort((a, b) => a - b);
    for (const asteroid of asteroids) {
        if (mass < asteroid) {
            return false;
        }
        mass += asteroid;
    }
    return true;
};
