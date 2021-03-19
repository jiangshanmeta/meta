function maxCoins(piles: number[]): number {
    piles.sort((a,b)=>b-a);
    let result = 0;
    for(let i=1;i<piles.length*2/3;i+=2){
        result += piles[i];
    }
    return result
};