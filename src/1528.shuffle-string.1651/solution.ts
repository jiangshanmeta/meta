function restoreString (s: string, indices: number[]): string {
    const result:string[] = new Array(indices.length);
    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i];
    }
    return result.join('');
}
