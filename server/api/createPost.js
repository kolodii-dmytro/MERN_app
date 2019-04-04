const Post = require('../db/models/post')

async function createPost(data) {
    const newPost = new Post(data)
    
    const resp = await newPost.save();
    return {resp};
}
module.exports = createPost