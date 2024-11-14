function combinationSum2 (candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const result:number[][] = [];
    backTracking(candidates, new Array<boolean>(candidates.length).fill(false), 0, 0, [], target, result);
    return result;
}

function backTracking (candidates:number[], visited:boolean[], start:number, current:number, seq:number[], target:number, result:number[][]) {
    if (current >= target) {
        if (current === target) {
            result.push([...seq, ]);
        }
        return;
    }
    for (let i = start; i < candidates.length; i++) {
        if (i > 0 && candidates[i] === candidates[i - 1] && !visited[i - 1]) {
            continue;
        }
        visited[i] = true;
        seq.push(candidates[i]);
        backTracking(candidates, visited, i + 1, current + candidates[i], seq, target, result);
        seq.pop();
        visited[i] = false;
    }
}
