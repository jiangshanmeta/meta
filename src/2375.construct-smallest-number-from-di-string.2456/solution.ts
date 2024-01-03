function smallestNumber (pattern: string): string {
    const backTracking = (seq:number[], used:boolean[]):string => {
        if (seq.length === pattern.length + 1) {
            return seq.join('');
        }
        const index = seq.length - 1;
        const last = seq[seq.length - 1];
        if (pattern[index] === 'I') {
            for (let i = last + 1; i < 10; i++) {
                if (used[i]) {
                    continue;
                }
                used[i] = true;
                seq.push(i);
                const res = backTracking(seq, used);
                if (res) {
                    return res;
                }
                seq.pop();
                used[i] = false;
            }
        } else {
            for (let i = last - 1; i > 0; i--) {
                if (used[i]) {
                    continue;
                }
                used[i] = true;
                seq.push(i);
                const res = backTracking(seq, used);
                if (res) {
                    return res;
                }
                seq.pop();
                used[i] = false;
            }
        }

        return '';
    };

    const used = new Array<boolean>(10);
    for (let i = 1; i < 10; i++) {
        used[i] = true;
        const res = backTracking([i, ], used);
        if (res) {
            return res;
        }
        used[i] = false;
    }
    return '';
}
