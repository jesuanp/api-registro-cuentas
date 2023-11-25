const {Account} = require('../../db.js');

module.exports = async (req, res) => {

    const { email, state, date } = req.body;

    // let fecha = new Date().toLocaleString('en-US', {timeZone: 'America/Caracas'})

    try {

        let newAccount = await Account.create({
            email,
            state,
            date,
            cobrada: 0,
            banned: false
        })

        return res.status(200).json(newAccount);
        
    } catch (error) {
        return res.send(error)
    }

}