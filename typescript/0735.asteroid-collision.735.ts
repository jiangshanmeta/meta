function asteroidCollision(asteroids: number[]): number[] {
    const stack:number[] = [];
    for(let i=0;i<asteroids.length;i++){
        if(stack.length === 0 || asteroids[i]>0){
            stack.push(asteroids[i]);
        }else{
            let survive = true;
            while(stack.length>0 && stack[stack.length-1]>0 ){
                const node1 = -asteroids[i];
                const node2 = stack[stack.length-1];
                if(node1>node2){
                    stack.pop();
                }else if(node1 < node2){
                    survive = false;
                    break;
                }else{
                    survive = false
                    stack.pop();
                    break;
                }
            }
            survive && stack.push(asteroids[i]);
        }
    }
    return stack;
};