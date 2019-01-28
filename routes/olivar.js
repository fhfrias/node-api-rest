const express = require('express');
const router = express.Router();
const olivarController = require('../app/api/controllers/olivar');

router.get('/', olivarController.getAll);
router.post('/', olivarController.create);
router.get('/:movieId', olivarController.getById);
router.put('/:movieId', olivarController.updateById);
router.delete('/:movieId', olivarController.deleteById);
module.exports = router;