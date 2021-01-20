
exports.existent =  function(req, res, next ){
    let magic = 1
    if (process.argv[0] == "node"){ 
        magic = magic - 1 
    }
    var argv = require('minimist')(process.argv.slice(1+magic));
    
    // check if this path exists
    let fs = require("fs")
    if (fs.existsSync(req.path)){
        next()
    }else{
        if (argv.enoent){
            res.download(argv.enoent)
        }else{
            res.write("404")
        }
    }
}
