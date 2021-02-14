function isPossibleDivide(nums: number[], k: number): boolean {
    const map = new Map<number,number>();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])!+1);
        }else{
            map.set(nums[i],1);
        }
    }
    const keys = [...map.keys()].sort((a,b)=>a-b);

    for(let i=0;i<keys.length;i++){
        const c = map.get(keys[i])!;
        if(c === 0){
            continue;
        }

        for(let j=keys[i]+1;j<keys[i]+k;j++){
            if(!map.has(j) || map.get(j)! < c){
                return false;
            }
            map.set(j,map.get(j)!-c);
        }
    }
    return true
};