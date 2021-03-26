const { Readers } =  require('../models');
const bcrypt = require('bcrypt')

const userChecking = (req,res,next) => {
  const uname = req.body.username;
  const pswd = req.body.password;
  Readers.findAll({
    where: {
      username : uname
    }
  }).
    then( data => {
      if (data.length > 0 && bcrypt.compareSync(pswd,data[0].password)) {
        [req.session.user ] = data;
        next()
      } else {
        req.session.loginFailed = true;
        req.session.loginFailedMsg = 'Username or password is not correct';
        next()

      }
    }).
    catch( err => {
     req.session.loginFailed = true;
     req.session.loginErr = err;
    });

}

module.exports  = userChecking;
