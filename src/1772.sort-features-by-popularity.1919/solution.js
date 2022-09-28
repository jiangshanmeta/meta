/**
 * @param {string[]} features
 * @param {string[]} responses
 * @return {string[]}
 */
var sortFeatures = function (features, responses) {
    const responsesMap = responses.map((item) => {
        const sentense = item.split(' ');
        return sentense.reduce((obj, item) => {
            obj[item] = true;
            return obj;
        }, {});
    });
    const countMap = features.reduce((obj, feature) => {
        let count = 0;
        for (let i = 0; i < responsesMap.length; i++) {
            if (responsesMap[i][feature]) {
                count++;
            }
        }
        obj[feature] = count;
        return obj;
    }, {});

    const indexMap = features.reduce((obj, item, index) => {
        obj[item] = index;
        return obj;
    }, {});

    return features.sort((a, b) => {
        const count1 = countMap[a];
        const count2 = countMap[b];
        if (count1 > count2) {
            return -1;
        } else if (count1 < count2) {
            return 1;
        }
        return indexMap[a] < indexMap[b] ? -1 : 1;
    });
};
