const express = require('express')
const router = express.Router();

const {alltasks, newtask, singletask, updatetask, deletetask} = require('../alltasks');


router.route('/').get(alltasks).post(newtask);
router.route('/:id').get(singletask).patch(updatetask).delete(deletetask);

module.exports = router;