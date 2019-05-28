/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.x_center = x_center;
    this.y_center = y_center;
    this.radius_square = radius**2;
    this.left = x_center-radius;
    this.bottom = y_center-radius;
    this.length = 2*radius;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    while(true){
        const x = this.left+Math.random()*this.length;
        const y = this.bottom+Math.random()*this.length;
        const dis = (x-this.x_center)**2 + (y-this.y_center)**2;
        if(dis<this.radius_square){
            return [x,y];
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */