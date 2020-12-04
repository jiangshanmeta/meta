function threeConsecutiveOdds(arr: number[]): boolean {
    for(let i=2;i<arr.length;i++){
        if( arr[i]%2 === 1 && arr[i-1]%2 === 1 && arr[i-2]%2 === 1){
            return true;
        }
    }
    return false;
};