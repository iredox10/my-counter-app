import Counter from "../models/counter"
import User from "../models/user"


export const setCounter = async (req,res) =>{
    try {
        const counter = await Counter.create(req.body)
        const user = await User.findById(req.params.id)
        user.counters.push(counter)
        user.save()
        res.json(counter)
    } catch (err) {
        res.json(err)
    }
}


export const getTarget = async (req,res)=>{
    try {
        const counter = await Counter.get
    } catch (err) {
        
    }
}


export const saveCounter = async (req,res) =>{
    try {
        const counter = await Counter.findByIdAndUpdate(req.params.id,{
            count: req.body.count
        },{new:true})
        res.json(counter)
    } catch (err) {
        res.json(err)       
    }
}

export const clearCounter = async (req,res)=>{
    try {
        const counter = await Counter.findByIdAndDelete(req.params.id)
        const user = await User.findOneById(req.params.userId)
        user.counters.pop(counter._id)
        res.json(counter)
    } catch (err) {
        res.json(err)
    }
}