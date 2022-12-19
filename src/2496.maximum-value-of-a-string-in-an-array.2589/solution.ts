function maximumValue (strs: string[]): number {
    return Math.max(...strs.map((str) => {
        if (/[a-z]/.test(str)) {
            return str.length;
        }
        return +str;
    }));
}
