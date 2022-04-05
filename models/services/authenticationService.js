const bcrypt = require('bcryptjs');
const {db} = require('../db');

exports.register = (username, password, c_password, firstname, lastname, address, phonenumber, email) => {
   const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(password, salt);
   console.log(hash);

   const myobj = {username, password:hash, firstname, lastname, address, phonenumber, email};
    
   db().collection('user').insertOne(myobj, (err, res) => {
      if (err) throw err;
      console.log("1 document inserted");
   });
}

exports.verifyUser = async (username, password) => {
    const user = await db().collection('user').findOne({username});

    if(!user)
        return false;

    console.log(user.password);

    if(bcrypt.compareSync(password, user.password)) {
        console.log(user);
        return user;
    }
    return false;
}