function toLowerCase (str: string): string {
    const result:string[] = [];
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result.push(String.fromCharCode(code + 32));
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}
