const express = require('express')
const app = express()
const { conn, Users }  = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const morgan = require('morgan')
app.use(morgan('dev'))

const path = require('path')
app.use(express.static(path.resolve(__dirname, '..', 'dist')))

app.get('/*',(req,res,next)=>{
	res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

app.post('/create',(req,res,next)=>{
	const {username, password} = req.body
	Users.create({username, password})
	.then((user)=> res.send(user) )
	.catch(next)
})
app.post('/login',(req,res,next)=>{
	const {username, password} = req.body
	Users.findOne({username})
	.then((user)=> {
		Users.isValidPassword(password)
		.then(iscorrect => {
			console.log('what is user',user)
			if(iscorrect){
				res.send(user)
			}
			else{
				res.send('wrong password')
			}
		})
	})
	.catch(next)
})

app.use((err,req,res,next)=> console.log(err.message))

conn.sync({force: true})
.then( app.listen(3000,console.log('we are at 3000')) )
