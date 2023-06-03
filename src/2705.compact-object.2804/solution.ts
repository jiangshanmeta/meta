type Obj = Record<any, any>;

function compactObject (obj: Obj): Obj {
    if (Array.isArray(obj)) {
        const result = [];
        for (const item of obj) {
            if (item && typeof item === 'object') {
                result.push(compactObject(item));
            } else if (item) {
                result.push(item);
            }
        }
        return result;
    }
    if (obj && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            if (!obj[key]) {
                return acc;
            }
            if (typeof obj[key] === 'object') {
                acc[key] = compactObject(obj[key]);
                return acc;
            }

            acc[key] = obj[key];
            return acc;
        }, {});
    }
}
