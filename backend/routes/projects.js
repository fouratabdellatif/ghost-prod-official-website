import express from 'express';
import multer from 'multer';
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from '../controllers/projects.js';


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "C:/Github/ghost-prod-official-website/backend/public/uploads");
    },

    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname);
    }
})

const uploads = multer({ storage: storage })

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/createProject', uploads.fields([{
    name: 'imageFile', maxCount: 1
}, {
    name: 'videoFile', maxCount: 1
}]), createProject);
router.patch('/updateProject/:id', updateProject);
router.delete('/deleteProject/:id', deleteProject);

export default router;