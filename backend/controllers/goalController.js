const asyncHander = require('express-async-handler');

// @desc     Get goals
// @route    GET /api/goals
// @acesss   Private
const getGoals = asyncHander(async (req, res) => {
    res.status(200).json({message: 'Get goals'});
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

    res.status(200).json({message: 'Set goal'});
})

// @desc     Update goal
// @route    Put /api/goals/:id
// @acesss   Private
const updateGoal = asyncHander(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
})

// @desc     Delete goal
// @route    Delete /api/goals/:id
// @acesss   Private
const deleteGoal = asyncHander(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}