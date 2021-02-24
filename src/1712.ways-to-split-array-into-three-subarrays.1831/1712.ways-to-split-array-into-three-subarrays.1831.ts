function waysToSplit(nums: number[]): number {
    let result = 0;
    let mod = 10**9+7;
    const prefixSum:number[] = new Array(nums.length+1);
    prefixSum[0] = 0;
    for(let i=0;i<nums.length;i++){
        prefixSum[i+1] = prefixSum[i]+nums[i];
    }
    for(let i=0;i<nums.length-2;i++){
        const leftSum = prefixSum[i+1];
        const midLeft = find1(prefixSum,leftSum,i+1,nums.length-2);
        if(midLeft === -1){
            break;
        }
        const midRight = find2(prefixSum,i+1,midLeft,nums.length-2);
        if(midRight === -1){
            continue;
        }
        result = (result+midRight-midLeft+1)%mod;
    }

    return result;
};

function find1(prefixSum:number[],leftSum:number,start:number,high:number):number{
    let low = start;
    let result = Infinity;
    while(low<=high){
        const mid = (low+high) >> 1;
        const midSum = prefixSum[mid+1]-prefixSum[start];
        if(midSum>=leftSum){
            result = Math.min(result,mid);
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    if(result === Infinity){
        return -1;
    }
    return result;
}

function find2(prefixSum:number[],start:number,low:number,high:number):number{
    let result = -1;
    while(low<=high){
        const mid = (low+high)>>1;
        const rightSum = prefixSum[prefixSum.length-1]-prefixSum[mid+1];
        const midSum = prefixSum[mid+1]-prefixSum[start];
        if(rightSum<midSum){
            high = mid-1;
        }else{
            result = Math.max(result,mid);
            low = mid+1;
        }
    }
    
    return result;
}