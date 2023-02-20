import React, {useEffect, useState} from "react"

import { createServer } from "miragejs"

import './styles/main.scss'
import {Grid} from '@mui/material'
import UserAvatar from "./components/User/Avatar"
import Name from "./components/User/Name"
import CustomForm from "./components/CustomForm"
import {NAME_LENGTH, COMMENT_LENGTH, FIELD_NAME, FIELD_COMMENT} from "./constants/validation"
import Notification from "./components/Notification"
import Comments from "./components/Comments"
import {comments} from "./fakeDate"
import CommentsContainer from "./Containers/CommentsContainer"
import PostContainer from "./Containers/PostContainer"

let server = createServer()
server.get("/api/data",{comments})

const App = (props) => {

  const [ name, setName ] = useState('')
  const [ commentText, setCommentText ] = useState('')
  const [ error, setError ] = useState('')
  const [ openNotification, setOpenNotification ] = useState(false)
  const [ notificationType, setNotificationType ] = useState('')
  const [ data, setData ] = useState([])




  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => {
        setData(json.comments)
      })
  }, [ ])

  const sendComment = () => {

    setNotificationType('success')
    setOpenNotification(true)

    //Добавляем минимальную валидацию на отсутствие значений
    if (name.length < NAME_LENGTH) {
      return  setError(`${FIELD_NAME} не может быть короче, чем ${NAME_LENGTH} символа`)
    }

    if (commentText.length < COMMENT_LENGTH) {
      return  setError(`${FIELD_COMMENT} не может быть короче, чем ${COMMENT_LENGTH} символа`)
    }

    let date =  new Date()

    //Формируем данные для отправки их на бэкенд и отображения на странице с комментариями
    const dataForSend = [ {
      author: name,
      commentText: commentText,
      createdDate: date,
      rating: 0,
    } ]
    setData( [ ...dataForSend, ...data  ] )

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
    error: error,
    setError: setError,
    send: sendComment,
  }

  return (
    <div className="App">

      <Grid container spacing={2}>
        <PostContainer formProps={formProps}/>
        <CommentsContainer data={data}/>
      </Grid>

      <button onClick={()=>setOpenNotification(true)}>open</button>

      <Notification
        notificationType={notificationType} setNotificationType={setNotificationType}
        openNotification={openNotification} setOpenNotification={setOpenNotification}/>
      {error}
    </div>
  )
}

export default App
