const express = require('express')
const { AppError, generateToken, Success } = require('../utils')
const userModel = require('../model/UserData')
const tweetModel = require('../model/tweetData')
const bcrypt = require('bcryptjs')

const login = async(req,res) => {
    const {email,password} = req.body

    if(!email || !password) return(res.status(400).json(AppError("No Input...")))

    const user = await userModel.findOne({email})
    if(!user) return(res.status(404).json(AppError("User Not Found...")))

    const passwordMatch = await bcrypt.compare(password,user.password)
    if(passwordMatch)
    {
        const token = generateToken(email)
        return (res.status(200).json(Success("User Logged in...",token)))
    }
    return(res.status(404).json(AppError("Wrong Password")))
}

const signUp = async(req,res) => {
    const {name,email,password,phone_number} = req.body

    if(!name || !email || !password) return(res.status(400).json(AppError("All required Fields are not present...")))

    const oldUser = await userModel.findOne({email})
    if(oldUser) return(res.status(409).json(AppError("User Already Exists...")))
    
    await userModel.create({
        name,
        email,
        password,
        phone_number
    })
    return(res.status(200).json(Success("New user Created...")))
}

const addTweet = async(req,res) => {
    const {profile_pic_src,name,twitter_handle,timestamp,tweet_content,pic_src} = req.body

    if(!tweet_content) return(res.status().json(AppError("Empty Tweet...")))

    await tweetModel.create({
        profile_pic_src,
        name,
        twitter_handle,
        timestamp,
        tweet_content,
        pic_src
    })
    return(res.status(200).json(Success("Tweet created...")))
}

module.exports = {login,signUp,addTweet}