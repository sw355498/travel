import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'
import { Alert, Modal, Button } from 'react-bootstrap'
import { useAuth } from '../../context/auth'
import { Redirect } from 'react-router-dom'
import Feedback from 'react-bootstrap/esm/Feedback'

import '../../style/sign-in-up.css'
import { left } from '@popperjs/core'

const Login = (props) => {
  const { member, setMember } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [feedback, setFeedBack] = useState(null)
  const showFeedBack = () => {
    return feedback != null
  }

  // 彈跳
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
        歡迎來到花島!
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn journey-reservation-button mx-auto"
          variant="secondary"
          onClick={() => {
            props.history.push('/')
          }}
        >
          去首頁
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let result = await axios.post(
        `${API_URL}/login`,
        // 設定可以跨源存取 cookie
        { email, password },
        { withCredentials: true }
      )
      console.log(result)
      setMember(result.data)
      handleShow()

      // setFeedBack(`welcome ${email}`)
    } catch (e) {
      console.error(e.response)
      setFeedBack(e.response.data.message)
    }
  }

  // if (member !== null) {
  //   return <Redirect to="/" />
  // }

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      showFeedBack(null)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, [])

  const display = (
    <div className="container ">
      <div className="tab-content col position-relative">
        <Alert
          className={feedback ? '' : 'visually-hidden'}
          col-10
          variant="danger"
          isOpen={showFeedBack}
          fade={false}
          aria-label="feedback"
          // onClose={() => setShow(false)}
        >
          {/* {feedback} */}

          {feedback}
        </Alert>

        <div id="tab-inner">
          <div className="text-center td-mt-25">
            <p>登入</p>
          </div>

          <form className="form-content col" id="tab1" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                // required
              />
            </div>

            {/* 密碼 */}
            <div className="form-group">
              <label for="password">密碼</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                required
              />
            </div>
            <button type="submit" className="mx-auto sign-in-btn  td-mb-25 ">
              登入
            </button>
            <Link to="/Register" href="" className="free">
              免費註冊
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
  return (
    <>
      {display}
      {messageModal}
    </>
  )
}
export default Login
