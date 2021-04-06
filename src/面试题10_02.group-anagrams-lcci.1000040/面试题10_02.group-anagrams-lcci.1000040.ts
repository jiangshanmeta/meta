function groupAnagrams (strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (let i = 0; i < strs.length; i++) {
        const counts:number[] = new Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            counts[strs[i].charCodeAt(j) - 97]++;
        }
        const key = counts.join(',');
        if (map.has(key)) {
            map.get(key)!.push(strs[i]);
        } else {
            map.set(key, [strs[i], ]);
        }
    }
    return [
        ...map.values(),
    ];
}
