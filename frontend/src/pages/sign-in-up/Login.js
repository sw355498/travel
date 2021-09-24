import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'

import '../../style/sign-in-up.css'

const Login = () => {
  const [email, setEmail] = useState('test@gmail.com')
  const [password, setPassword] = useState('12345')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = await axios.post(`${API_URL}/auth/login`, { email, password })
    console.log(result)
  }

  return (
    <div className="tab-content">
      <div id="tab-inner">
        {/* <div className="text-center td-mt-25">
          <p>使用社交平台帳戶登入</p>
        </div> */}
        <form className="form-content" id="tab1" onSubmit={handleSubmit}>
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
  )
}
export default Login
