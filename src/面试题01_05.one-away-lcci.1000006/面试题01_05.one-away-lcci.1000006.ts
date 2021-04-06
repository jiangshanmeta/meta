function oneEditAway (first: string, second: string): boolean {
    if (Math.abs(first.length - second.length) > 1) {
        return false;
    }
    if (first.length === second.length) {
        let changed = false;
        for (let i = 0; i < first.length; i++) {
            if (first[i] === second[i]) {
                continue;
            }
            if (changed) {
                return false;
            }
            changed = true;
        }
        return true;
    }
    if (first.length < second.length) {
        const tmp = first;
        first = second;
        second = tmp;
    }
    let index1 = 0;
    let index2 = 0;
    let changed = false;
    while (index1 < first.length && index2 < second.length) {
        if (first[index1] === second[index2]) {
            index1++;
            index2++;
            continue;
        }
        if (changed) {
            return false;
        }
        changed = true;
        index1++;
    }

    return true;
}
