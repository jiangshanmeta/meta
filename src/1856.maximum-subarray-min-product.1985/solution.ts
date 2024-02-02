function maxSumMinProduct(nums: number[]): number {
    let result = 0n;
    const stack:number[] = [];
    const sums = new Array<number>(nums.length+1);
    sums[0] = 0;

    for(let i=0;i<nums.length;i++){
        sums[i+1] = sums[i]+nums[i];
        while(stack.length && nums[stack[stack.length-1]]>=nums[i]){
            const index = stack.pop()!;
            const left = stack.length>0?stack[stack.length-1]: -1;  

            const sum = sums[i]-sums[left+1];
            const product = BigInt(sum)*BigInt(nums[index]);
            if(product>result){
                result = product;
            }
        }
        stack.push(i)
    }

    for(let i=stack.length-1;i>-1;i--){
        const left = i>0? stack[i-1]: -1;

        const sum = sums[nums.length]-sums[left+1];
        const product = BigInt(sum)*BigInt(nums[stack[i]]);
        if(product>result){
            result = product
        }
    }

    return Number( result%(BigInt(10**9+7)));
};