function robotWithString (s: string): string {
    const lastIndexs = new Array<number>(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        lastIndexs[s.charCodeAt(i) - 97] = i;
    }
    const p:string[] = [];
    const t:string[] = [];

    let index = 0;
    for (let i = 0; i < 26; i++) {
        if (lastIndexs[i] === -1) {
            continue;
        }
        const endIndex = lastIndexs[i];
        const char = String.fromCharCode(i + 97);
        while (t.length && t[t.length - 1] <= char) {
            p.push(t.pop()!);
        }

        while (index <= endIndex) {
            if (s[index] === char) {
                p.push(char);
            } else {
                t.push(s[index]);
            }
            index++;
        }
    }

    while (t.length) {
        p.push(t.pop()!);
    }

    return p.join('');
}
