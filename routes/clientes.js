const express = require('express');
const router = express.Router();
const controller = require('../controllers/clienteController');
const { validateName } = require('../middlewares/nomeMiddleware');
const { validateFamilyName } = require('../middlewares/sobrenomeMiddleware');
const { validateAge } = require('../middlewares/idadeMiddleware');

router.get('/', controller.findAll);
router.post('/', validateName, validateFamilyName, validateAge, controller.save);
router.put('/', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
