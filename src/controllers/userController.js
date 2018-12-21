const express = require('express')
const User = require('../models/userModels')

const index = async (req, res, next) => {
        const users =  await User.find()
        res.status(200).json(users)
}

const create = async (req, res, next) => {
    try {

        const newUser = new User(req.body)
        const user = await newUser.save()
        res.status(201).json(user)

    } catch (error) {
        next(error)
    }
}

const getUser = async (req, res, next) => {
    const { userId } = req.params;

    const user = await User.findById(userId)
    res.status(200).json(user)
}

module.exports = {
    index,
    create,
    getUser
}