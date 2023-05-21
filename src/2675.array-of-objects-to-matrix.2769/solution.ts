function jsonToMatrix (arr: any[]): (string | number | boolean | null)[] {
    const set = new Set<string>();
    arr.forEach((item) => {
        getKeys(item, [], set);
    });
    const keys = [...set, ].sort();
    const result = [];
    result.push(keys);
    arr.forEach((item) => {
        result.push(keys.map((key) => {
            return getValue(item, key.split('.'), 0);
        }));
    });

    return result;
}

function getValue (anything:any, keys:string[], index:number) {
    if (Array.isArray(anything)) {
        const key = +keys[index];
        if (Number.isNaN(key)) {
            return '';
        }
        const v = anything[key];
        if (index === keys.length - 1) {
            if (v && typeof v === 'object') {
                return '';
            }
            return v;
        } else {
            return getValue(v, keys, index + 1);
        }
    } else if (anything && typeof anything === 'object') {
        const key = keys[index];
        if (anything.hasOwnProperty(key)) {
            const v = anything[key];
            if (index === keys.length - 1) {
                if (v && typeof v === 'object') {
                    return '';
                }
                return v;
            }
            return getValue(v, keys, index + 1);
        } else {
            return '';
        }
    }

    return '';
}

function getKeys (anything:any, sequence:Array<string | number>, set:Set<string>) {
    if (Array.isArray(anything)) {
        anything.forEach((item, index) => {
            sequence.push(index);
            if (item && typeof item === 'object') {
                getKeys(item, sequence, set);
            } else {
                set.add(sequence.join('.'));
            }
            sequence.pop();
        });
    } else if (anything && typeof anything === 'object') {
        Object.keys(anything).forEach((key) => {
            sequence.push(key);
            if (anything[key] && typeof anything[key] === 'object') {
                getKeys(anything[key], sequence, set);
            } else {
                set.add(sequence.join('.'));
            }
            sequence.pop();
        });
    }
}
