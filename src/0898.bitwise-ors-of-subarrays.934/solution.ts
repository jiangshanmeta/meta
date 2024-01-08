function subarrayBitwiseORs (arr: number[]): number {
    const res = new Set([arr[0], ]);
    let prev = new Set([arr[0], ]);
    for (let i = 1; i < arr.length; i++) {
        const next = new Set([arr[i], ]);
        res.add(arr[i]);
        for (const item of prev) {
            const a = item | arr[i];
            next.add(a);
            res.add(a);
        }
        prev = next;
    }
    return res.size;
}
