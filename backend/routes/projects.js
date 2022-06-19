import express from 'express';
import multer from 'multer';
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from '../controllers/projects.js';

const dateNow = Date.now();

const storageA = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "C:/Github/ghost-prod-official-website/frontend/public/uploads")
    },

    filename: (req, file, callback) => {
        callback(null, dateNow + file.originalname);
    }
})

const storageB = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "C:/Github/ghost-prod-official-website/admin/public/uploads")
    },

    filename: (req, file, callback) => {
        callback(null, dateNow + file.originalname);
    }
})

const uploadsA = multer({ storage: storageA })
const uploadsB = multer({ storage: storageB })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "C:/Github/ghost-prod-official-website/frontend/public/uploads")
    },

    filename: (req, file, callback) => {
        callback(null, dateNow + file.originalname);
    }
})

const uploads = multer({ storage: storage })

const fileUpload = async (req, res, next) => {
    await uploadsA.fields([{
        name: 'imageFile', maxCount: 1
    }, {
        name: 'videoFile', maxCount: 1
    }])(req, res, next);
    await uploadsB.fields([{
        name: 'imageFile', maxCount: 1
    }, {
        name: 'videoFile', maxCount: 1
    }])(req, res, next);
}

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/createProject',
    uploads.fields([{
        name: 'imageFile', maxCount: 1
    }, {
        name: 'videoFile', maxCount: 1
    }]), createProject);
// router.post('/createProject', fileUpload, createProject);
router.patch('/updateProject/:id', updateProject);
router.delete('/deleteProject/:id', deleteProject);

export default router;