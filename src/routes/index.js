const { Router } = require('express');

const routerAccount = require('./accountRoute/index.js');

const router = Router();

router.use('/api', routerAccount);

module.exports = router;


