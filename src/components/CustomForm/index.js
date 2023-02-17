import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, TextareaAutosize, TextField} from "@mui/material";
import {NAME_LENGTH, COMMENT_LENGTH, FIELD_NAME, FIELD_COMMENT} from "../../constants/validation";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CustomForm = ({formProps}) => {
    const {name, setName, commentText, setCommentText, error, setError, send} = formProps

    /*
    * Отключаем" кнопку, пока не заполнено имя или комментарий. Это дополнительная проверка к основной.
    * В зависимости от требований заказчика ее можно отключить и оставить обработчик только в функции send
    * */

    const isDisabled = (name && name.length <= NAME_LENGTH) || (commentText && commentText <= COMMENT_LENGTH)

    return (
        <div>
            <div>
            <TextField
                id="outlined-basic"
                label={FIELD_NAME}
                variant="outlined"
                value={name}
                onChange={ e => setName(e.target.value)}
            />
            </div>


            <div>
            <TextareaAutosize
                minRows={3}
                maxRows={10}
                aria-label="empty textarea"
                placeholder={FIELD_COMMENT}
                onChange={ e => setCommentText(e.target.value)}
                value={commentText}
                style={{ width: 200 }}
            />
            </div>


            <Button
               // disabled={isDisabled}
                onClick={()=> send()}
                variant="contained">
                Отправить
            </Button>

        </div>
    );
};

CustomForm.propTypes = {
    isDisabled: PropTypes.bool,
}

export default CustomForm;
