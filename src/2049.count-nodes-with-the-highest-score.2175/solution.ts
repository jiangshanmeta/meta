function countHighestScoreNodes (parents: number[]): number {
    const N = parents.length;
    const children = new Array<number[]>(N);
    for (let i = 0; i < N; i++) {
        children[i] = [];
    }
    for (let i = 1; i < parents.length; i++) {
        children[parents[i]].push(i);
    }
    const childCount = new Array<number>(N);
    const dfs = (index:number):number => {
        const currentChilds = children[index];
        childCount[index] = currentChilds.reduce((acc, i) => dfs(i) + acc, currentChilds.length);
        return childCount[index];
    };
    dfs(0);

    let maxMulty = 0;
    let res = 0;
    for (let i = 0; i < N; i++) {
        const childCounts = children[i].map(index => childCount[index] + 1);
        const sum = childCounts.reduce((acc, item) => acc + item, 0);
        const rest = Math.max(N - sum - 1, 1);
        const currentMulti = childCounts.length === 0 ? rest : rest * childCounts.reduce((acc, item) => acc * item, 1);

        if (currentMulti > maxMulty) {
            maxMulty = currentMulti;
            res = 1;
        } else if (currentMulti === maxMulty) {
            res++;
        }
    }
    return res;
}
