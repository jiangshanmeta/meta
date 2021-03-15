function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 0){
        return ''
    }
    const result:string[] = [];
    let index = 0;
    let maxIndex = Math.min(...strs.map(str=>str.length));
    while(index<maxIndex){
        const c = strs[0][index];
        let fit = true;
        for(let i=1;i<strs.length;i++){
            if(strs[i][index] !== c){
                fit = false;
                break;
            }
        }
        if(fit){
            result.push(c);
            index++;
        }else{
            break;
        }
    }
    return result.join('');
};