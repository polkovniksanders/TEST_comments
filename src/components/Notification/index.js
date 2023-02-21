import React from 'react'
import PropTypes from 'prop-types'
import {Alert, Snackbar} from "@mui/material"

/**
 * Функция отображения уведомлений
 * @param notificationText {string}
 * @param notificationType {string}
 * @param openNotification {boolean}
 * @param setNotificationText {function}
 * @param setNotificationType {function}
 * @param setOpenNotification {function}
 * @returns {JSX.Element}
 * @constructor
 */
const Notification = ({
  notificationText,
  notificationType,
  openNotification,
  setNotificationText,
  setNotificationType,
  setOpenNotification}
) => {

  const setNotification = () => {
    switch (notificationType) {
      case 'success': return 'success'
      case 'warning': return 'warning'
      case 'error': return 'error'
      default: return 'info'
    }
  }

  return (
    <div>
      {openNotification ?
        <Snackbar
          open={openNotification}
          onClose={()=> setOpenNotification(false)}
          autoHideDuration={3000}>
          <Alert severity={setNotification()} sx={{ width: '100%' }}>
            {notificationText}
          </Alert>
        </Snackbar> : null
      }

    </div>
  )
}

Notification.propTypes = {
  notificationText : PropTypes.string,
  notificationType: PropTypes.string,
  openNotification: PropTypes.bool,
  setNotificationText: PropTypes.func,
  setNotificationType: PropTypes.func,
  setOpenNotification: PropTypes.func,

}

export default Notification
