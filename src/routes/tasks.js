const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const validate = require('../middleware/validate');
const ctrl = require('../controllers/taskController');

router.post('/',
  [ body('title').notEmpty().withMessage('Title is required') ],
  validate,
  ctrl.createTask
);

router.get('/', ctrl.getTasks);

router.get('/:id',
  [ param('id').isMongoId().withMessage('Invalid task id') ],
  validate,
  ctrl.getTaskById
);

router.delete('/:id',
  [ param('id').isMongoId().withMessage('Invalid task id') ],
  validate,
  ctrl.deleteTaskById
);

module.exports = router;
