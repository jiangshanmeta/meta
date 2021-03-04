function breakfastNumber(staple: number[], drinks: number[], x: number): number {
    const mod = 1000000007;
    let result = 0;
    staple.sort((a,b)=>a-b);
    drinks.sort((a,b)=>a-b);
    let index = drinks.length-1;
    for(let i=0;i<staple.length;i++){
        while(index>-1 && drinks[index]+staple[i]>x){
            index--;
        }
        result = (result+index+1)%mod;
    }
    return result
};