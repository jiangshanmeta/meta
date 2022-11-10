function calcEquation (equations: string[][], values: number[], queries: string[][]): number[] {
    const map = new Map<string, Map<string, number>>();
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
    const idMap = new Map<string, number>();
    let id = 0;
    const groupWords = (w:string) => {
        idMap.set(w, id);
        for (const nextW of map.get(w).keys()) {
            if (!idMap.has(nextW)) {
                groupWords(nextW);
            }
        }
    };
    for (const key of map.keys()) {
        if (!idMap.has(key)) {
            id++;
            groupWords(key);
        }
    }

    const visited = new Map<string, boolean>();
    const dfs = (current:string, target:string, path:string[]) => {
        path.push(current);
        visited.set(current, true);
        if (current === target) {
            return true;
        }
        let found = false;
        for (const v of map.get(current).keys()) {
            if (found) {
                break;
            }
            if (!visited.has(v)) {
                found = dfs(v, target, path);
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
        visited.clear();
        const path:string[] = [];

        dfs(a, b, path);
        let result = 1;
        for (let i = 0; i < path.length - 1; i++) {
            result *= map.get(path[i]).get(path[i + 1]);
        }
        return result;
    });
}
