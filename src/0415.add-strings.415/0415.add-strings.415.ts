function addStrings(num1: string, num2: string): string {
    const stack:number[] = [];
    let index1 = num1.length-1;
    let index2 = num2.length-1;
    let addon = 0;
    while(index1>-1 && index2>-1){
        const sum = addon+(+num1[index1--])+(+num2[index2--]);
        const digit = sum%10;
        stack.push(digit);
        addon = (sum-digit)/10;
    }
    while(index1>-1){
        const sum = addon+(+num1[index1--]);
        const digit = sum%10;
        stack.push(digit);
        addon = (sum-digit)/10;
    }
    while(index2>-1){
        const sum = addon+ (+num2[index2--]);
        const digit = sum%10;
        stack.push(digit);
        addon = (sum-digit)/10;
    }
    if(addon){
        stack.push(addon);
    }
    return stack.reverse().join('');
};