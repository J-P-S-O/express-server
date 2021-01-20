import minimist from "minimist"
import fs from "fs"
export function existent(req, res, next ){
    let magic = 1
    if (process.argv[0] == "node"){ 
        magic = magic - 1 
    }
    
    var argv = minimist(process.argv.slice(1+magic));
    
    // check if this path exists
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
export function dir(req, res, next){
    
    if (fs.lstatSync(req.path).isDirectory()){
        for ( const  i of fs.readdirSync(req.path)){
            res.write(i)
        }
    }else{
        next()
    }
}