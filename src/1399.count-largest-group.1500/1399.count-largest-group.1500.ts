function countLargestGroup(n: number): number {
    const counts = new Array(27).fill(0);
    for(let i=0;i<=n;i++){
        counts[getSum(i)-1]++;
    }
    let maxCount = 0;
    let result = 0;
    for(let i=0;i<counts.length;i++){
        if(counts[i]>maxCount){
            maxCount = counts[i];
            result = 1;
        }else if(counts[i] === maxCount){
            result++;
        }
    }
    return result
};

function getSum(n:number):number{
    let result = 0;
    while(n){
        const mod = n%10;
        result += mod;
        n = (n-mod)/10;
    }
    return result;
}