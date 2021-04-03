class AuthenticationManager {
    map:{
        [x:string]:number
    }
    constructor(private timeToLive: number) {
        this.map = {}
    }

    generate(tokenId: string, currentTime: number): void {
        this.map[tokenId] = currentTime+this.timeToLive;
    }

    renew(tokenId: string, currentTime: number): void {
        if(!this.map[tokenId] || this.map[tokenId]<=currentTime){
            return
        }
        this.map[tokenId] = currentTime+this.timeToLive;
    }

    countUnexpiredTokens(currentTime: number): number {
        const keys = Object.keys(this.map);
        let result = 0;
        for(let i=0;i<keys.length;i++){
            if(this.map[keys[i]]>currentTime){
                result++;
            }
        }
        return result
    }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */