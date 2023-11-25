const {Account} = require('../../db.js');

module.exports = async (req, res) => {

    const {id} = req.params;
    const editAccount = req.body;

    try {

        let account = await Account.findByPk(id);

        for (const property in editAccount) {

            account[property] = editAccount[property]
        }

        account.save();

        return res.status(200).json(account);
        
    } catch (error) {
        return res.send(error)
    }

}