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
    },
    create:(req,res)=>{
        let {title, content, image ,category} = req.body
        if (title && content && category) {
            db.Posts.create({
                title: title,
                content: content,
                image: image,
                category: category,
            })
            .then(data=>{
                res.send('Post created successfully')
            })
            .catch(error=>{
                res.send(error)
            })
        }else{
            res.send({msg:'Title, Content and Category be required'})
        }
    },
    update:(req,res)=>{
        let {title, content, image ,category} = req.body
        db.Posts.update({
            title: title,
            content: content,
            image: image,
            category: category,
        },{
            where:{
                id:req.params.id
            }
        })
        .then(data=>{
            res.send({msg:'Post updated successfully'})
        })
        .catch(error=>{
            res.send({msg:'The post you are trying to update does not exist'})
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