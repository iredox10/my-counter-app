import { resolveSync } from "bun";
import Counter from "../models/counter";
import User from "../models/user";

// export const setTarget = async (req,res) =>{
//     try {
//         const counter = await Counter.create({
//             name: req.body.name,
//             target: req.body.target,
//             active: req.body.active
//         })
//         const user = await User.findOne({username: req.body.username})
//         user.counters.push(counter)
//         user.save()
//         // make the rest of counters false
//         const counters = await User.findOne({ username: req.body.username }).populate('counters')
//         const c = counters.counters.map((c,i) =>{
//             if(c._id !== counter._id){
//                 c.active = false
//             }else{
//                 c.active = true
//             }
//             return c.active
//         })
//         counters.save()
//         res.json({counter,user})
//     } catch (err) {
//         res.json(err)
//     }
// }

export const setTarget = async (req, res) => {
  try {
    const counter = await Counter.create({
      name: req.body.name,
      target: req.body.target,
      active: req.body.active,
    });

    const user = await User.findOne({ username: req.body.username });

    // Set all counters to false before updating the new one.
    await Counter.updateMany(
      { _id: { $in: user.counters } },
      { $set: { active: false } }
    );

    user.counters.push(counter);
    await user.save();

    // Set the newly created counter to active
    await Counter.updateOne({ _id: counter._id }, { $set: { active: true } });
    res.json({ counter, user, c });
  } catch (err) {
    res.json(err);
  }
};

export const getTarget = async (req, res) => {
  try {
    const counter = await Counter.get;
  } catch (err) {}
};

export const saveCounter = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      req.params.id,
      {
        count: req.body.count,
      },
      { new: true }
    );
    res.json(counter);
  } catch (err) {
    res.json(err);
  }
};

export const clearCounter = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndDelete(req.params.id);
    const user = await User.findOneById(req.params.userId);
    user.counters.pop(counter._id);
    res.json(counter);
  } catch (err) {
    res.json(err);
  }
};

export const getCounters = async (req, res) => {
  try {
    const user = req.params.user;
    const counters = await User.findOne({ username: req.params.user }).populate(
      "counters"
    );
    res.json({ counters: counters.counters });
  } catch (err) {
    res.json(err);
  }
};


export const updateCounter = async (req, res) => {
  try {
    const counter = await Counter.findById(req.params.id);

    if (!counter) {
      return res.status(404).json({ error: "Counter not found" });
    }

    counter.count = counter.count + 1;
    await counter.save();

    res.json({ counter: counter.count });
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the counter." });
  }
};

// export const stats = async(req,res) =>{
//   try {
//     const counts = await User.findOne({username: req.body.username}).populate('counts')
//     const stats = counts.counts.aggregate([{$match: req.body.}])
//   } catch (err) {
    
//   }
// }
