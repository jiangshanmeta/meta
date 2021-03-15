function intToRoman(num: number): string {
    const l1 = ['I','II','III','IV','V','VI','VII','VIII','IX'];
    const l2 = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    const l3 = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    const l4 = ['M','MM','MMM'];
    const result:string[] = [];
    if(num>999){
        const rest = num%1000;
        const count = (num-rest)/1000;
        result.push(l4[count-1]);
        num = rest;
    }
    if(num>99){
        const rest = num%100;
        const count = (num-rest)/100;
        result.push(l3[count-1]);
        num = rest;
    }
    if(num>9){
        const rest = num%10;
        const count = (num-rest)/10;
        result.push(l2[count-1]);
        num = rest;
    }
    if(num>0){
        result.push(l1[num-1]);
    }
    return result.join('')
};