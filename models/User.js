const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
     name: {
       type: String,
       require: true
     },
     name: String,
     require: true
  }
)

userSchema.plugin(PLM, {usernameField: 'email'})
const User = mongoose.model("User", userSchema);

module.exports = User;