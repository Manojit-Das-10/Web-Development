// import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Like a post
exports.likePost = async (req,res) => {

    try{
        const {post,user} = req.body;

        // Check if the post exists in the database
        const foundPost = await Post.findById(post);
        if (!foundPost) {
            return res.status(404).json({
                error: "Post not found",
            });
        }

        const like = new Like({
            post,user,
        });
        const savedLike = await like.save();

        // update the post colection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{likes:savedLike._id}}, {new:true}).
        populate("likes").exec();
        
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while liking post",
        });
    }
}

// Unlike a post
exports.unlikePost = async (req,res) => {
    try{
        const{post,like} = req.body;
        // find and delete the like collction me se
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

         // Check if the like was found and deleted
         if (!deletedLike) {
            return res.status(404).json({
                error: "Like not found",
            });
        }

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});
        
        res.json({
            post:updatedPost,
        });
    }

    catch(error){
        return res.status(400).json({
            error:"Error while unliking post",
        });
    }
}



exports.dummyLink = (req, res) => {
    res.send("This is a dummy link response");
};