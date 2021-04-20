const db = require('../database/models')

module.exports = {
    list:(req,res)=>{
        db.Posts.findAll({
            attributes: ['id','title','image','category','date'],
            order:[['date','DESC']]
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
    },
    create:(req,res)=>{
        let {title, content, image ,category} = req.body
        if (image.includes('.png')||image.includes('.jpg')) {
            if (title && content && category) {
                db.Posts.create({
                    title: title,
                    content: content,
                    image: image,
                    category: category,
                })
                .then(data=>{
                    res.send({msg:'Post created successfully'})
                })
                .catch(error=>{
                    res.send(error)
                })
            }else{
                res.send({msg:'Title, Content and Category be required'})
            }
        }else{
            res.send({msg:'The url of the image must have a .jpg or .png extension'})
        }
    },
    update:(req,res,next)=>{
        let {title, content, image ,category} = req.body
        let posts = db.Posts.findOne({where:{id:req.params.id}})
        let upd = db.Posts.update({
            title: title,
            content: content,
            image: image,
            category: category,
        },{
            where:{
                id:req.params.id
            }
        })
        Promise.all([posts, upd])
        .then(data=>{
            if (data[0]==null) {//pregunto si el posteo no existe
                res.send({msg:'The post you are trying to update does not exist'})
            }else{
                res.send({msg:'Post updated successfully'})
            }
        })
        .catch(error=>{
            console.log(error);
        })
    },
    delete:(req,res)=>{
        db.Posts.destroy({
            where:{
                id:req.params.id
            }
        })
        .catch(error=>{
            res.send({msg:'The post you are trying to delete does not exist'})
        })
    }
}