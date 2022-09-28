type pIdMap = {
    [x:string]:string;
}

function trulyMostPopular (names: string[], synonyms: string[]): string[] {
    const pIdMap:pIdMap = {};
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
    Object.keys(pIdMap).forEach((id) => {
        if (pIdMap[id] === id) {
            return;
        }
        let pId = id;
        while (pIdMap[pId] !== pId) {
            pId = pIdMap[pId];
        }
        compress(pIdMap, id, pId);
    });
    const resultMap:{[x:string]:number} = {};
    for (let i = 0; i < names.length; i++) {
        const index = names[i].indexOf('(');
        const name = names[i].slice(0, index);
        const num = +names[i].slice(index + 1, -1);
        const pId = pIdMap[name] || name;
        if (!resultMap[pId]) {
            resultMap[pId] = num;
        } else {
            resultMap[pId] += num;
        }
    }
    return Object.keys(resultMap).reduce((list, pId) => {
        list.push(`${pId}(${resultMap[pId]})`);
        return list;
    }, [] as string[]);
}

function find (pIdMap:pIdMap, id:string):string {
    if (!pIdMap[id]) {
        pIdMap[id] = id;
        return id;
    }
    let pId = id;
    while (pIdMap[pId] !== pId) {
        pId = pIdMap[pId];
    }
    compress(pIdMap, id, pId);
    return pId;
}

function compress (pIdMap:pIdMap, id:string, pId:string) {
    while (id !== pId) {
        const nextId = pIdMap[id];
        pIdMap[id] = pId;
        id = nextId;
    }
}
