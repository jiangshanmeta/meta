class Solution {
    private maxDis:number;
    constructor(private radius: number,private x_center: number,private y_center: number) {
        this.maxDis = radius*radius;
    }

    randPoint(): number[] {
        let notFound = true;
        const result:number[] = [];
        while(notFound){
            const x = Math.random()*2*this.radius-this.radius;
            const y = Math.random()*2*this.radius-this.radius;
            const dis = x*x+y*y;
            if(dis>this.maxDis){
                continue;
            }
            notFound = false;
            result.push(x+this.x_center,y+this.y_center);
        }
        return result
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */