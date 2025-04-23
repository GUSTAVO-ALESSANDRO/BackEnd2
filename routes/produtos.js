const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');
const { validateName } = require('../middlewares/produtoNomeMiddleware');
const { validateDescription } = require('../middlewares/produtoDescricaoMiddleware');
const { validatePrice } = require('../middlewares/produtoPrecoMiddleware');

router.get('/', controller.findAll);
router.post('/', validateName, validateDescription, validatePrice, controller.save);
router.put('/', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
