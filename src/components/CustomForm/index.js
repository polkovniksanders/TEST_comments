import React from 'react'
import PropTypes from 'prop-types'
import {Button, TextareaAutosize, TextField} from "@mui/material"
import {FIELD_NAME, FIELD_COMMENT} from "../../constants/validation"

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CustomForm = ({formProps}) => {
  const {name, setName, commentText, setCommentText, send, notificationType} = formProps

  const textAreaStyle = {
    width: '100%',
    minHeight: '45px',
    height: '45px',
    maxHeight: '540px',
    margin: '1.5rem 0',
  }

  return (
    <div className={'post'}>
      <div className={'post__name'}>
        <TextField
          id="outlined-basic"
          label={FIELD_NAME}
          variant="outlined"
          value={name}
          onChange={ e => setName(e.target.value)}
          style={textAreaStyle}
        />
      </div>

      <div className={'post__text'}>
        <TextareaAutosize
          minRows={6}
          maxRows={12}
          aria-label="textarea"
          placeholder={FIELD_COMMENT}
          onChange={ e => setCommentText(e.target.value)}
          value={commentText}
          style={textAreaStyle}
        />
      </div>

      <Button
        size={'large'}
        onClick={()=> send()}
        variant="contained">
        Отправить
      </Button>

    </div>
  )
}

CustomForm.propTypes = {
  isDisabled: PropTypes.bool,
}

export default CustomForm
