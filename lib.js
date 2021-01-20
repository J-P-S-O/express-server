
exports.existent =  function(req, res, next ){
    
    // check if this path exists
    let fs = require("fs")
    if (fs.existsSync(req.path)){
        next()
    }else{
        if (""){
            res.download(config.enoent)
        }else{
            res.write("404")
        }
    }
}
