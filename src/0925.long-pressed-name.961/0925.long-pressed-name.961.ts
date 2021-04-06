function isLongPressedName (name: string, typed: string): boolean {
    let index1 = 0;
    let index2 = 0;
    while (index1 < name.length && index2 < typed.length) {
        const char1 = name[index1++];
        const char2 = typed[index2++];
        if (char1 !== char2) {
            return false;
        }
        let count1 = 0;
        let count2 = 0;
        while (index1 < name.length && name[index1] === char1) {
            count1++;
            index1++;
        }
        while (index2 < typed.length && typed[index2] === char2) {
            count2++;
            index2++;
        }
        if (count2 < count1) {
            return false;
        }
    }
    return index1 === name.length && index2 === typed.length;
}
