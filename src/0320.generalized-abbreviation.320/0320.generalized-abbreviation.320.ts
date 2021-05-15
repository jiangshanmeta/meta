function generateAbbreviations (word: string): string[] {
    const result:string[] = [];
    const current:string[] = [];

    function backTracking (index:number, lastIsNumber:boolean) {
        if (index === word.length) {
            result.push(current.join(''));
            return;
        }
        current.push(word[index]);
        backTracking(index + 1, false);
        current.pop();

        if (!lastIsNumber) {
            for (let i = 1; i <= word.length - index; i++) {
                current.push(String(i));
                backTracking(index + i, true);
                current.pop();
            }
        }
    }

    backTracking(0, false);

    return result;
}
