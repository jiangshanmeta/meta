function checkStraightLine(coordinates: number[][]): boolean {
    if(coordinates[0][0] === coordinates[1][0]){
        for(let i=2;i<coordinates.length;i++){
            if(coordinates[i][0] !== coordinates[0][0]){
                return false
            }
        }
        return true;
    }else{
        const k = (coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0]);
        const b = coordinates[0][1]-k*coordinates[0][0];
        for(let i=2;i<coordinates.length;i++){
            if(coordinates[i][1] !== coordinates[i][0]*k+b){
                return false
            }
        }
        return true
    }
};