import React from 'react'
import PropTypes from 'prop-types'
import CustomForm from "../../components/CustomForm"
import {Grid} from "@mui/material"
import Title from "../../components/Title"

const PostContainer = (props) => {

  const styledContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <Grid item xs={6} style={styledContainer}>
      <Title text={'Опубликуйте свой комментарий!'}/>
      <CustomForm formProps={props.formProps}/>
    </Grid>
  )
}

PostContainer.propTypes = {
  PostContainer: PropTypes.func,
}

export default PostContainer
