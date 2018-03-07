module.exports= (req ,res ,next)=>{
  console.log('befor session---------------------');
  console.log(req.session);
  console.log('after session---------------------');
  console.log(req.cookies);
  res.render('home.hbs' , req);
}
