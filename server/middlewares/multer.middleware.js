import path from "path"
import multer from "multer"

const storage = multer.diskStorage({
    destination:"uploads/" ,
    filename:   (_req,file,cb)=>{
        cb(null,file.originalname)
    },
})

const fileFilter = (_req, file, cb) =>{
    let ext = path.extname(file.originalname);

    if(
        ext !== ".jpg" &&
        ext !== ".png" &&
        ext !== ".jpeg" &&
        ext !== "webp"&&
        ext !== ".mp4"
    ) {
        cb(new Error(`Only image and video files are allowed! ${ext}`),false);
        return;
    }
    cb(null,true);
}

const upload =multer({

    limits:{ fileSize:50*1024*1024},//50mb
    storage,
    fileFilter
})

export default upload;