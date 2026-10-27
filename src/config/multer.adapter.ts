import multer from "multer";
import path from "path";
import { randomUUID } from "crypto";

const ALLOWED_TYPES: Record<string,string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(process.cwd(), 'public', 'images'));
  },
  filename: (req, file, cb) => {
    const uniqueName = randomUUID() + ALLOWED_TYPES[file.mimetype];
    cb(null, uniqueName);
  },
});


const fileFilter: multer.Options['fileFilter'] = (req, file, cb) => {
  if (ALLOWED_TYPES[file.mimetype]) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, PNG or WebP images are allowed'));
  }
};

const limits = {
  fileSize: 5 * 1024 * 1024, // 5 MB
};

export const multerAdapter = {
   upload:() =>  multer({storage,fileFilter,limits})
}