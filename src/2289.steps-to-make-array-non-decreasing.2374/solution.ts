function totalSteps(nums: number[]): number {
    const stack:number[] = []
    const turns:number[] = [];
    let result = 0;
    for(let i=nums.length-1;i>-1;i--){
        let turn = 0;
        while(stack.length && stack[stack.length-1]<nums[i] ){
            turn++;
            stack.pop();
            turn = Math.max(turn,turns.pop()!);
        }
        stack.push(nums[i]);
        turns.push(turn)
        result = Math.max(result,turn);
    }
    return result
};