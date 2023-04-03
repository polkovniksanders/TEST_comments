import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import CommentDate from "../Date"
import {Badge, Button} from "@mui/material"
import UserAvatar from "../User/Avatar"
import UserName from "../User/Name"
import { Paper } from '@mui/material'

/**
 * Функция отображения и обработки комментариев на странице
 * @param data {} принимает объект с массивом с комментариями
 * @param setData {} функция обработчик массива с комментариями
 * @returns {JSX.Element}
 * @constructor
 */
const Comments = ({data, setData}) => {
  const [ hidden, setHidden ] = useState([])
  const [ expanded, setExpanded ] = useState(false)


  useEffect(() => {
    if (data) {
      const lowRatings = data && data?.filter(element => element.rating <= -10 )
      const ids = lowRatings?.map(elem => elem.id)
      setHidden(ids)
    } else setExpanded(true)

  }, [ data ] )

  const showComment = (id) => {
    const filteredIds = hidden.filter((elementId) => elementId !== id)
    setHidden(filteredIds)

  }

  /**
   * Обработчик увеличения значения
   * @param comment
   * @param type
   */
  const handleRating = (comment, type) => {

    if (type === 'increase') {
      comment.rating = comment.rating + 1
    } else comment.rating = comment.rating - 1

    const findElement = data.find(item => item.id === comment.id)
    const elementToArray = [ findElement ]
    const sliced = data.filter(item => item.id !== comment.id)
    setData([ ...elementToArray, ...sliced  ])
    console.log(sliced)
    console.log(elementToArray)
  }

  const userCommentInfo = {
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <div className={'comment'}>
      {data && data.map((comment, key) =>
        <Paper className={'comment__wrapper'} key={key} elevation={3}>

          <div className={'comment__heading'}>
            <div style={userCommentInfo}>
              <UserAvatar
                userName={comment.author}
              />
              <UserName
                className={'comment__author'}
                userName={comment.author}
              />
            </div>

            <div className={'comment__rate'}>
              <Badge
                showZero
                color="primary"
                badgeContent={comment.rating}
              />
              <Button
                style={{marginLeft: '1.5rem'}}
                size={'small'}
                onClick={()=> handleRating(comment, 'increase')}
                variant="outlined">
                +
              </Button>
              <Button
                style={{marginLeft: '1.5rem'}}
                size={'small'}
                onClick={()=> handleRating(comment)}
                variant="outlined">
                -
              </Button>
            </div>
          </div>

          {hidden.indexOf(comment.id) ?
            <div className={'comment__text'}>
              <p>{comment.commentText}</p>
            </div>
            :
            <div className={'comment__hidden'}><p>Комментарий скрыт из-за низкого рейтинга</p></div>
          }

          <div  className={'comment__footer'}>
            {hidden.indexOf(comment.id) ?
              null :
              <Button
                onClick={() => showComment(comment.id)}
                size={'small'}
                variant="outlined">Показать</Button>
            }
            <CommentDate
              className={'comment__date'}
              createdDate={comment.createdDate}
            />
          </div>

        </Paper>
      )}
    </div>
  )
}

Comments.propTypes = {
  data: PropTypes.object,
}

export default Comments
