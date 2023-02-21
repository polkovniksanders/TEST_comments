import React from 'react'
import PropTypes from 'prop-types'
import {Grid} from "@mui/material"
import Comments from "../../components/Comments"

/**
 * Контейнер
 * @param data
 * @param setData
 * @returns {JSX.Element}
 * @constructor
 */
const CommentsContainer = ({data, setData}) => {
  return (
    <Grid item xs={6}>
      <Comments data={data} setData={setData}/>
    </Grid>
  )
}

CommentsContainer.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
}

export default CommentsContainer
