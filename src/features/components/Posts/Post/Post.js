import React, { useState } from 'react'
import './Post.css';

const Post = props => {

    const [likeBtn, setLikeBtn] = useState(false);
    const { title, description, likesCount, postComments } = props.data;

    const likeHandler = () => {
        console.log('stiglo')
        setLikeBtn(!likeBtn);
    }    

    let comments = postComments.map(commentText => {
        return (
            <p>{commentText}</p>
        )
    })

    return (
        <div class="single-post">
            <span>{title}</span>
            <h2>{likesCount}</h2><span class="check" onClick={likeHandler}  style={ likeBtn ? { color:'#49ff49'} : {color: 'grey'} }  >&#10004;</span>
            <p>{description}</p>
            <textarea></textarea>
            <button type="submit">Add comment</button>

            {comments ? comments : 'No Comments'}

        </div>
    )
}

export default Post
