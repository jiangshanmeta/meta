function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length-1;
    while(left<right){
        const sum = numbers[left]+numbers[right];
        if(sum>target){
            right--;
        }else if(sum<target){
            left++;
        }else{
            return [left+1,right+1];
        }
    }
    return [0,0];
};