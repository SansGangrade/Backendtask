const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),"logos"))
    },
    filename : function(req,file,cb){
        cb(null,file.originalname + "-" + nanoid())
    }
})

const logo = multer({
    storage : storage
})

module.exports = {
    logo
}
