import React, {useEffect, useState} from "react";

import { createServer } from "miragejs"

import './App.css';
import {Grid} from '@mui/material';
import UserAvatar from "./components/User/Avatar";
import Name from "./components/User/Name";
import CustomForm from "./components/CustomForm";
import {NAME_LENGTH, COMMENT_LENGTH, FIELD_NAME, FIELD_COMMENT} from "./constants/validation";
import Notification from "./components/Notification";

let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

const App = (props) => {

  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [error, setError] = useState('')
  const [openNotification, setOpenNotification] = useState(false)
  const [notificationType, setNotificationType] = useState('')

  const [data, setData] = useState([])

  let [users, setUsers] = useState([])



  useEffect(() => {
    fetch("/api/users")
        .then((res) => res.json())
        .then((json) => {
          setUsers(json.users)
        })
  }, [])

  console.log(users)

  const sendComment = () => {

    //Добавляем минимальную валидацию на отсутствие значений
    if (name.length <= NAME_LENGTH) {
     return  setError(`${FIELD_NAME} не может быть короче, чем ${NAME_LENGTH} символа`)
    }

    if (commentText.length < COMMENT_LENGTH) {

      return  setError(`${FIELD_COMMENT} не может быть короче, чем ${COMMENT_LENGTH} символа`)
    }

    //Формируем данные для отправки их на бэкенд или отображения на странице с комментариями
    const dataForSend = [{
       name: name,
       text: commentText
    }]

    setData(dataForSend)
    //Здесь можно добавить логику до отправки данных на бэкенд.

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

        <Grid item xs={6}>
          <CustomForm
              formProps={formProps}
          />
        </Grid>

        <Grid item xs={6}>
          <div>
            <UserAvatar userName={name}/>
            <Name userName={name}/>
          </div>
        </Grid>
      </Grid>
      <div onClick={()=>setOpenNotification(true)}>open</div>

      <Notification
          notificationType={notificationType} setNotificationType={setNotificationType}
          openNotification={openNotification} setOpenNotification={setOpenNotification}/>
      {error}
    </div>
  );
}

export default App;
