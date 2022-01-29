//Dependencies
const Simple_Exec = require("simple-exec")

//Main
async function shred(directory = String, overwrite_times = BigInt){
    const result = await Simple_Exec.executeSync(`shred ${directory}/* --iterations=${overwrite_times} --zero -u`)

    if(result.err){
        return false
    }else{
        return true
    }
}

//Exporter
module.exports = {
    shred
}