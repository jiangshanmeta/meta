var fs = require('fs');
var buf = '';

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk){
        buf += chunk.toString();
    }else{
        calc(parseInt(buf))
    }
});




function calc(num){
    var count = 0;
    while(num !== 1){
        if(num%2 === 1){
            num = 3*num + 1;
        }
        num = num/2;
        count++;
    }
    console.log(count);
}