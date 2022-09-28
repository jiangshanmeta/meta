function checkIfPangram (sentence: string): boolean {
    const flags:boolean[] = new Array(26).fill(false);
    for (let i = 0; i < sentence.length; i++) {
        flags[sentence.charCodeAt(i) - 97] = true;
    }
    return flags.every(item => item);
}
