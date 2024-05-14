const asyncHander = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc     Get goals
// @route    GET /api/goals
// @acesss   Private
const getGoals = asyncHander(async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json(goals);
})


// @desc     Set goal
// @route    Post /api/goals/
// @acesss   Private
const setGoal = asyncHander(async (req, res) => {
    console.log(req.body);
    if(!req.body.text){
        // res.status(400).json({message: 'Please add a text field'});
        res.status(400);
        throw new Error('Please add a text field');
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal);
})

// @desc     Update goal
// @route    Put /api/goals/:id
// @acesss   Private
const updateGoal = asyncHander(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal);
})

// @desc     Delete goal
// @route    Delete /api/goals/:id
// @acesss   Private
const deleteGoal = asyncHander(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }

    // const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    await goal.deleteOne();
    res.status(200).json({id: req.params.id});
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}