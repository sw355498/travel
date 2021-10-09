import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'
import GuildInput from './GuildInput'
import { Modal, Button, Alert } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'

import '../../style/sign-in-up.css'

const Register = (props) => {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [feedback, setFeedBack] = useState(null)
  // const showFeedBack = () => {
  //   return feedback != null
  // }

  // 彈跳
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const messageModal = (
    <Modal show={show} backdrop="static" backdrop="static" keyboard={false}>
      <Button
        clasName="position-absolute mr-0"
        variant="secondary"
        onClick={() => {
          props.history.push('/')
        }}
      >
        x
      </Button>
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
        註冊成功!
      </Modal.Body>
      <Modal.Footer>
        {/* <Button
          className="btn journey-reservation-button mx-auto"
          variant="secondary"
          onClick={() => {
            props.history.push('/')
          }}
        >
          去首頁
        </Button> */}
        <Button
          className="btn journey-reservation-button mx-auto"
          variant="secondary"
          onClick={() => {
            props.history.push('/login')
          }}
        >
          登入享更多會員功能
        </Button>
      </Modal.Footer>
    </Modal>
  )

  // spinner用的狀態
  const [isLoading, setIsLoading] = useState(false)

  // 自動1秒後關閉指示的spinner
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [isLoading])

  // 狀態為物件，處理多個欄位
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // 每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // 處理每個欄位的變動，只能用於文字類的欄位
  const handleFieldChange = (e) => {
    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }
    setFields(updatedFields)
  }

  // 整個表單有任何變動(ex.某個欄位有輸入)
  // 使用者正在改有錯誤的欄位，清除某個欄位的錯誤訊息
  const handleFormChange = (e) => {
    console.log('更新欄位: ', e.target.name)

    // 該欄位的錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }
    setFieldErrors(updatedFieldErrors)
  }

  // 表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息預設呈現方式(跳出的訊息泡泡)
    e.preventDefault()
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }
    setFieldErrors(updatedFieldErrors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formdata = new FormData(e.target)

    // 觀查formdata中的填入資料
    console.log('formdata中的填入資料')
    for (let pair of formdata.entries()) {
      console.log(pair)
    }

    // 送出註冊資料到後端
    try {
      let response = await axios.post(`${API_URL}/register`, fields)
      console.log('00', response)
      handleShow()
    } catch (e) {
      setFeedBack(e.response.data.message)
      console.log(e.response.data)
    }
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="tab-content">
        <div id="tab-inner">
          <form
            className="form-content"
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            onInvalid={handleFormInvalid}
          >
            <div className="text-center td-mt-25">
              <p>註冊</p>
            </div>
            <Alert
              variant="danger"
              // isOpen={showFeedBack}
              // fade={false}
              // aria-label="feedback"
              onClose={() => setShow(false)}
            >
              {feedback}
            </Alert>

            <div className="form-group">
              {/* <label for="email">Email</label> */}
              <GuildInput
                label="Email"
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder=""
                value={email}
                state={fields.email}
                setState={handleFieldChange}
                error={fieldErrors.email}
                required
              />
            </div>
            <div className="form-group">
              <GuildInput
                label="用戶名"
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder=""
                state={fields.name}
                setState={handleFieldChange}
                error={fieldErrors.name}
                required
              />
            </div>
            <div className="form-group">
              {/* <label for="password">密碼</label> */}
              <GuildInput
                label="輸入密碼"
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder=""
                value={password}
                state={fields.password}
                setState={handleFieldChange}
                error={fieldErrors.password}
                minLength="6"
                maxLength="12"
                required
              />
            </div>
            <div className="form-group">
              {/* <label for="confirmPassword">在輸入一次密碼</label> */}
              <GuildInput
                label="在輸入一次密碼"
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder=""
                value={confirmPassword}
                state={fields.confirmPassword}
                setState={handleFieldChange}
                error={fieldErrors.confirmPassword}
                minLength="6"
                maxLength="12"
                required
              />
            </div>
            <button
              type="submit"
              className="mx-auto sign-up-btn  td-mb-25 td-mt-25"
            >
              註冊
            </button>
            <Link to="/Login" className="free">
              已經有帳號?去登入
            </Link>
          </form>
        </div>
      </div>
    </>
  )
  return (
    <>
      {isLoading ? loading : display}
      {messageModal}
    </>
  )
}

export default Register