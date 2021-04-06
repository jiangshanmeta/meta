/**
 * @param {string[]} names
 * @param {string[]} synonyms
 * @return {string[]}
 */
var trulyMostPopular = function (names, synonyms) {
    const pIdMap = {};
    for (let i = 0; i < synonyms.length; i++) {
        const dotIndex = synonyms[i].indexOf(',');
        const nameA = synonyms[i].slice(1, dotIndex);
        const nameB = synonyms[i].slice(dotIndex + 1, -1);
        const pIdA = find(pIdMap, nameA);
        const pIdB = find(pIdMap, nameB);
        if (pIdA === pIdB) {
            continue;
        }
        if (pIdA > pIdB) {
            pIdMap[pIdA] = pIdB;
        } else {
            pIdMap[pIdB] = pIdA;
        }
    }
    const keys = Object.keys(pIdMap);
    const resultMap = {};
    for (let i = 0; i < keys.length; i++) {
        if (pIdMap[keys[i]] !== keys[i]) {
            let id = keys[i];
            while (pIdMap[id] !== id) {
                id = pIdMap[id];
            }
            compress(pIdMap, keys[i], id);
        }
    }

    for (let i = 0; i < names.length; i++) {
        const leftBracketIndex = names[i].indexOf('(');
        const name = names[i].slice(0, leftBracketIndex);
        const num = +names[i].slice(leftBracketIndex + 1, -1);
        const pName = pIdMap[name] || name;
        if (!resultMap[pName]) {
            resultMap[pName] = num;
        } else {
            resultMap[pName] += num;
        }
    }
    return Object.keys(resultMap).reduce((list, name) => {
        list.push(`${name}(${resultMap[name]})`);
        return list;
    }, []);
};

function find (map, id) {
    if (!map[id]) {
        map[id] = id;
        return id;
    }
    let pId = id;
    while (map[pId] !== pId) {
        pId = map[pId];
    }
    compress(map, id, pId);

    return pId;
}

function compress (map, id, pId) {
    while (id !== pId) {
        const tmp = map[id];
        map[id] = pId;
        id = tmp;
    }
}
