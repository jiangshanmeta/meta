/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const result = [];
    for (let i = 0; i < asteroids.length; i++) {
        const weight = asteroids[i];
        if (weight > 0) {
            result.push(weight);
        } else {
            let destroyed = false;
            while (result.length && result[result.length - 1] > 0) {
                const last = result[result.length - 1];
                const diff = last + weight;
                if (diff < 0) {
                    result.pop();
                } else {
                    destroyed = true;
                    if (diff === 0) {
                        result.pop();
                    }
                    break;
                }
            }
            !destroyed && result.push(weight);
        }
    }
    return result;
};
