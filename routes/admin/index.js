const express = require('express')
const router = express.Router()
const post = require('../../models/post')
const user = require('../../models/user')
const path = require('path')

router.get('/', (req,res)=>{

    post.find({}).populate({path:'author', model: user}).sort({$natural:-1}).lean().then(posts=>{
        res.render('admin/index',{posts:posts})
      })

})

router.delete('/:_id', (req,res)=>{
    post.remove({_id: req.params._id}).then(()=>{
        res.redirect('/admin')
    })
})

router.get('/edit/:_id', (req,res)=>{

   post.findOne({_id: req.params._id}).then(post=>{
       res.render('admin/editpost', {post:post})
   })

})

router.put('/:id',(req,res)=>{
    let post_image = req.files.post_image

    post_image.mv(path.resolve(__dirname, '../../public/images/postimages', post_image.name))
    post.findById(req.params.id).lean().then(post=>{
    post.findOne({_id: req.params.id}).then(post=>{
        post.title = req.body.title
        post.content = req.body.content
        post.date = req.body.date
        post.post_image = `images/postimages/${post_image.name}`
    
        post.save().then(post=>{
            res.redirect('/admin')
            })
        })
    })
})

module.exports = router