function checkIfExist(arr: number[]): boolean {
    const set = new Set<number>();
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i]*2)){
            return true;
        }
        if( (arr[i]&1) === 0 && set.has(arr[i]/2)){
            return true;
        }
        set.add(arr[i]);
    }
    return false;
};