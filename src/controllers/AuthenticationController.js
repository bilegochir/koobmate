import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import config from '../config/config'

var User = mongoose.model('User')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 2
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
} 

export const register = (req, res) => {
    
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        
        res.json(user);
    })
};

export const login = (req, res) => {
    const {email, password} = req.body

    User.findOne({email: email}, (err, user) => {
        if (err) {
            res.send(err)
        }

        if(password != null) {
            user.comparePassword(password, (err, isMatch) => {

                if (err) console.log(err);
    
                if (isMatch) {
                    const userJson = user.toJSON()
                    res.send({
                        user: userJson,
                        token: jwtSignUser(userJson)
                    })
                } else {
                    return res.status(401).send('Username or password wrong.');
                }
            })
        } else {
            return res.status(401).send('Username or password wrong.');
        }
      
    })
};