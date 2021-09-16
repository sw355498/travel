import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/sign-in-up.css'

function Login() {
  return (
    <div className="tab-content">
      <div id="tab-inner">
        <div className="text-center td-mt-25">
          <p>使用社交平台帳戶登入</p>
        </div>
        <form className="form-content" id="tab1">
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label for="password">密碼</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder=""
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
