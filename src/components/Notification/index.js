import React from 'react'
import PropTypes from 'prop-types'
import {Alert, Snackbar} from "@mui/material"

const Notification = (props) => {
  console.log(props)
  const setNotification = () => {
    switch (props.notificationType) {
      case 'success': return 'success'
      case 'warning': return 'warning'
      case 'info': return 'info'
      case 'error': return 'error'
    }
  }

  return (
    <div>
      {props.openNotification ?
        <Snackbar
          open={props.openNotification}
          onClose={()=> props.setOpenNotification(false)}
          autoHideDuration={3000} >
          <Alert  severity="success" sx={{ width: '100%' }}>
            This is a success message!11
          </Alert>
        </Snackbar> : null
      }

    </div>
  )
}

Notification.propTypes = {
  Notification: PropTypes.func,
}

export default Notification