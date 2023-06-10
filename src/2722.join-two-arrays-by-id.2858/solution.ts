function join (arr1: any[], arr2: any[]): any[] {
    const map = new Map<number, any>();
    for (const item of arr1) {
        map.set(item.id, item);
    }
    for (const item of arr2) {
        if (map.has(item.id)) {
            map.set(item.id, {
                ...map.get(item.id),
                ...item,
            });
        } else {
            map.set(item.id, item);
        }
    }
    return [...map.values(), ].sort((a, b) => a.id - b.id);
}
