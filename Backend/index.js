const express = require('express');
const { appendFile } = require('fs');
const mongoose = require('mongoose')
const User = require('./Users')
const Misc = require('./Misc')
const Post = require('./Posts')

mongoose.connect('mongodb://127.0.0.1:27017/textnetdb');
//mongoose.connect('mongodb+srv://textnetdb.l1rnh.mongodb.net/myFirstDatabase');
const app = express()
const port = 8000


app.use(express.json())

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/images', express.static('./images'))

app.post('/userExists', (req, res) => {
    User.findOne({'username': req.query.name}, 'username', function(err, user){
        const status = (err? "failed":"success")
        const exists = (user != null)

        res.json({"status":status, "exists": exists});
    });    
})

app.post('/createUser', (req, res) => {
    const user = new User({username: req.query.name, password: req.query.pass})
    user.save()
    res.json({"status": true});
})

app.post('/loginUser', (req, res) => {
  User.findOne({'username': req.query.name}, 'username password', function(err, user){
      const status = (err? "failed":"success")
      
      const success = (user? (user.password == req.query.pass) : false)

      res.json({"status":status, "success": success});
  });  
})


app.post('/createPost', (req, res) => {
    const profPicture = (req.query.profilePic == null? "default.jpg":req.query.profilePic)
    const post = new Post({username: req.query.name, profilePicture: profPicture, text: req.query.text})
    post.save()
    res.json({"status": true});
})

app.get('/getPosts', (req, res) => {
  Post.find({}, function(err, posts){
      const status = (err? "failed":"success")
      
      res.json({"status":status, "posts": posts});
  });  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})