import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'
import { Modal, Button, Form } from 'react-bootstrap'
import '../../style/sign-in-up.css'

const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const [validated, setValidated] = useState(false)
  const [invalid, setInvalid] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    setValidated(true)

    // 送出註冊資料到後端
    try {
      let response = await axios.post(`${API_URL}/register`, {
        email,
        name,
        password,
        checkPassword,
      })
      console.log(response)
      // alert('註冊成功！')
      handleShow()
    } catch (e) {
      console.error(e.response)
      alert(e.response.data.message)
    }
  }

  //modal
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

  //舊的code
  // return (
  //   <div className="container">
  //     <div className="tab-content col">
  //       <div id="tab-inner">
  //         <form className="form-content" onSubmit={handleSubmit}>
  //           <div className="text-center td-mt-25">
  //             <p>註冊</p>
  //           </div>

  //           <div className="form-group">
  //             <label for="email">Email</label>
  //             <input
  //               type="email"
  //               className="form-control"
  //               id="email"
  //               name="email"
  //               placeholder=""
  //               value={email}
  //               onChange={(e) => {
  //                 setEmail(e.target.value)
  //               }}
  //               required
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label for="name">用戶名</label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="name"
  //               name="name"
  //               placeholder=""
  //               value={name}
  //               onChange={(e) => {
  //                 setName(e.target.value)
  //               }}
  //               required
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label for="password">密碼</label>
  //             <input
  //               type="password"
  //               className="form-control"
  //               id="password"
  //               name="password"
  //               placeholder=""
  //               value={password}
  //               onChange={(e) => {
  //                 setPassword(e.target.value)
  //               }}
  //               required
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label for="checkPassword">在輸入一次密碼</label>
  //             <input
  //               type="password"
  //               className="form-control"
  //               id="checkPassword"
  //               name="checkpassword"
  //               placeholder=""
  //               value={checkPassword}
  //               onChange={(e) => {
  //                 setCheckPassword(e.target.value)
  //               }}
  //               required
  //             />
  //           </div>

  //           <button
  //             type="submit"
  //             className="mx-auto sign-up-btn  td-mb-25 td-mt-25"
  //           >
  //             註冊
  //           </button>
  //           <Link to="/Login" className="free">
  //             已經有帳號?去登入
  //           </Link>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <>
      <div className="container">
        <div className="tab-content col">
          <div id="tab-inner">
            <Form
              className="form-content"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div className="text-center td-mt-25">
                <p>註冊</p>
              </div>

              {/* email */}
              <Form.Group className="form-group">
                <Form.Label for="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="請輸入Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  請填寫
                </Form.Control.Feedback>
              </Form.Group>

              {/* 用戶名 */}
              <Form.Group className="form-group">
                <Form.Label for="name">用戶名</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="請輸入用戶名"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  請填寫
                </Form.Control.Feedback>
              </Form.Group>

              {/* 密碼 */}
              <Form.Group className="form-group">
                <Form.Label for="password">密碼</Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="請輸入6-12位密碼"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  請填寫
                </Form.Control.Feedback>
              </Form.Group>

              {/* 確認密碼 */}
              <Form.Group className="form-group">
                <Form.Label for="checkPassword">在輸入一次密碼</Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  id="checkPassword"
                  name="checkpassword"
                  placeholder="請在輸入密碼"
                  value={checkPassword}
                  onChange={(e) => {
                    setCheckPassword(e.target.value)
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  請填寫
                </Form.Control.Feedback>
              </Form.Group>

              <button
                type="submit"
                className="mx-auto sign-up-btn  td-mb-25 td-mt-25"
              >
                註冊
              </button>
              <Link to="/Login" className="free">
                已經有帳號?去登入
              </Link>
            </Form>
          </div>
        </div>
      </div>

      {messageModal}
    </>
  )
}

export default Register
