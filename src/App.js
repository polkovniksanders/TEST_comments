import React, {useState} from "react";

import './App.css';
import {Grid} from '@mui/material';
import UserAvatar from "./components/User/Avatar";
import Name from "./components/User/Name";
import CustomForm from "./components/CustomForm";




const App = (props) => {

  const [name, setName] = useState('niga1')
  const [commentText, setCommentText] = useState('')
  const [error, setError] = useState('')



  const sendComment = () => {

    if (name && name.length <= 2) {
      setError('Имя не может быть таким коротким')
    }

    if (commentText && commentText.length < 10) {
      setError('Комментарий слишком короткий, может быть попробуешь написать больше?')
    }

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
        {error}
        <Grid item xs={6}>
          <CustomForm
              formProps={formProps}
          />
        </Grid>

        <Grid item xs={6}>
          <div>
            <UserAvatar/>
            <Name userName={name}/>
          </div>
        </Grid>
      </Grid>





    </div>
  );
}

export default App;
