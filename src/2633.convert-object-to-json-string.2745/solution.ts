function jsonStringify (object: any): string {
    if (Array.isArray(object)) {
        return `[${object.map(item => jsonStringify(item)).join(',')}]`;
    } else if (object && typeof object === 'object') {
        const keys = Object.keys(object);
        return `{${keys.map((key) => {
            return `"${key}":${jsonStringify(object[key])}`;
        }).join(',')}}`;
    } else if (typeof object === 'string') {
        return `"${object}"`;
    }
    return String(object);
}
