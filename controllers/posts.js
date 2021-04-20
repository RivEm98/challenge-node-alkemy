const db = require('../database/models')

module.exports = {
    list:(req,res)=>{
        db.Posts.findAll({
            attributes: ['id','title','image','category','date']
        })
        .then(data=>{
            res.send(data)
        })
    },
    detail:(req,res)=>{
        db.Posts.findOne({
            where:{
                id:req.params.id
            }
        })
        .then(data=>{
            if (data) {
                res.send(data)
            }else{
                res.send({msg:'The post you are looking for does not exist'})
            }
        })
        .catch(error=>{
            res.send(error)
        })
    }
}