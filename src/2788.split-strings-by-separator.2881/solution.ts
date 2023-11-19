function splitWordsBySeparator (words: string[], separator: string): string[] {
    const result:string[] = [];
    for (const str of words) {
        result.push(...str.split(separator).filter(item => item !== ''));
    }
    return result;
}
