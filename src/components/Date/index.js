import React from 'react'
import PropTypes from 'prop-types'
import humanizeDuration from 'humanize-duration'

/**
 * Функция отображения даты комментария
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CommentDate = (props) => {
  return (
    <div>
      Опубликован: {humanizeDuration(props.createdDate, { language: "ru" })}
    </div>
  )
}

CommentDate.propTypes = {
  CommentDate: PropTypes.func,
}

export default CommentDate
