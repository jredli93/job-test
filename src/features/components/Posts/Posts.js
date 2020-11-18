import React, { useState, useEffect } from 'react'
import SinglePost from './Post/Post';
import customPosts from '../../../posts.json';
import customUser from '../../../user.json';

const Posts = () => {

    const [posts, setPosts] = useState(customPosts)
    const [user, setUser] = useState(customUser)

    let currentUser = user.users.find(user => user.userId === 1)

    let allPosts = posts.posts.map(item => {
        return <SinglePost key={item.id} data={item} />
    })

    return (
        <div>
            <button>Reload</button>
            
            <span>Likes:{currentUser.likedPostsSum}</span>
            <span>Comments:{currentUser.commentsCount}</span>

            {allPosts ? allPosts : 'Loading...'}

        </div>
    )
}

export default Posts
