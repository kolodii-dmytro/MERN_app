const Post = require('../db/models/post')

async function deletePost(data) {
    const {_id, autorId} = data
    const  resp = await Post.deleteOne({_id});
    return {resp};
}
module.exports = deletePost