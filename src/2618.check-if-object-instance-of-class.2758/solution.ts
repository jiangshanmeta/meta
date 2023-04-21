function checkIfInstanceOf (obj: any, classFunction: any): boolean {
    if (obj === null || obj === undefined) {
        return false;
    }
    while (obj !== null) {
        if (obj.constructor === classFunction) {
            return true;
        }
        obj = Object.getPrototypeOf(obj);
    }
    return false;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
