function specialArray(nums: number[]): number {
    // xs[i]表示有多少个元素>=i
    const xs:number[] = new Array(nums.length+1).fill(0);
    // 第一步xs[i] 表示有多少个元素等于i (其中大于nums.length的按nums.length算)
    for(let i=0;i<nums.length;i++){
        const num:number = Math.min(nums[i],nums.length);
        xs[num]++;
    }
    for(let i=xs.length-1;i>-1;i--){
        if(i+1<xs.length){
            xs[i] += xs[i+1];
        }
        
        if(xs[i] === i){
            return i;
        }
    }
    return -1;
};