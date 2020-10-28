function thirdMax(nums: number[]): number {
    let a = -Infinity;
    let b = -Infinity;
    let c = -Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=a){
            if(nums[i]>a){
                c = b;
                b = a;
                a = nums[i];
            }
        }else if(nums[i]>=b){
            if(nums[i]>b){
                c = b;
                b = nums[i];
            }
        }else if(nums[i]>=c){
            if(nums[i]>c){
                c = nums[i];
            }
        }
    }

    return c === -Infinity?a:c;
};