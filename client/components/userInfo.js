import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserInfo = props => {
  return (
    <div>
      <p>User Information</p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(UserInfo)
