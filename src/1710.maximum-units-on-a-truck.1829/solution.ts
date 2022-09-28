function maximumUnits (boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let result = 0;
    let index = 0;
    while (index < boxTypes.length && truckSize > 0) {
        const useSize = Math.min(truckSize, boxTypes[index][0]);
        result += useSize * boxTypes[index][1];
        index++;
        truckSize -= useSize;
    }
    return result;
}
