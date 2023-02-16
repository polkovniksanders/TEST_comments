import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {TextareaAutosize, TextField} from "@mui/material";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CustomForm = ({formProps}) => {
    const {name, setName, commentText, setCommentText, error, setError, send} = formProps

    return (
        <div>
            <div>
                 <TextField
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                value={name}
                onChange={ e => setName(e.target.value)}
            />
            </div>


            <div>
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
             onChange={ e => setCommentText(e.target.value)}
                value={commentText}
                style={{ width: 200 }}
            />
            </div>

            <button
                 onClick={()=> send()}
            />
        </div>
    );
};

CustomForm.propTypes = {
    CustomForm: PropTypes.func,
}

export default CustomForm;
