function canChange (start: string, target: string): boolean {
    let indexS = 0;
    let indexT = 0;
    while (indexT < target.length) {
        if (target[indexT] === '_') {
            indexT++;
            continue;
        }

        while (indexS < start.length) {
            if (start[indexS] === '_') {
                indexS++;
                continue;
            }
            if (start[indexS] !== target[indexT]) {
                return false;
            }
            break;
        }
        if (indexS === start.length) {
            return false;
        }

        if (target[indexT] === 'L' && indexS < indexT) {
            return false;
        } else if (target[indexT] === 'R' && indexS > indexT) {
            return false;
        }
        indexS++;
        indexT++;
    }

    while (indexS < start.length) {
        if (start[indexS] !== '_') {
            return false;
        }
        indexS++;
    }

    return true;
}
