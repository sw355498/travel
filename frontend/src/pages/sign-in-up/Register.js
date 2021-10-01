import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'
import '../../style/sign-in-up.css'

const Register = () => {
  const [email, setEmail] = useState('test@gmail.com')
  const [name, setName] = useState('test')
  const [password, setPassword] = useState('123456')
  const [checkPassword, setCheckPassword] = useState('123456')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // 送出註冊資料到後端
    try {
      let response = await axios.post(`${API_URL}/auth/register`, {
        email,
        name,
        password,
        checkPassword,
      })
      console.log(response)
      alert('註冊成功！')
    } catch (e) {
      console.error(e.response)
      alert(e.response.data.message)
    }
  }
  return (
    <div className="tab-content">
      <div id="tab-inner">
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="text-center td-mt-25">
            <p>註冊</p>
            {/* <div className="sign-icon mx-auto">
              <a href="">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="">
                <i className="fab fa-google"></i>
              </a>
            </div>
            <div className="or">
              <span className="lines"></span>
              <span>或 </span>
              <span className="lines"></span>
            </div> */}
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder=""
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
            />
          </div>
          <div className="form-group">
            <label for="name">用戶名</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder=""
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              required
            />
          </div>
          <div className="form-group">
            <label for="password">密碼</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder=""
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
            />
          </div>
          <div className="form-group">
            <label for="checkPassword">在輸入一次密碼</label>
            <input
              type="password"
              className="form-control"
              id="checkPassword"
              name="checkpassword"
              placeholder=""
              value={checkPassword}
              onChange={(e) => {
                setCheckPassword(e.target.value)
              }}
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
  )
}

export default Register
