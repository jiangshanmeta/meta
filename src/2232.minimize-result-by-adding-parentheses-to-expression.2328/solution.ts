function minimizeResult (expression: string): string {
    const addIndex = expression.indexOf('+');
    const left = expression.slice(0, addIndex);
    const right = expression.slice(addIndex + 1);
    const leftCandidates:Array<[number, number]> = [
        [1, +left, ],
    ];
    for (let i = 1; i < left.length; i++) {
        leftCandidates.push([
            +left.slice(0, i),
            +left.slice(i),
        ]);
    }
    const rightCandidates:Array<[number, number]> = [
        [+right, 1, ],
    ];
    for (let i = 1; i < right.length; i++) {
        rightCandidates.push([+right.slice(0, i), +right.slice(i), ]);
    }

    let min = Infinity;
    let result = '';
    for (let i = 0; i < leftCandidates.length; i++) {
        for (let j = 0; j < rightCandidates.length; j++) {
            const num = leftCandidates[i][0] * (leftCandidates[i][1] + rightCandidates[j][0]) * rightCandidates[j][1];

            if (num < min) {
                min = num;
                result = `${i === 0 ? '' : leftCandidates[i][0]}(${leftCandidates[i][1]}+${rightCandidates[j][0]})${j === 0 ? '' : rightCandidates[j][1]}`;
            }
        }
    }

    return result;
}
