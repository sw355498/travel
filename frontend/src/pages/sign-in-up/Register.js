import React from 'react'
import InputTextField from './InputTextField'
import '../../style/sign-in-up.css'

function Register() {
  return (
    <div className="tab-content">
      <div id="tab-inner">
        {/* <!-- 註冊 --> */}
        <form className=" form-content">
          {/* 上方文字區 */}
          <div className="text-center td-mt-25">
            <p>使用社交平台帳戶註冊</p>
            <div class="sign-icon mx-auto">
              <a href="">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="">
                <i className="fab fa-line"></i>
              </a>
              <a href="">
                <i className="fab fa-google"></i>
              </a>
            </div>
            <div className="or">
              <span className="lines py-3"></span>
              <span>或</span>
              <span className="lines"></span>
            </div>
          </div>
          <InputTextField
            name="username"
            label="Email"
            //   state={fields.username}
            //   setState={handleFieldChange}
            //   error={fieldErrors.username}
            required
          />
          <InputTextField
            name="password"
            type="password"
            label="密碼"
            //   state={fields.password}
            //   setState={handleFieldChange}
            //   error={fieldErrors.password}
            //   minLength="5"
            //   maxLength="8"
            required
          />
          <button
            type="submit"
            className="mx-auto sign-up-btn  td-mb-25 td-mt-25"
          >
            註冊
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
