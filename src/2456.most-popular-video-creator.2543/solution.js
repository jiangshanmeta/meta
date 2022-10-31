/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
    const map = new Map();

    const result = [];
    let maxView = 0;
    for (let i = 0; i < creators.length; i++) {
        const item = map.has(creators[i]) ? map.get(creators[i]) : {
            total: 0,
            video: '',
            view: 0,
        };

        item.total += views[i];
        if (views[i] > item.view || (views[i] === item.view && (item.video === '' || ids[i] < item.video))) {
            item.video = ids[i];
            item.view = views[i];
        }

        if (item.total > maxView) {
            maxView = item.total;
            result.length = 0;
            result.push([creators[i], item.video, ]);
        } else if (item.total === maxView) {
            result.push([creators[i], item.video, ]);
        }
        map.set(creators[i], item);
    }
    return result;
};
