function subArrayRanges(nums: number[]): number {
    let result = 0n;
    const stack1:number[] = [];
    const stack2:number[] = [];
    for(let i=0;i<nums.length;i++){
        while(stack1.length && nums[stack1[stack1.length-1]]>=nums[i]){
            const index = stack1.pop()!;
            const left = stack1.length>0? stack1[stack1.length-1]:-1;
            result -= BigInt(nums[index])*BigInt(index-left)*BigInt(i-index);
        }
        stack1.push(i);

        while(stack2.length && nums[stack2[stack2.length-1]]<=nums[i]){
            const index = stack2.pop()!;
            const left = stack2.length>0? stack2[stack2.length-1]:-1;
            result += BigInt(nums[index])*BigInt(index-left)*BigInt(i-index);
        }
        stack2.push(i);
    }

    for(let i=stack1.length-1;i>-1;i--){
        const left = i>0? stack1[i-1]:-1;
        result -= BigInt(nums[stack1[i]])*BigInt(stack1[i]-left)*BigInt(nums.length-stack1[i] );
    }
    for(let i=stack2.length-1;i>-1;i--){
        const left = i>0? stack2[i-1]:-1;
        result += BigInt(nums[stack2[i]])*BigInt(stack2[i]-left)*BigInt(nums.length-stack2[i]);
    }

    return Number(result);
};