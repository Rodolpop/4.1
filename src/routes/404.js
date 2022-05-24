

const Router = require('express');

const {err404} = require('../controllers/404');

const router = Router();

router.get('/',err404);
router.post('/',err404);
router.put('/',err404);
router.delete('/',err404);

module.exports = router;
