import React from 'react'
import PropTypes from 'prop-types'

const Title = ({text}) => {
  return (
    <h4>
      {text}
    </h4>
  )
}

Title.propTypes = {
  text: PropTypes.string,
}

export default Title
