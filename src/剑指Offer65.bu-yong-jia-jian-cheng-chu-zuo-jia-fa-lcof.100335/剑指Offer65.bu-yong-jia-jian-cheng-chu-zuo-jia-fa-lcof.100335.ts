function add(a: number, b: number): number {
    return helper(a>>>0,b>>>0)>>0;
};

function helper(a:number,b:number):number{
    if(a === 0){
        return b
    }
    if(b === 0){
        return a;
    }
    return helper(a^b,(a&b)<<1);
}