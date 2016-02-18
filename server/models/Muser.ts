var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var muserSchema = new Schema({
	username: String,
	email: String,
	password: {
		type: String,
		set: (v) => { 
      this.setDataValue('password', bcrypt.hashSync(v, bcrypt.genSaltSync(7)));
    }
	}
});

muserSchema.statics.serialize = (muser, done) => {done(null, muser.id)}
muserSchema.statics.deserialize = (id, done) => {
	this.findById(id).exec().then((muser) => { done(null, muser) })
}

muserSchema.statics.authenticate = (req, email, password, done) => {
  this
    .findOne({ email: email })
    .exec()
    .then((muser) => {
      if (!muser) { return done(null, false, { message: 'Wrong email' }) }
      bcrypt.compare(password, muser.password, (err, res) => {
        if (res) { return done(null, muser) } 
        else { return done(null, false, { message: 'Wrong password' }) }
      })
    })
    .catch(function (error) { return done(error) });
}

muserSchema.statics.muserSignup = (req, username, email, password, done) => {
  this
    .findOne({ email: email })
    //.exec()
    .then(function(muser) {
    	console.log("Dans le then après findOne / Muser : " + muser)
      if(!muser) {
        this
          .create({ email: email, username: username, password: password })
          //.exec()
          .then(function(muser) { return done(null, muser) })
          .catch(function(error) { return done(error) });
      } else { return done(null, false, { message: 'Muser already exists' }) }
    })
    .catch(function(error) { return done(error) })
}

var Muser = mongoose.model('Muser', muserSchema);

module.exports = Muser;