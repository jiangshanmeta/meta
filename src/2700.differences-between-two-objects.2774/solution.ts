function objDiff (obj1: any, obj2: any): any {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        const result = {};
        for (let i = 0; i < Math.min(obj1.length, obj2.length); i++) {
            const compare = objDiff(obj1[i], obj2[i]);
            if (compare && Object.keys(compare).length !== 0) {
                result[i] = compare;
            }
        }
        return result;
    } else if (obj1 && typeof obj1 === 'object' && obj2 && typeof obj2 === 'object' && !Array.isArray(obj1) && !Array.isArray(obj2)) {
        const result = {};
        const keys = Object.keys(obj1);
        for (const key of keys) {
            if (!obj2.hasOwnProperty(key)) {
                continue;
            }
            const compare = objDiff(obj1[key], obj2[key]);
            if (compare && Object.keys(compare).length !== 0) {
                result[key] = compare;
            }
        }
        return result;
    } else {
        return obj1 === obj2 ? null : [obj1, obj2, ];
    }
}
