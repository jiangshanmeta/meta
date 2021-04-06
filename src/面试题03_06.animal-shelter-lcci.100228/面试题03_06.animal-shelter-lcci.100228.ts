class AnimalShelf {
    private queenCat:number[][];
    private queenDog:number[][];
    constructor () {
        this.queenCat = [];
        this.queenDog = [];
    }

    enqueue (animal: number[]): void {
        if (animal[1] === 0) {
            this.queenCat.push(animal);
        } else {
            this.queenDog.push(animal);
        }
    }

    dequeueAny (): number[] {
        if (this.queenCat.length === 0 && this.queenDog.length === 0) {
            return [-1, -1, ];
        }
        if (this.queenCat.length && this.queenDog.length) {
            if (this.queenCat[0][0] < this.queenDog[0][0]) {
                return this.queenCat.shift();
            } else {
                return this.queenDog.shift();
            }
        } else if (this.queenCat.length) {
            return this.queenCat.shift();
        } else {
            return this.queenDog.shift();
        }
    }

    dequeueDog (): number[] {
        if (this.queenDog.length === 0) {
            return [-1, -1, ];
        } else {
            return this.queenDog.shift();
        }
    }

    dequeueCat (): number[] {
        if (this.queenCat.length === 0) {
            return [-1, -1, ];
        } else {
            return this.queenCat.shift();
        }
    }
}

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */
