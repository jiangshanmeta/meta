function countBalls(lowLimit: number, highLimit: number): number {
    const counts:number[] = new Array(46).fill(0);
    for(let i=lowLimit;i<=highLimit;i++){
        counts[calc(i)]++;
    }
    return Math.max(...counts);
};

function calc(num:number):number{
    let result = 0;
    while(num){
        const digit = num%10;
        result += digit;
        num = (num-digit)/10;
    }
    return result;
}