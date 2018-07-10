const Sequelize = require('sequelize')
const conn = new Sequelize('postgres://localhost/atlas',{logging:false, operatersAlias:false})
const bcrypt = require('bcrypt')

const Users = conn.define('user', {
		username: Sequelize.STRING,
		password: Sequelize.TEXT
	},
	{
		hooks: {
			beforeCreate(user,options) {
				if (user){
					return bcrypt.genSalt(12)
					.then(salt => bcrypt.hash(user.password, salt))
					.then(hashPw => user.password = hashPw)
					.then(hashPw => this.password = hashPw)
					.catch(error => console.log(error.message))
				}
			}
		}
	}
)
Users.isValidPassword = function(password){
	return bcrypt.compare(password,this.password)
	.then(iscorrectPassword => iscorrectPassword)
	.catch(error => console.log('validation error: ',error.message))	
}

module.exports = {
	conn,
	Users
}