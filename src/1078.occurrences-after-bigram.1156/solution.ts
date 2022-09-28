function findOcurrences (text: string, first: string, second: string): string[] {
    const words:string[] = text.split(' ');
    const result:string[] = [];
    for (let i = 2; i < words.length; i++) {
        if (words[i - 1] === second && words[i - 2] === first) {
            result.push(words[i]);
        }
    }
    return result;
}
