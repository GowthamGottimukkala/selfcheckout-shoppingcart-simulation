function matchfiles(filename) {
    const path = require('path')
    var fs = require('fs');
    var indices = [];
    var pathp = path.join(__dirname+'/../images');
    fs.readdir(pathp, (err, data) => {
        if (err) console.log('err');
        var i=1;
        
        filename = filename.split('.jpeg');
        if(filename[0].includes('+')){
            filename[0] = filename[0].split('+');   
        }
        var obj = [filename[0].concat(['fogg']),filename[0].concat(['medimix']),filename[0].concat(['goodday']),filename[0].concat(['redlabel'])];
        obj.forEach((list)=>{
            list.sort();
        })
        data.forEach((el) => {
            el = el.split('.jpeg')
            if(el[0].includes('+')){
                el[0] = el[0].split('+');
                el[0].sort();
            }
            console.log(el[0]);
            if(el[0].length==obj[0].length){
                for(var j=0;j<obj.length;j++){
                    var count=0;
                    for(var k=0;k<el[0].length;k++){
                        if(el[0][k]==obj[j][k])
                            count++;
                    }
                    if(count==obj[0].length)
                        indices.push(i);
                }
            }
            
            i=i+1;
    })
    console.log(indices)
    })
    return indices;
}

export default matchfiles;