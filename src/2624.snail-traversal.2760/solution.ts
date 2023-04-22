declare global {
    interface Array<T> {
      snail(rowsCount: number, colsCount: number): number[][];
    }
  }

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }
    const result = new Array<number[]>(rowsCount);
    for (let i = 0; i < rowsCount; i++) {
        result[i] = new Array<number>(colsCount);
    }
    let index = 0;
    for (let j = 0; j < colsCount; j++) {
        if (j & 1) {
            for (let i = rowsCount - 1; i > -1; i--) {
                result[i][j] = this[index++];
            }
        } else {
            for (let i = 0; i < rowsCount; i++) {
                result[i][j] = this[index++];
            }
        }
    }
    return result;
};

/**
   * const arr = [1,2,3,4];
   * arr.snail(1,4); // [[1,2,3,4]]
   */
