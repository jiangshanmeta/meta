function combinationSum (candidates: number[], target: number): number[][] {
    const result:number[][] = [];
    backTracking(candidates, 0, [], 0, target, result);
    return result;
}

function backTracking (candidates:number[], start:number, seq:number[], current:number, target:number, result:number[][]) {
    if (current >= target) {
        if (current === target) {
            result.push([...seq, ]);
        }
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        seq.push(candidates[i]);
        backTracking(candidates, i, seq, current + candidates[i], target, result);
        seq.pop();
    }
}
