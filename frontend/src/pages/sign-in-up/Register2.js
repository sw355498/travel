import React from 'react'
import { useState } from 'react'
import InputTextField from './InputTextField'

// CSS引入
import '../../style/sign-in-up.css'

function Register(props) {
  const [fields, setFields] = useState({
    useremail: 'yaya14chen@gmail.com',
    username: 'yaya',
    password: '12345',
  })
  // 每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    useremail: '',
    username: '',
    password: '',
  })

  // 處理每個欄位的變動
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
  // 認為使用者正在改有錯誤的欄位
  // 清除某個欄位的錯誤訊息
  const handleFormChange = (e) => {
    console.log('更新欄位: ', e.target.name)

    // 該欄位的錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(updatedFieldErrors)
  }

  //----------------------------------------------------------------------

  return (
    <div className="tab-content">
      <div id="tab-inner">
        {/* <!-- 註冊 --> */}
        <form className=" form-content" onChange={handleFormChange}>
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
              <span className="lines"></span>
              <span>或</span>
              <span className="lines"></span>
            </div>
          </div>
          <InputTextField
            name="useremail"
            label="Email"
            state={fields.useremail}
            setState={handleFieldChange}
            error={fieldErrors.useremail}
            // required
          />
          <InputTextField
            name="username"
            label="用戶名"
            state={fields.username}
            setState={handleFieldChange}
            //   error={fieldErrors.username}
            // required
          />

          <InputTextField
            name="password"
            type="password"
            label="密碼"
            state={fields.password}
            setState={handleFieldChange}
            //   error={fieldErrors.password}
            //   minLength="5"
            //   maxLength="8"
            // required
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
