var express=require("express");
var router = express.Router();

router.post("/checking.do", function(req, res){
    console.log("checking.do...!!!!!!");
});

module.exports=router;