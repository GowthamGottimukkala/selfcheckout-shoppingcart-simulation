function matchfiles(filename) {
    const path = require('path')
    var fs = require('fs');
    var indices = [];
    var pathp = path.join(__dirname+'/../images');
    console.log(pathp)
    fs.readdir(pathp, (err, data) => {
        if (err) console.log('err');
        var i=1;
        
        filename = filename.split('.jpeg');
        var obj = [filename[0]+'+fogg',filename[0]+'+medimix',filename[0]+'+goodday',filename[0]+'+redlabel'];
        console.log(obj);
        data.forEach((el) => {
            el = el.split('.jpeg')
            if(obj.indexOf(el[0])!=-1){
                indices.push(i);
            }
            i=i+1;
    })
    console.log(indices)
    })
    return indices;
}

export default matchfiles;