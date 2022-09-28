/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
    const map = new Map();
    for (let i = 0; i < keyName.length; i++) {
        const ts = Number(keyTime[i].slice(0, 2)) * 60 + Number(keyTime[i].slice(3));
        if (map.has(keyName[i])) {
            const list = map.get(keyName[i]);
            list.push(ts);
        } else {
            map.set(keyName[i], [ts, ]);
        }
    }
    const result = [];
    for (const [name, times, ] of map.entries()) {
        times.sort((a, b) => a - b);
        for (let i = 2; i < times.length; i++) {
            if (times[i - 2] >= times[i] - 60) {
                result.push(name);
                break;
            }
        }
    }
    result.sort();
    return result;
};
