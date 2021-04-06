class ParkingSystem {
    constructor (
        public big: number,
        public medium: number,
        public small: number
    ) {
    }

    addCar (carType: number): boolean {
        if (carType === 1) {
            if (this.big === 0) {
                return false;
            }
            this.big--;
        } else if (carType === 2) {
            if (this.medium === 0) {
                return false;
            }
            this.medium--;
        } else {
            if (this.small === 0) {
                return false;
            }
            this.small--;
        }
        return true;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
