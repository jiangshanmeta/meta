function findShortestSubArray(nums: number[]): number {
    let maxDegree = 0;
    const numStartMap = new Map<number,number>();
    const numDegreeMap = new Map<number,number>();
    let result = 0;
    for(let i=0;i<nums.length;i++){
        if(numStartMap.has(nums[i])){
            const degree = numDegreeMap.get(nums[i])! + 1;
            numDegreeMap.set(nums[i],degree);
            if(degree>maxDegree){
                maxDegree = degree;
                result = i-numStartMap.get(nums[i])!+1;
            }else if(degree === maxDegree){
                result = Math.min(result,i-numStartMap.get(nums[i])+1);
            }
        }else{
            numStartMap.set(nums[i],i);
            numDegreeMap.set(nums[i],1);
            result = Math.max(1,result)
        }
    }

    return result;
};