function totalStrength(strength: number[]): number {
    const sums1 = new Array<bigint>(strength.length+1);
    const sums2 = new Array<bigint>(strength.length+1);
    sums1[0] = 0n;
    sums2[0] = 0n;
    for(let i=0;i<strength.length;i++){
        sums1[i+1] = sums1[i]+BigInt(strength[i]);
        sums2[i+1] = sums2[i]+sums1[i+1];
    }

    let result = 0n;
    const stack:number[] = [];
    const getRange = (left:number,right:number,flag:boolean)=>{
        const result = sums2[right+1]-sums2[left]-BigInt(right-left+1)*( sums1[left]);
        if(flag){
            return BigInt(sums1[right+1]-sums1[left])*BigInt(right-left+2)-result
        }
        return result;
    }


    const calc = (left:number,index:number,right:number)=>{
        let sum = BigInt((index-left)*(right-index) )*BigInt(strength[index]);
        if(index+1 !== right){
            sum += BigInt(index-left)*BigInt( getRange(index+1,right-1,false))
        }
        if(left+1 !== index){
            sum += BigInt(right-index)*BigInt(getRange(left+1,index-1,true));
        }
        
        const current = sum*BigInt(strength[index]);  

        result += current
    }

    for(let i=0;i<strength.length;i++){
        while(stack.length && strength[stack[stack.length-1]] >= strength[i]){
            const index = stack.pop()!;
            const left = stack.length>0? stack[stack.length-1]:-1;
            
            calc(left,index,i);
        }
        stack.push(i);
    }

    for(let i=stack.length-1;i>-1;i--){
        const left = i>0? stack[i-1]:-1;
        calc(left,stack[i],strength.length);
    }
    return Number(result%BigInt(10**9+7) )
};