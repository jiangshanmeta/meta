function restoreIpAddresses (s: string): string[] {
    const result:string[] = [];
    const backTracking = (segments:string[], start:number) => {
        if (segments.length > 4) {
            return;
        }
        if (start === s.length) {
            if (segments.length === 4) {
                result.push(segments.join('.'));
            }
            return;
        }
        if (s[start] === '0') {
            segments.push('0');
            backTracking(segments, start + 1);
            segments.pop();
        } else {
            for (let end = start + 1; end <= Math.min(s.length, start + 3); end++) {
                const addr = s.slice(start, end);
                if (+addr < 256) {
                    segments.push(addr);
                    backTracking(segments, end);
                    segments.pop();
                }
            }
        }
    };
    backTracking([], 0);

    return result;
}
