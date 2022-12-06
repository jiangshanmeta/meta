function isCircularSentence (sentence: string): boolean {
    let index = sentence.indexOf(' ');
    while (index !== -1) {
        if (sentence[index - 1] !== sentence[index + 1]) {
            return false;
        }
        index = sentence.indexOf(' ', index + 1);
    }
    return sentence[0] === sentence[sentence.length - 1];
}
