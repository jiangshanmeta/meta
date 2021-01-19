function nextGreaterElements(nums: number[]): number[] {
    const stackNum:number[] = [];
    const stackIndex:number[] = [];
    const result:number[] = new Array(nums.length).fill(-1);
    for(let i=0;i<nums.length;i++){
        const num = nums[i];
        while(stackNum.length && stackNum[stackNum.length-1]<num){
            const index = stackIndex.pop();
            result[index] = num;
            stackNum.pop();
        }
        stackNum.push(num);
        stackIndex.push(i);
    }
    for(let i=0;i<nums.length;i++){
        if(stackNum.length === 0){
            break;
        }
        const num = nums[i];
        while(stackNum.length && stackNum[stackNum.length-1]<num){
            const index = stackIndex.pop();
            result[index] = num;
            stackNum.pop();
        }
    }


    return result;
};