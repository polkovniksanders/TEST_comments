import React from 'react'
import PropTypes from 'prop-types'

/**
 * Функция отображения имени пользователя на странице комментариев
 * @param userName принимает строку
 * @returns {JSX.Element}
 * @constructor
 */
const UserName = ({userName, className}) => {
  return (
    <div className={className}>
      <h4 >
        {userName}
      </h4>
    </div>
  )
}

UserName.propTypes = {
  userName: PropTypes.string,
}

export default UserName
