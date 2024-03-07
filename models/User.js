const {Schema, model, Types} = require('mongoose');

let shema = new Schema({
    nick_name: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String, required: false},
    created_date: {type: Date, required: true, default: Date.now()},
    is_admin: {type: Boolean, required: true, default: false},
    posts: [{
        type: Types.ObjectId,
        ref: "Post",
        required: false
    }],
    save_posts: [{
        type: Types.ObjectId,
        ref: "Post",
        reuired: false
    }]
})

module.exports = model('User', shema);