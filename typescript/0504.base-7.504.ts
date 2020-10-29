function convertToBase7(num: number): string {
    if(num === 0){
        return '0';
    }
    let prefix = '';
    if(num<0){
        prefix = '-';
        num = -num;
    }
    const stack:number[] = [];
    while(num>0){
        const mod = num%7;
        const rest = (num-mod)/7;
        stack.push(mod);
        num = rest;
    }
    return `${prefix}${stack.reverse().join('')}`
};