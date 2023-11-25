const {Account} = require('../../db.js');

module.exports = async (req, res) => {

    const { id } = req.params;

    try {

        await Account.destroy({
            where: {
                id
            }
        })

        return res.status(200).json({deleted: true});
        
    } catch (error) {
        return res.send(error)
    }

}