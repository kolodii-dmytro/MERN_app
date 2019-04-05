const Post = require('../db/models/post')

async function editPost(data) {
    console.log(data);
    const {_id, text, title, autorId} = data
    
    const  resp = await Post.update({_id}, {text, title, autorId});
    return {resp};
}
module.exports = editPost