const mongoose = require('../mongose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName:{type: String},
        lastName:{type: String}, 
        login:{type: String, 
            required:true, 
            unique:true},
        id:{type:Number},
        hashedPassword:{type:String,
             required:true},
        salt:{type:String, 
            required:true},
        created: {
            type: Date,
            default: Date.now
        }
    }
);
UserSchema.methods.encryptPassword = function(password){
    return crypto.createHmac('sha1', this.salt)
    .update(password)
    .digest('hex')
}
UserSchema.methods.checkPassword = function(password){
    return this.encryptPassword(password) === this.hashedPassword;
}

UserSchema
.virtual('password')
.set(function(password){
    this._plainPassword = password;
    this.salt = Math.random()+'';
    this.hashedPassword = this.encryptPassword(password);
})
.get(function(){return this._plainPassword})

module.exports = mongoose.model('User', UserSchema);