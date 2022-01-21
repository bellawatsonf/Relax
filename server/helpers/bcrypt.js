var bcrypt = require('bcryptjs');

function encrypt (password){
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

function decrypt (password, afterPassword) {
    return bcrypt.compareSync(password, afterPassword);
}

module.exports =  {encrypt,decrypt}