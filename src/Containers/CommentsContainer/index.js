import React from 'react'
import PropTypes from 'prop-types'
import {Grid} from "@mui/material"
import Comments from "../../components/Comments"

/**
 * Контейнер
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const CommentsContainer = ({data}) => {
  return (
    <Grid item xs={6}>
      <Comments data={data}/>
    </Grid>
  )
}

CommentsContainer.propTypes = {
  data: PropTypes.object,
}

export default CommentsContainer
