function sortByBits(arr: number[]): number[] {
    const map = new Map<number,number>();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],count1(arr[i]));
    }
    return arr.sort((a,b)=>{
        const aCount = map.get(a)!;
        const bCount = map.get(b)!;
        if(aCount !== bCount){
            return aCount-bCount;
        }
        return a-b;
    });
};

function count1(num:number):number{
    let result = 0;
    num >>>= 0;
    while(num>0){
        num = (num&(num-1))>>>0;
        result++;
    }
    return result;
}