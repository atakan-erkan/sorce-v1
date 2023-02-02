const express = require('express')
const router = express.Router()
const post = require('../models/post')
const path = require('path')

router.post("/sorcele", (req, res) => {

    let post_image = req.files.post_image

    post_image.mv(path.resolve(__dirname, '../public/images/postimages', post_image.name))

  post.create({
      ...req.body,
      post_image:`images/postimages/${post_image.name}`,
      author: req.session.userID
  }, )
        req.session.sessionFlash = {
            type: 'alert alert-success',
            message: 'Sorce başarılı bir şekilde gönderildi.'
        }

  res.redirect('/index')
});

function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

router.get('/:id',(req,res)=>{

    post.findById(req.params.id).lean().then(post=>{
        res.render('site/profil', {post:post})
    })
})

module.exports = router