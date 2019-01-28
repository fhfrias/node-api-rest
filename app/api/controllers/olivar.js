const olivarModel = require('../models/olivar');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  olivarModel.findById(req.params.olivarId, function(err, olivarInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Olivar found!!!", data:{olivar: olivarInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let olivarList = [];
olivarModel.find({}, function(err, olivares){
   if (err){
    next(err);
   } else{
    for (let olivar of olivares) {
     olivarList.push({id: olivar._id, name: olivar.name, variedad: olivar.variedad, num_olivas: olivar.num_olivas});
    }
    res.json({status:"success", message: "Olivares list found!!!", data:{olivares: olivarList}});
       
   }
});
 },
updateById: function(req, res, next) {
  olivarModel.findByIdAndUpdate(req.params.olivarId,{name:req.body.name}, function(err, olivarInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Olivar updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  olivarModel.findByIdAndRemove(req.params.olivarId, function(err, olivarInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Olivar deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  olivarModel.create({ name: req.body.name, variedad: req.body.variedad, num_olivas: req.body.num_olivas }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Olivar added successfully!!!", data: null});
      
    });
 },
}