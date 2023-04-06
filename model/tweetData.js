const mongoose = require('mongoose')

const tweetDataSchema = new mongoose.Schema({
    profile_pic_src:{
        type:String
    },
    name:{
        type:String
    },
    twitter_handle:{
        type:String
    },
    tweet_content:{
        type:String
    },
    time_stamp:{
        type:String
    },
    pic_src:{
        type:String
    }
})

module.exports = mongoose.model('TweetData',tweetDataSchema)