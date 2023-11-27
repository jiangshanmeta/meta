function sortVowels (s: string): string {
    const vowels = new Set('aeiouAEIOU');
    const result = s.split('');
    const indexs:number[] = [];
    const chars:string[] = [];
    for (let i = 0; i < result.length; i++) {
        if (vowels.has(result[i])) {
            chars.push(result[i]);
            indexs.push(i);
        }
    }
    chars.sort();
    for (let i = 0; i < indexs.length; i++) {
        result[indexs[i]] = chars[i];
    }
    return result.join('');
}
