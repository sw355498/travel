import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../../context/auth'
import { Redirect } from 'react-router-dom'
import Feedback from 'react-bootstrap/esm/Feedback'

import '../../style/sign-in-up.css'

const Login = () => {
  const { member, setMember } = useAuth()
  const [email, setEmail] = useState('test@gmail.com')
  const [password, setPassword] = useState('12345')
  const [feedback, setFeedBack] = useState(null)
  const showFeedBack = () => {
    return feedback != null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let result = await axios.post(
        `${API_URL}/auth/login`,
        // 設定可以跨源存取 cookie
        { email, password },
        { withCredentials: true }
      )
      console.log(result)
      setMember(result.data)
      setFeedBack(`welcome ${email}`)
    } catch (e) {
      console.error(e.response)
      setFeedBack(e.response.data.message)
    }
  }

  if (member !== null) {
    return <Redirect to="/" />
  }

  return (
    <div className="tab-content">
      <Alert
        variant="danger"
        isOpen={showFeedBack}
        fade={false}
        aria-label="feedback"
        // onClose={() => setShow(false)}
      >
        {feedback}
      </Alert>

      <div id="tab-inner">
        <div className="text-center td-mt-25">
          <p>登入</p>
        </div>

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
