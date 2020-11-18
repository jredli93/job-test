import React, { useState, useEffect } from 'react'
import customComments from '../../../comments.json'

const Comments = () => {

    const [comments, setComments] = useState(customComments)

    // Lists all comments for logged in user with userId = 1
    let commentList = comments.comments.filter(comment => comment.userId === 1).map(item => {
        return (<p>{item.text}</p>)
    })

    return (
        <div>
            {commentList}
        </div>
    )
}

export default Comments
