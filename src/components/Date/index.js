import React from 'react'
import PropTypes from 'prop-types'
import humanizeDuration from 'humanize-duration'
import {Chip} from "@mui/material"

/**
 * Функция отображения даты комментария
 * @param className
 * @param createdDate
 * @returns {JSX.Element}
 * @constructor
 */
const CommentDate = ({className,createdDate}) => {
  return (
    <div className={className}>
      <Chip
        variant="outlined"
        label={`Опубликован: ${humanizeDuration(createdDate, { 
          language: "ru" ,
          largest: 2,
          delimiter: " и ",
          maxDecimalPoints: 6,
          round: true,
        })} назад`}
      />
    </div>
  )
}

CommentDate.propTypes = {
  className: PropTypes.string,
  createdDate: PropTypes.number,
}

export default CommentDate
