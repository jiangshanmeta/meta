/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    const map = Object.create(null);
    for (let i = 0; i < paths.length; i++) {
        map[paths[i][0]] = paths[i][1];
    }
    let city = paths[0][0];
    while (map[city]) {
        city = map[city];
    }
    return city;
};
