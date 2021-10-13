import React, { useState } from 'react'
import clsx from 'clsx'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
const serverURI = 'http://localhost:3001'

function Like(props) {
  //原本的code
  // const onClick = () => {
  //   API.toggleJourneyLike(findResult._id).then(handleClick)
  // }

  const { findResult, selected, handleClick } = props

  //登入後才能收藏功能
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Title className="d-flex justify-content-center td-mt-25 td-mb-15 text-title-size40">
        <img className="td-logo-img" src="/images/logo.png" alt="logo" />
        <img
          className="td-logo-text"
          src="/images/花島（黑）.png"
          alt="花島（黑）"
        />
        {/* 歡迎來到花島! */}
      </Modal.Title>
      <Modal.Body className="text-center text-title-size38 td-mb-15">
        請先登入會員!
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn journey-reservation-button mx-auto"
          variant="secondary"
          onClick={handleClose}
        >
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  )

  //改寫
  const Like = async (id, e) => {
    try {
      await axios.put(
        `${serverURI}/api/journeys/${id}/like`,
        {},
        {
          withCredentials: true,
        }
      )
    } catch (e) {
      console.error(e.response.data.message)
      handleShow()
    }
  }
  const onClick = () => {
    Like(findResult._id).then(handleClick)
  }

  return (
    <>
      <i
        className={clsx(
          'far fa-heart  journey-info-like order-2 order-md-1 mt-md-2 me-md-5',
          selected && 'fw-bold'
        )}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      ></i>
      {messageModal}
    </>
  )
}

export default Like
