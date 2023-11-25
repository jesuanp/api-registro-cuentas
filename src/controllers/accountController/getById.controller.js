const {Account} = require('../../db.js');

module.exports = async (req, res) => {

    const { id } = req.params;

    try {

        let account = await Account.findByPk(id);

        if(!account) return res.status(404).json({});

        return res.status(200).json(account);
        
    } catch (error) {
        return res.send(error);
    }

}