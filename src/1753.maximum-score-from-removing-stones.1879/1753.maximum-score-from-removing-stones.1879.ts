function maximumScore(a: number, b: number, c: number): number {
    const list = [a,b,c].sort((a,b)=>a-b);
    let result = 0;
    if(list[0]+list[1]>list[2]){
        const step = Math.min(list[0],(list[0]+list[1]+1-list[2])>>1);
        list[0] -= step;
        list[1] -= step;
        result += step;
    }
    result += (list[0]+list[1]);
    return result
};