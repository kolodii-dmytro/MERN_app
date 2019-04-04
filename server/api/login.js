const User = require('../db/models/user')

const checkUserWithPassword = (user, password) => {
    return (user && user._id) ? user.checkPassword(password) : false
}

async function login(data) {
    const user = await User.findOne({ login: data.login })
    if (checkUserWithPassword(user, data.password)) {
        return {id:user._id}
    } else {
        throw 'Credentials not valid'
    }
}
module.exports = login

  // const testUser = new User({login:'user', password:'31337'})
        // testUser.save((data)=>{console.log(data)})
        //console.log(User)
        // if (err) throw new Error('Server error');
        //     if (user && user._id){
        //         if(user.checkPassword(data.password)){

        //         }

        //         return user;
        //     }
