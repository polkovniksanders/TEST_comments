import React, {useEffect, useState} from "react";

import './App.css';
import {Grid} from '@mui/material';
import UserAvatar from "./components/User/Avatar";
import Name from "./components/User/Name";
import CustomForm from "./components/CustomForm";
import {NAME_LENGTH, COMMENT_LENGTH, FIELD_NAME, FIELD_COMMENT} from "./constants/validation";


const App = (props) => {

  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [error, setError] = useState('')

  const [data, setData] = useState([])



  useEffect(()=> {
    get()
  }, [])

  const get = () => {

  }

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
      {error}
    </div>
  );
}

export default App;
