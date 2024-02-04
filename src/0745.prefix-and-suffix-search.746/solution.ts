class WordFilter {
    map = new Map<string,number>();
    constructor(words: string[]) {

        for(let index=0;index<words.length;index++){
            const word = words[index];
            const prefixs:string[] = [];
            for(let i=0;i<7;i++){
                prefixs.push(word.slice(0,i+1));
            }
            const suffixs:string[] = [];
            for(let i=Math.max(word.length-7,0);i<word.length;i++){
                suffixs.push(word.slice(i));
            }

            for(let i=0;i<prefixs.length;i++){
                for(let j=0;j<suffixs.length;j++){
                    const key = `${prefixs[i]}|${suffixs[j]}`;
                    this.map.set(key,index);
                }

            }
        }

    }

    f(pref: string, suff: string): number {
        const key = `${pref}|${suff}`;
        if(this.map.has(key)){
            return this.map.get(key)!
        }
        return -1;
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */