const express = require('express')
const router = express.Router()
const user = require('../models/user')


router.get('/kayit-ol', (req,res)=>{
    res.render('site/kayit-ol')
})
router.post('/kayit-ol', (req,res)=>{
    user.create(req.body,(error,user)=>{
        req.session.sessionFlash = {
            type: 'alert alert-info',
            message: 'Sorce başarılı bir şekilde kayıt oldunuz. Lütfen giriş yapınız.'
        }
        res.redirect('/users/giris-yap')
    })
})
router.get("/giris-yap", (req, res) => {
    res.render("site/giris-yap");
  });
router.post("/giris-yap", (req, res) => {
    const {email,password} = req.body

    user.findOne({email}, (error,user)=>{
        if(user){
            if(user.password == password){
                req.session.userID = user._id
                res.redirect('/index')
            } else {
                res.redirect('/users/giris-yap')
            }
        } else {
            res.redirect('/users/kayit-ol')
        }
    })
  });

  router.get("/cikis-yap", (req, res) => {
    req.session.destroy(()=>{
        res.redirect("/");
    })
    
  });

module.exports = router