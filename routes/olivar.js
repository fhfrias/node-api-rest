const express = require('express');
const router = express.Router();
const olivarController = require('../app/api/controllers/olivar');

router.get('/', olivarController.getAll);
router.post('/', olivarController.create);
router.get('/:olivarId', olivarController.getById);
router.put('/:olivarId', olivarController.updateById);
router.delete('/:olivarId', olivarController.deleteById);
module.exports = router;