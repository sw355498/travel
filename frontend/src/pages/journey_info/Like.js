import React from 'react'
import clsx from 'clsx'
import API from '../../api'
function Like(props) {
  const { findResult, selected, handleClick } = props

  const onClick = () => {
    API.toggleJourneyLike(findResult._id).then(handleClick)
  }
  return (
    <i
      className={clsx(
        'far fa-heart  journey-info-like order-2 order-md-1 mt-md-2 me-md-5',
        selected && 'fw-bold'
      )}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    ></i>
  )
}

export default Like
