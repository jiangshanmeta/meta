/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const map = new Map();
    for (let i = 0; i < equations.length; i++) {
        const [a, b, ] = equations[i];
        if (!map.has(a)) {
            map.set(a, new Map());
        }
        if (!map.has(b)) {
            map.set(b, new Map());
        }
        map.get(a).set(b, values[i]);
        map.get(b).set(a, 1 / values[i]);
    }
    let id = 0;
    const idMap = new Map();

    const findGroup = (v) => {
        idMap.set(v, id);
        for (const nextV of map.get(v).keys()) {
            if (!idMap.has(nextV)) {
                findGroup(nextV);
            }
        }
    };
    for (const v of map.keys()) {
        if (!idMap.has(v)) {
            id++;
            findGroup(v);
        }
    }

    const visited = new Map();
    const dfs = (current, target, path) => {
        path.push(current);
        visited.set(current, true);
        if (current === target) {
            return true;
        }
        let found = false;
        for (const nextV of map.get(current).keys()) {
            if (found) {
                break;
            }
            if (!visited.has(nextV)) {
                found = dfs(nextV, target, path);
            }
        }
        if (found) {
            return true;
        }
        path.pop();

        return false;
    };

    return queries.map(([a, b, ]) => {
        if (!map.has(a) || !map.has(b) || idMap.get(a) !== idMap.get(b)) {
            return -1;
        }
        if (a === b) {
            return 1;
        }
        const path = [];
        visited.clear();
        dfs(a, b, path);
        let result = 1;
        for (let i = 0; i < path.length - 1; i++) {
            result *= map.get(path[i]).get(path[i + 1]);
        }

        return result;
    });
};
