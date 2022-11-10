function alienOrder (words: string[]): string {
    const graph = new Map<string, string[]>();
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!graph.has(words[i][j])) {
                graph.set(words[i][j], []);
            }
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        let hasDiff = false;
        for (let j = 0; j < Math.min(words[i].length, words[i + 1].length); j++) {
            const a = words[i][j];
            const b = words[i + 1][j];
            if (a !== b) {
                graph.get(a).push(b);
                hasDiff = true;
                break;
            }
        }
        if (!hasDiff && words[i].length > words[i + 1].length) {
            return '';
        }
    }

    const visited = new Map<string, boolean>();
    const onStack = new Set<string>();
    let hasCircle = false;
    const post:string[] = [];
    const dfs = (v:string) => {
        visited.set(v, true);
        onStack.add(v);

        for (const nextV of graph.get(v)) {
            if (nextV === v) {
                continue;
            }
            if (hasCircle) {
                break;
            }
            if (!visited.has(nextV)) {
                dfs(nextV);
            } else if (onStack.has(nextV)) {
                hasCircle = true;
            }
        }

        onStack.delete(v);
        post.push(v);
    };
    for (const v of graph.keys()) {
        if (!visited.has(v) && !hasCircle) {
            dfs(v);
        }
    }
    if (hasCircle) {
        return '';
    }

    return post.reverse().join('');
}
