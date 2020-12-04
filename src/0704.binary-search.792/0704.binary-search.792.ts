function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length-1;
    while(low<=high){
        const mid = low + ((high-low)>>1);
        if(nums[mid]<target){
            low = mid+1;
        }else if(nums[mid]>target){
            high = mid-1;
        }else{
            return mid;
        }
    }
    return -1;
};