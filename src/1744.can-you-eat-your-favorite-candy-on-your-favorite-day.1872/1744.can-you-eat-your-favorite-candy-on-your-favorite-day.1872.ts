function canEat(candiesCount: number[], queries: number[][]): boolean[] {
    const prefixSum:number[] = new Array(candiesCount.length+1);
    prefixSum[0] = 0;
    for(let i=0;i<candiesCount.length;i++){
        prefixSum[i+1] = prefixSum[i]+candiesCount[i];
    }
    return queries.map(([
        favoriteType,
        favoriteDay,
        dailyCap,
    ])=>{
        const needMin = favoriteDay+1;
        const needMax = (favoriteDay+1)*dailyCap;
        const candyMin = prefixSum[favoriteType]+1;
        const candyMax = prefixSum[favoriteType+1];
        if(needMax<candyMin || needMin>candyMax){
            return false;
        }
        return true
    });
};