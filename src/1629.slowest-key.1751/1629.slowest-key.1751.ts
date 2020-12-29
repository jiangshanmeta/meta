function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let t = releaseTimes[0];
    let c = keysPressed[0];
    for(let i=1;i<releaseTimes.length;i++){
        const deltaT = releaseTimes[i]-releaseTimes[i-1];
        if(deltaT>t){
            t = deltaT;
            c = keysPressed[i];
        }else if(deltaT === t && keysPressed[i]>c){
            c = keysPressed[i];
        }
    }
    return c;
};