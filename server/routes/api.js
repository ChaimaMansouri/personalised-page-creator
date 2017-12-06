const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const video=require('../models/video');
const image=require('../models/image');
var fs = require('file-system');
var multer = require('multer');

var DIR = './src/assets/uploads';

var upload = multer({dest: DIR}).single('photo');
const db='mongodb://127.0.0.1/pageProject';
mongoose.Promise=global.Promise;
mongoose.connect(db,{ useMongoClient: true },function(err){
    if(err){
        console.error("Error! "+err);
    }
});

router.get('/galerie',function(req,res){
fs.readdir('./src/assets/apps/galerie', function(err, files) {
    if (err) return;
    res.json(files);
});
});
router.post('/getGal',function(req,res,next){
    var alb=req.body.dir;
    fs.readdir('./src/assets/apps/galerie/'+alb, function(err, files) {
    if (err) return;
    res.json(files);
});
});

router.get('/',function(req,res){
    res.send('api works');
});

router.post('/upload', function (req, res, next) {
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
        path = req.file.path;
        return res.send(req.file.filename); 
  });     
});
router.post('/imageSave',function(req,res){
    console.log('post image');
    var img=new image();
    img=req.body;
    img.save(function(err,insertedImg){
        if(err){
            console.log('err save image');
        }
        else{
            res.json(insertedImg);
        }
    });
})
router.get('/videos',function(req,res){
  console.log('all video');
  video.find({})
  .exec(function(err,videos){
      if(err){
          console.log("err video");
      }else{
          res.json(videos);
      }
  });
});

router.get('/video/:id',function(req,res){
  console.log('video');
  video.findById(req.params.id)
  .exec(function(err,video){
      if(err){
          console.log("err video");
      }else{
          res.json(video);
      }
  });
});

router.post('/video',function(req,res){
    console.log('post video');
    var newV=new video();
    newV.videoid=req.body.videoid;
    newV.url=req.body.url;
    newV.save(function(err,insertedV){
        if(err){
            console.log('err save video');
        }
        else{
            res.json(insertedV);
        }
    });
});

router.put('/video/:id',function(req,res){
    console.log('update video');
    video.findByIdAndUpdate(req.params.id, {
        $set:{id:req.body.videoid, url:req.body.url}
    },
        {
            new:true
        },
        function(err,updatedvideo){
            if(err){
                res.send("err update video");
            }else{
                res.json(updatedvideo);
            }
        });
    });

router.delete('/video/:id',function(req,res){
    console.log('delete video');
    video.findByIdAndRemove(req.params.id,function(err,deletedvideo){
        if(err){
            res.send("err delete");
        }
        else{
            res.json(deletedvideo)
        }
    })
})
   

module.exports=router;