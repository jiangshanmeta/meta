function similarRGB (color: string): string {
    const candidates = [0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff, ];

    function binarySearch (color:number):number {
        let low = 0;
        let high = candidates.length - 1;
        let resultIndex = 0;
        // let minDiff = 256;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (candidates[mid] > color) {
                high = mid - 1;
            } else {
                resultIndex = Math.max(resultIndex, mid);
                low = mid + 1;
            }
        }

        if (resultIndex + 1 < candidates.length && candidates[resultIndex + 1] - color < color - candidates[resultIndex]) {
            resultIndex++;
        }
        return candidates[resultIndex];
    }

    return '#' + [
        parseInt(color.slice(1, 3), 16),
        parseInt(color.slice(3, 5), 16),
        parseInt(color.slice(5), 16),
    ].map((item) => {
        return binarySearch(item).toString(16).padStart(2, '0');
    }).join('');
}
