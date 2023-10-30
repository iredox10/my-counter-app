import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'

const signJwt = ({user_id}) =>{
    return jwt.sign({user_id}, process.env.JWT_SECRET,{expiresIn: "1d"})
}


export const signup = async (req,res)=>{
    try {
        const hashPwd = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            name: req.body.name,
            username: req.body.username,
            password: hashPwd
        })
        const jwt = signJwt(user._id)
        res.json({user,jwt})
    } catch (err) {
        res.json(err.message)
    }
}

export const signin = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(400).json({message: "user not found"})
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch) return res.status(400).json({message: "invalid credentials"})
        // const jwt = signJwt(user._id)
        res.json({user})
    } catch (err) {
        res.json(err.message)
    }
}