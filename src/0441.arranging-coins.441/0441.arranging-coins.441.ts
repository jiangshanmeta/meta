function arrangeCoins(n: number): number {
    let result = 0;
    let low = 1;
    let high = n;
    while(low<=high){
        const mid = low+((high-low)>>>1);
        const calc = mid*(mid+1)/2;
        if(calc>n){
            high = mid-1;
        }else{
            result = Math.max(result,mid);
            low = mid+1;
        }
    }
    return result
};