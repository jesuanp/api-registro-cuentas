const {Account} = require('../../db.js');

module.exports = async (req, res) => {

    try {

        let accounts = await Account.findAll();

        return res.status(200).json(accounts);
        
    } catch (error) {
        return res.send(error)
    }

}