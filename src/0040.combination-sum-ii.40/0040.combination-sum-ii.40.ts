function combinationSum2 (candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const result:number[][] = [];
    backTracking(
        candidates,
        0,
        target,
        new Array(candidates.length).fill(false),
        [] as number[],
        result
    );
    return result;
}

function backTracking (candidates:number[], index:number, rest:number, used:boolean[], sequence:number[], result:number[][]) {
    if (rest === 0) {
        result.push(sequence.slice());
        return;
    }

    if (rest < 0 || index === candidates.length) {
        return;
    }
    backTracking(
        candidates,
        index + 1,
        rest,
        used,
        sequence,
        result
    );
    if (index > 0 && candidates[index] === candidates[index - 1] && !used[index - 1]) {
        return;
    }
    sequence.push(candidates[index]);
    used[index] = true;
    backTracking(candidates, index + 1, rest - candidates[index], used, sequence, result);
    used[index] = false;
    sequence.pop();
}
