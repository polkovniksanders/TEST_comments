import React, {useEffect, useState} from "react"
import { createServer } from "miragejs"
import {Grid} from '@mui/material'

import CommentsContainer from "./Containers/CommentsContainer"
import PostContainer from "./Containers/PostContainer"
import {NAME_LENGTH, COMMENT_LENGTH, FIELD_NAME, FIELD_COMMENT} from "./constants/validation"
import Notification from "./components/Notification"

import {comments} from "./fakeData"
import './styles/main.scss'

let server = createServer()
server.get("/api/data",{comments})

const App = (props) => {

  const [ name, setName ] = useState('')
  const [ commentText, setCommentText ] = useState('')
  const [ openNotification, setOpenNotification ] = useState(false)
  const [ notificationType, setNotificationType ] = useState('')
  const [ notificationText, setNotificationText ] = useState('')
  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => {
        setData(json.comments)
      })
  }, [ ])

  const sendComment = () => {

    //Добавляем минимальную валидацию на отсутствие значений
    if (name.length < NAME_LENGTH) {
      setOpenNotification(true)
      setNotificationType('error')
      setNotificationText(`${FIELD_NAME} не может быть короче, чем ${NAME_LENGTH} символа`)
      return
    }

    if (commentText.length < COMMENT_LENGTH) {
      setOpenNotification(true)
      setNotificationType('error')
      setNotificationText(`${FIELD_COMMENT} не может быть короче, чем ${COMMENT_LENGTH} символа`)
      return
    }
    const calcDate = () => {
      let now = new Date().getTime()
      let date =  Math.round(new Date() / now)
      return date
    }

    //Формируем данные для отправки их на бэкенд и отображения на странице с комментариями
    const dataForSend = [ {
      author: name,
      commentText: commentText,
      createdDate: calcDate(),
      rating: 0,
    } ]
    setData( [ ...dataForSend, ...data  ] )

    setNotificationType('success')
    setOpenNotification(true)
    setNotificationText('Комментарий успешно отправлен')

    setName('')
    setCommentText('')

    /* Здесь может быть обработчик, который в случае успешного ответа с сервера может чистить поля
    const res = api.SOME_BACKEND_REQUEST()
    if (res.status === 200) {
      SUCCESS_MESSAGE
    } else setNotificationType('error')
     */

  }

  const formProps = {
    name: name,
    setName: setName,
    setCommentText: setCommentText,
    commentText: commentText,
    send: sendComment,
    notificationType: notificationType,
  }

  const notificationProps = {
    openNotification: openNotification,
    setOpenNotification:setOpenNotification,
    notificationType:notificationType,
    setNotificationType:setNotificationType,
    notificationText:notificationText,
    setNotificationText:setNotificationText,
  }

  return (
    <div className="App">
      <Grid container spacing={2}>
        <PostContainer formProps={formProps}/>
        <CommentsContainer data={data} setData={setData}/>
      </Grid>

      <Notification {...notificationProps}/>
    </div>
  )
}

export default App
