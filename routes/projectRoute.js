const { authentication, restrictTo } = require('../controller/authController');
const { createProject, getAllProject, getProjectById, updateProject, deleteProject } = require('../controller/projectController');

const router = require('express').Router();

router.route('/').post(authentication, restrictTo('1'), createProject);
router.route('/').get(authentication, getAllProject);
router.route('/:id').get(authentication, getProjectById);
router.route('/:id').patch(authentication, updateProject);
router.route('/:id').delete(authentication, deleteProject);

module.exports = router;