const express = require('express')
const router = express.Router()
const post = require('../models/post')
const user = require('../models/user')

router.get('/', (req,res)=>{
    res.render('site/i-index');
})
router.get("/index", (req, res) => {

  console.log(req.session)

    if(!req.session.userID){
          res.redirect('/users/giris-yap')
        }
        post.find({}).populate({path:'author', model: user}).sort({$natural:-1}).lean().then(posts=>{
          res.render('site/index',{posts:posts})
        })
});
router.get("/genel", (req, res) => {

  if(!req.session.userID){
    res.redirect('/users/giris-yap')
  }
  post.find({}).populate({path:'author', model: user}).sort({$natural:-1}).lean().then(posts=>{
    res.render('site/genel',{posts:posts})
  })
});
router.get("/profil", (req, res) => {

  if(!req.session.userID){
    res.redirect('/users/giris-yap')
  }
  post.find({}).populate({path:'author', model: user}).sort({$natural:-1}).lean().then(posts=>{
    user.find({}).lean().then(users=>{
      res.render('site/profil',{posts:posts})
    })
  })
  })
  
router.get("/bildirimler", (req, res) => {
  if(req.session.userID){
    return res.render("site/bildirimler");
  }
  res.redirect('/users/giris-yap')
});
router.get("/mesajlar", (req, res) => {
  if(req.session.userID){
    return res.render("site/mesajlar");
  }
  res.redirect('/users/giris-yap')
});
router.get("/ayarlar", (req, res) => {
  if(req.session.userID){
   return res.render("site/ayarlar");
  }
  res.redirect('/users/giris-yap')
});
router.get("/uyelik-sozlesmesi", (req, res) => {
  res.render("site/uyelik-sozlesmesi");
});


module.exports = router