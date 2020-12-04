function permuteUnique(nums: number[]): number[][] {
    nums.sort((a,b)=>a-b);
    const result:number[][] = [];
    backTracking(
        nums,
        new Array(nums.length).fill(false),
        [] as number[],
        result
    );
    return result;
};

function backTracking(nums:number[],used:boolean[],sequence:number[],result:number[][]){
    if(sequence.length === nums.length){
        result.push(sequence.slice());
        return;
    }
    for(let i=0;i<nums.length;i++){
        if(used[i] || (i>0 && nums[i] === nums[i-1] && !used[i-1])){
            continue;
        }
        sequence.push(nums[i]);
        used[i] = true;
        backTracking(nums,used,sequence,result);
        used[i] = false;
        sequence.pop();
    }
}