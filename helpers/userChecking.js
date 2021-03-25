const { Readers } =  require('../models');

const userChecking = (req,res,next) => {
  const uname = req.body.username;
  const pswd = req.body.password;
  Readers.findAll({
    where: {
      username : uname,
      password : pswd
    }
  }).
    then( data => {
      console.log(data);
      [ req.session.user ] = data;
      next()
    }).
    catch( err => { 
     req.session.loginFailed = true;
     req.session.loginErr = err;
    });

}

module.exports  = userChecking;
