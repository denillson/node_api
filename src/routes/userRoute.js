const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', userController.index, (req, res) => {
    res.status(200).json({
        message : 'You requested index page'
    })
})

router.post('/', userController.create, (req, res) => {
    res.status(200).json({
        message : 'You requested index page user post'
    })
})

router.get('/:userId', userController.getUser, (req, res) => {
    res.status(200).json({
        message : 'You requested user by id'
    })
})

module.exports = router;