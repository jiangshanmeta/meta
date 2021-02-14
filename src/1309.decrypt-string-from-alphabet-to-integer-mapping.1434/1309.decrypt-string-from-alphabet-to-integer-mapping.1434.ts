function freqAlphabets(s: string): string {
    const result:string[] = [];
    let index = 0;
    while(index<s.length){
        let code = 0;
        if( (s[index] === '1' || s[index] === '2') && index+2<s.length && s[index+2] === '#'){
            code = +s.slice(index,index+2)
            index += 3;
        }else{
            code = +s[index++]
        }

        result.push(String.fromCharCode(code+96));
    }
    return result.join('');
};