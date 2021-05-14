function multiply (mat1: number[][], mat2: number[][]): number[][] {
    const M = mat1.length;
    const N = mat2[0].length;
    const mat1Datas:number[][] = new Array(M);
    const mat1Indexs:number[][] = new Array(M);
    for (let i = 0; i < M; i++) {
        const datas:number[] = [];
        const indexs:number[] = [];
        for (let j = 0; j < mat1[i].length; j++) {
            if (mat1[i][j] === 0) {
                continue;
            }
            datas.push(mat1[i][j]);
            indexs.push(j);
        }
        mat1Datas[i] = datas;
        mat1Indexs[i] = indexs;
    }
    const mat2Datas:number[][] = [];
    const mat2Indexs:number[][] = [];
    for (let j = 0; j < N; j++) {
        const datas:number[] = [];
        const indexs:number[] = [];
        for (let i = 0; i < mat2.length; i++) {
            if (mat2[i][j] === 0) {
                continue;
            }
            datas.push(mat2[i][j]);
            indexs.push(i);
        }
        mat2Datas[j] = datas;
        mat2Indexs[j] = indexs;
    }

    const result:number[][] = new Array(M);
    for (let i = 0; i < M; i++) {
        result[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            result[i][j] = calc(mat1Datas[i], mat1Indexs[i], mat2Datas[j], mat2Indexs[j]);
        }
    }

    return result;
}

function calc (datas1:number[], indexs1:number[], datas2:number[], indexs2:number[]) {
    let result = 0;
    let i = 0;
    let j = 0;
    while (i < indexs1.length && j < indexs2.length) {
        if (indexs1[i] < indexs2[j]) {
            i++;
        } else if (indexs1[i] > indexs2[j]) {
            j++;
        } else {
            result += datas1[i++] * datas2[j++];
        }
    }
    return result;
}
