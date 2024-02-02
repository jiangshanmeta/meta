function maximumScore(nums: number[], k: number): number {
    let result = 0;
    const stack:number[] = [];
    for(let i=0;i<nums.length;i++){
        while(stack.length &&  nums[ stack[stack.length-1] ]>=nums[i] ){
            const index = stack.pop()!
            const left = stack.length>0? stack[stack.length-1]:-1;
            if(left+1<=k && i-1>=k){
                result = Math.max(result,nums[index]*(i-left-1))
            }
            
        }
        stack.push(i);
    }
    for(let i=stack.length-1;i>-1;i--){
        const left = i>0? stack[i-1]:-1;
        if(left+1<=k){
            result = Math.max(result, nums[stack[i]]*(nums.length-left-1)   )
        }
        
    }
    return result
};