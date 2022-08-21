import express from 'express';
import uploads from "../utils/multer.js";
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from '../controllers/projects.js';

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
router.patch('/updateProject/:id',
    uploads.fields([{
        name: 'imageFile', maxCount: 1
    }, {
        name: 'videoFile', maxCount: 1
    }]), updateProject);
router.delete('/deleteProject/:id', deleteProject);

export default router;