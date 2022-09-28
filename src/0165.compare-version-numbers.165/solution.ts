function compareVersion (version1: string, version2: string): number {
    const v1List = version1.split('.').map(item => +item);
    const v2List = version2.split('.').map(item => +item);
    for (let i = 0; i < Math.min(v1List.length, v2List.length); i++) {
        if (v1List[i] > v2List[i]) {
            return 1;
        } else if (v1List[i] < v2List[i]) {
            return -1;
        }
    }
    if (v1List.length < v2List.length) {
        for (let i = v1List.length; i < v2List.length; i++) {
            if (v2List[i] > 0) {
                return -1;
            }
        }
    } else if (v1List.length > v2List.length) {
        for (let i = v2List.length; i < v1List.length; i++) {
            if (v1List[i] > 0) {
                return 1;
            }
        }
    }

    return 0;
}
