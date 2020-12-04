/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
    const map = {};
    const result = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (map[name] === undefined) {
            result.push(name);
            map[name] = 1;
        } else {
            let index = map[name];
            while (map[`${name}(${index})`] !== undefined) {
                index++;
            }
            result.push(`${name}(${index})`);
            map[name] = index + 1;
            map[`${name}(${index})`] = 1;
        }
    }
    return result;
};
