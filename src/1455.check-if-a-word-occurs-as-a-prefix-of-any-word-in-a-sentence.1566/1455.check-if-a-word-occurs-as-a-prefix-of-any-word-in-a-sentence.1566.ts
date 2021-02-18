function isPrefixOfWord(sentence: string, searchWord: string): number {
    const sList = sentence.split(' ');
    for(let i=0;i<sList.length;i++){
        if(sList[i].startsWith(searchWord)){
            return i+1;
        }
    }
    return -1
};