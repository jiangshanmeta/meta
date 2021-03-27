function uniqueMorseRepresentations(words: string[]): number {
    const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const set = new Set<string>();
    for(let i=0;i<words.length;i++){
        const letters:string[] = [];
        for(let j=0;j<words[i].length;j++){
            letters.push(codes[words[i].charCodeAt(j)-97]);    
        }
        set.add(letters.join(''));
    }

    return set.size;
};