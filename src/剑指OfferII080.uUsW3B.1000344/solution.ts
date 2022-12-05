function combine (n: number, k: number): number[][] {
    const result:number[][] = [];
    const backTracking = (index:number, seq:number[]) => {
        if (seq.length === k) {
            result.push([...seq, ]);
            return;
        }
        if (index === n + 1) {
            return;
        }
        backTracking(index + 1, seq);

        seq.push(index);
        backTracking(index + 1, seq);
        seq.pop();
    };
    backTracking(1, []);
    return result;
}
