function mySqrt(x: number): number {
    let low = 0;
    let high = x;
    let result = 0;
    while(low<=high){
        const mid = low + ((high-low)>>>1);
        const square = mid*mid;
        if(square>x){
            high = mid-1;
        }else if(square<x){
            result = Math.max(result,mid);
            low = mid+1;
        }else{
            return mid;
        }
    }
    return result;
};