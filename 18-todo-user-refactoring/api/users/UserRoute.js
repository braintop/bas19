const express = require('express')
var router = express.Router();
var controller = require('./UserController')
router.get('/', controller.get);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);
module.exports = router;