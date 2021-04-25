/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
    let result = 0;
    const datas = arrays.map((item) => {
        return {
            min: item[0],
            max: item[item.length - 1],
        };
    });
    const sortByMins = [...datas, ].sort((a, b) => a.min - b.min);
    const sortByMaxs = [...datas, ].sort((a, b) => b.max - a.max);
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (sortByMins[i] === sortByMaxs[j]) {
                continue;
            }
            result = Math.max(result, sortByMaxs[j].max - sortByMins[i].min);
        }
    }

    return result;
};
