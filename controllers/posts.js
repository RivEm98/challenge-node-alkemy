const db = require('../database/models')

module.exports = {
    list:(req,res)=>{
        db.Posts.findAll()
        .then(data=>{
            res.send(data)
        })
    }
}