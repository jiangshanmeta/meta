var AnimalShelf = function() {
    this.catQueen = [];
    this.dogQueen = [];
};

/** 
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function(animal) {
    if(animal[1] === 0){
        this.catQueen.push(animal);    
    }else{
        this.dogQueen.push(animal);
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function() {
    if(this.catQueen.length && this.dogQueen.length){
        if(this.catQueen[0][0]<this.dogQueen[0][0]){
            return this.catQueen.shift();
        }else{
            return this.dogQueen.shift();
        }
        
    }else if(this.catQueen.length){
        return this.catQueen.shift();
    }else if(this.dogQueen.length){
        return this.dogQueen.shift();
    }else{
        return [-1,-1];
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function() {
    if(this.dogQueen.length === 0){
        return [-1,-1];
    }
    return this.dogQueen.shift();
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function() {
    if(this.catQueen.length === 0){
        return [-1,-1];
    }else{
        return this.catQueen.shift();
    }
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */