import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import CommentDate from "../Date"

const Comments = (props) => {
  const [ isExpanded, setIsExpanded ] = useState(false)

  useEffect(()=>
    console.log(props)
  , [])

  console.log(props)
  return (
    <div className={'comment'}>
      {props.data && props.data.map((comment, key) =>
        <div className={'comment__wrapper'} key={key}>

          <div className={'comment__heading'}>
            <div className={'comment__author'}>{comment.author}</div>
            <div className={'comment__rating'}>{comment.rating}</div>
          </div>

          {comment.rating && comment.rating <= -10
            ? <button onClick={()=> setIsExpanded(true)}>'hide'</button>
            :
            <div className={'comment__text'}>
              <p>{comment.commentText}</p>
            </div>
          }


          <CommentDate createdDate={comment.createdDate}/>
        </div>
      )}
    </div>
  )
}

Comments.propTypes = {
  Index: PropTypes.func,
}

export default Comments
