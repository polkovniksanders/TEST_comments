import React from 'react'
import PropTypes from 'prop-types'

/**
 * Функция отображения имени пользователя на странице комментариев
 * @param userName принимает строку
 * @returns {JSX.Element}
 * @constructor
 */
const Name = ({userName}) => {
  return (
    <div>
      {userName}
    </div>
  )
}

Name.propTypes = {
  userName: PropTypes.string,
}

export default Name
