function toHex(num: number): string {
    if(num === 0){
        return '0'
    }
    const mapStr = '0123456789abcdef';
    num >>>= 0;
    const stack:string[] = [];
    while(num>0){
        const rest = num%16;
        stack.push(mapStr[rest]);
        num = (num-rest)/16;
    }
    return stack.reverse().join('');
};