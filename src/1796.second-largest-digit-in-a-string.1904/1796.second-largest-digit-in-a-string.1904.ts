function secondHighest(s: string): number {
    const digits:boolean[] = new Array(10).fill(false);
    for(let i=0;i<s.length;i++){
        const code = s.charCodeAt(i)-48;
        if(code<0 || code>9){
            continue;
        }
        digits[code] = true;
    }
    let foundFirst = false;
    let result = -1;
    for(let i=9;i>-1;i--){
        if(!digits[i]){
            continue;
        }
        if(foundFirst){
            result = i;
            break;
        }else{
            foundFirst = true;
        }
    }

    return result;
};