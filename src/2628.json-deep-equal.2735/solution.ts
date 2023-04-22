function areDeeplyEqual (o1: any, o2: any): boolean {
    const t1 = getType(o1);
    const t2 = getType(o2);
    console.log(t1, t2);
    if (t1 !== t2) {
        return false;
    }
    if (t1 === 'array') {
        if (o1.length !== o2.length) {
            return false;
        }
        return o1.every((item1, index1) => areDeeplyEqual(item1, o2[index1]));
    } else if (t1 === 'object') {
        const keys = Object.keys(o1);
        return keys.every((key) => o2.hasOwnProperty(key) && areDeeplyEqual(o1[key], o2[key]));
    } else {
        return o1 === o2;
    }
}

function getType (o:any) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
}
