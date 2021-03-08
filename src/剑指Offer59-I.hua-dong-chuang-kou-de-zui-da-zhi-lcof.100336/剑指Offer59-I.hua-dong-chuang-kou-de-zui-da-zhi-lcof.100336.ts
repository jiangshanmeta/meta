function maxSlidingWindow(nums: number[], k: number): number[] {
    if(k === 0){
        return []
    }
    const helper:number[] = [];
    for(let i=0;i<k-1;i++){
        const val = nums[i];
        while(helper.length && val>helper[helper.length-1]){
            helper.pop();
        }
        helper.push(val);
    }
    const result:number[] = [];
    for(let i=k-1;i<nums.length;i++){
        const val = nums[i];
        while(helper.length && val>helper[helper.length-1]){
            helper.pop();
        }
        helper.push(val);
        result.push(helper[0]);
        if(helper[0] === nums[i-k+1]){
            helper.shift()
        }
    }
    return result
};