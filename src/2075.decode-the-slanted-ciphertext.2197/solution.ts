function decodeCiphertext (encodedText: string, rows: number): string {
    const cols = encodedText.length / rows;
    const result: string[] = [];
    for (let k = 0; k < cols; k++) {
        let j = k;
        let i = 0;
        while (i < rows && j < cols) {
            result.push(encodedText[cols * i + j]);
            i++;
            j++;
        }
    }
    while (result.length && result[result.length - 1] === ' ') {
        result.pop();
    }
    return result.join('');
}
