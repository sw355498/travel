import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import InputTextField from './InputTextField'
import SelectField from './SelectNation'
function PayMember(props) {
  // spinner用的狀態
  const [isLoading, setIsLoading] = useState(false)

  // 自動1秒後關閉指示的spinner
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [isLoading])

  // 處理每個欄位的變動，只能用於文字類的欄位
  const handleFieldChange = (e) => {
    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...props.fields,
      [e.target.name]: e.target.value,
    }

    props.setFields(updatedFields)
  }

  // 整個表單有任何變動(ex.某個欄位有輸入)
  // 使用者正在改有錯誤的欄位，清除某個欄位的錯誤訊息
  const handleFormChange = (e) => {
    console.log('更新欄位: ', e.target.name)

    // 該欄位的錯誤訊息清空
    const updatedFieldErrors = {
      ...props.fieldErrors,
      [e.target.name]: '',
    }

    props.setFieldErrors(updatedFieldErrors)
  }

  // 表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息預設呈現方式(跳出的訊息泡泡)
    e.preventDefault()

    const updatedFieldErrors = {
      ...props.fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    props.setFieldErrors(updatedFieldErrors)
  }
  return (
    <>
      <div class="accordion td-mt-75" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button menu-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p class="menu-title text-title-size24 my-auto">訂購人資訊</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body menu-bg">
              <form
                onChange={handleFormChange}
                onInvalid={handleFormInvalid}
                action="POST"
              >
                <div class="row">
                  {/* <姓名區塊 */}
                  <div class="col-12 col-lg-6">
                    <InputTextField
                      name="name"
                      label="姓名"
                      state={props.fields.name}
                      setState={handleFieldChange}
                      error={props.fieldErrors.name}
                      required
                    />
                  </div>

                  {/* 姓氏區塊 */}
                  <div class="col-12 col-lg-6">
                    <InputTextField
                      name="surName"
                      label="姓氏"
                      state={props.fields.surName}
                      setState={handleFieldChange}
                      error={props.fieldErrors.surName}
                      required
                    />
                  </div>

                  {/* 連絡電話區塊 */}
                  <div class="col-12 col-lg-6">
                    <InputTextField
                      name="phone"
                      type="tel"
                      label="連絡電話"
                      state={props.fields.phone}
                      setState={handleFieldChange}
                      error={props.fieldErrors.phone}
                      minLength="10"
                      maxLength="10"
                      required
                    />
                  </div>
                  {/* 選擇國家區塊 */}
                  <div class="col-12 col-lg-6">
                    <SelectField
                      name="nation"
                      label="國家/地區"
                      state={props.fields.nation}
                      setState={handleFieldChange}
                      error={props.fieldErrors.nation}
                      required
                    >
                      <option selected disabled value="">
                        請選擇國家
                      </option>
                      <option>台灣</option>
                      <option>日本</option>
                      <option>韓國</option>
                      <option>其它</option>
                    </SelectField>
                  </div>

                  {/* 聯絡地址 */}
                  <div class="col-12">
                    <InputTextField
                      name="address"
                      label="聯絡地址"
                      state={props.fields.address}
                      setState={handleFieldChange}
                      error={props.fieldErrors.address}
                      required
                    />
                  </div>

                  {/* 聯絡信箱 */}
                  <div class="col-12 td-mt-50">
                    <InputTextField
                      name="email"
                      type="email"
                      label="電子郵件"
                      state={props.fields.email}
                      setState={handleFieldChange}
                      error={props.fieldErrors.email}
                      required
                    />
                  </div>
                </div>
                <div class="td-mt-50 d-flex justify-content-center justify-content-lg-end">
                  <button className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3">
                    確認
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(PayMember)
