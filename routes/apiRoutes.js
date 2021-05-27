const router = require("express").Router();
const Workout = require("../model/workout.js");

router.post("/api/workouts", (req,res) =>{
    Workout.create({}).then((workout)=>{
        res.json(workout);
    }).catch((err)=>{
        res.json(err);
    })
});

router.put("/api/workouts/:id",(req,res)=>{
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push:{exercises:req.body}},
        {new:true}
    ).then((workout)=>{
        res.json(workout);
    }).catch((err)=>{
        res.json(err);
    })
});

router.get("/api/workouts",(req,res)=>{
    Workout.aggregate([
        {
            $addFields:{
                totalWeight:{
                    $sum:"$exercises.weight"
                }
            }
        }
    ]).then((workout)=>{
        res.json(workout);
    }).catch((err)=>{
        res.json(err);
    })
})

router.get("/api/workouts/range",(req,res)=>{
    Workout.aggregate([
        {
            $addFields:{
                totalDuration:{
                    $sum:"$exercises.duration"
                }
            }
        }
    ]).limit(7).then((workout)=>{
        res.json(workout);
    }).catch((err)=>{
        res.json(err);
    })
});

// router.delete("")

module.exports = router;