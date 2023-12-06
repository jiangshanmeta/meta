function perfectMenu (materials: number[], cookbooks: number[][], attribute: number[][], limit: number): number {
    let result = -1;
    const backTracking = (index:number, restMaterial:number[], currentX:number, currentY:number) => {
        if (index === cookbooks.length) {
            if (currentY >= limit) {
                result = Math.max(result, currentX);
            }
            return;
        }
        backTracking(index + 1, restMaterial, currentX, currentY);

        const newMaterial = [...restMaterial, ];

        for (let i = 0; i < cookbooks[index].length; i++) {
            if (restMaterial[i] < cookbooks[index][i]) {
                return;
            }
            newMaterial[i] -= cookbooks[index][i];
        }
        backTracking(index + 1, newMaterial, currentX + attribute[index][0], currentY + attribute[index][1]);
    };
    backTracking(0, materials, 0, 0);
    return result;
}
