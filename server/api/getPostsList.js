const Post = require('../db/models/post')

async function getPostsList(data) {
    const posts = await Post.find({})
    return {posts};
}
module.exports = getPostsList