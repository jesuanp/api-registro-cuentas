const { Router } = require('express');

const router = Router();

const addController = require('../../controllers/accountController/add.controller.js')
const deleteAccount = require('../../controllers/accountController/delete.controller.js')
const getAccounts = require('../../controllers/accountController/get.controller.js')
const getByIdAccount = require('../../controllers/accountController/getById.controller.js')
const updateAccount = require('../../controllers/accountController/edit.controller.js')

router.post('/add-account', addController);
router.delete('/delete-account/:id', deleteAccount);
router.get('/get-accounts', getAccounts);
router.get('/get-account/:id', getByIdAccount);
router.put('/edit-account/:id', updateAccount);

module.exports = router;
