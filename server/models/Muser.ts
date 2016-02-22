var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var muserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  email: {
    type: String,
    required: true,
    index: {   
      unique: true
    }
  },
	password: {
		type: String,
    require: true,
		set: (v) => { 
      return bcrypt.hashSync(v, bcrypt.genSaltSync(7));
    }
	}
});

muserSchema.statics.serialize = (user, done) => {
    console.log('Serialize USER');
    done(null, user.id);
  }
muserSchema.statics.deserialize = (id, done) => {
	this.findById(id, (err, user) => { 
    console.log('Deserialize USER')
    done(err, user) 
  })
}

muserSchema.statics.authenticate = (req, username, password, done) => {
  console.log("Entré dans le authenticate");
  this
    .findOne({ "email": username })
    //.Promise()
    .then((muser) => {
      if (!muser) { return done(null, false, { message: 'Wrong email' }) }
      bcrypt.compare(password, muser.password, (err, res) => {
        if (res) { return done(null, muser) } 
        else { return done(null, false, { message: 'Wrong password' }) }
      })
    })
    .catch(function (error) { return done(error) });
}

muserSchema.statics.muserSignup = (req, username, password, done) => {
  console.log("Entré dans la méthode musersignup");
  this
    .findOne({ email: username })
    //.exec()
    .then(function(muser) {
    	console.log("Dans le then après findOne / Muser : " + muser)
      if(!muser) {
        this
          .create({ email: username, username: req.body.muser.username, password: password })
          //.exec()
          .then(function(muser) { return done(null, muser) })
          .catch(function(error) { return done(error) });
      } else { return done(null, false, { message: 'Muser already exists' }) }
    })
    .catch(function(error) { return done(error) })
}

var Muser = mongoose.model('Muser', muserSchema);

module.exports = Muser;