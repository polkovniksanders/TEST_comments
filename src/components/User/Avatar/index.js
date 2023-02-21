import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Avatar} from "@mui/material"
import {stringAvatar} from "../../../utils/stringToColor"

/**
 * Функция обработки аватара пользователя
 * @param userName
 * @returns {JSX.Element}
 * @constructor
 */
const UserAvatar = ({userName}) => {
  const [ avatarShortName, setAvatarShortName ] = useState('')
  useEffect(() => {
    setShortAvatarName()
  },[ userName ])

  const setShortAvatarName = () => {
    const shortName = userName
    if (shortName.length === 0) {
      setAvatarShortName('A')
    } else setAvatarShortName(shortName.substring(0, 1))
  }

  return <Avatar {...stringAvatar(userName)}>{avatarShortName}</Avatar>
}

UserAvatar.propTypes = {
  userName: PropTypes.string,
}

export default UserAvatar
