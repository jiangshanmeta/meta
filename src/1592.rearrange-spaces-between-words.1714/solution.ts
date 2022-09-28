function reorderSpaces (text: string): string {
    const words:string[] = [];
    let count = 0;
    let index = 0;
    while (index < text.length) {
        while (index < text.length && text[index] === ' ') {
            index++;
            count++;
        }
        const word:string[] = [];
        while (index < text.length && text[index] !== ' ') {
            word.push(text[index++]);
        }
        word.length && words.push(word.join(''));
    }
    if (words.length === 1) {
        return words[0] + ' '.repeat(count);
    }

    const rest = count % (words.length - 1);
    const per = (count - rest) / (words.length - 1);
    return words.join(' '.repeat(per)) + ' '.repeat(rest);
}
