function sortSentence (s: string): string {
    const list = s.split(' ');
    const map:{[x:string]:string} = {};
    for (const word of list) {
        map[word.substr(word.length - 1)] = word.substr(0, word.length - 1);
    }
    const result:string[] = [];
    for (let i = 0; i < list.length; i++) {
        result.push(map[i + 1]);
    }
    return result.join(' ');
}
