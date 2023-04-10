const mongoose = require("mongoose");
const { Schema } = mongoose;

const tweetDataSchema = new Schema(
  {
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "USerData",
      required:true
    },
    tweet_content: {
      type: String,
      required:true
    },
    pic_src: {
      type: String,
    },
    likes: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
          ref: "UserData",
        },
      },
    ],
    comments: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
          ref: "UserData",
        },
        text: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TweetData", tweetDataSchema);
