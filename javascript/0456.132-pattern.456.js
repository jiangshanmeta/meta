/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const lines = [];
    let a = nums[0];
    let index = 1;
    while(index<nums.length){
        const cur = nums[index++];
        if(cur>a){
            lines.push([a,cur]);
            break;
        }else if(cur<a){
            a = cur;
        }
    }
    if(index === nums.length){
        return false;
    }
    let b;
    while(index<nums.length){
        const cur = nums[index++];
        let greater = false;
        for(let i=0;i<lines.length;i++){
            if(cur>lines[i][0] && cur<lines[i][1]){
                return true;
            }else if(cur>lines[i][1]){
                lines[i][1] = cur;
                greater = true;
            }
        }
        if(!greater){
            if(b === undefined){
                b = cur;
            }else if(cur>b){
                lines.push([b,cur]);
                b = undefined;
            }else {
                b = cur;
            }
        }
        
    }
    return false;
};