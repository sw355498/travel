import React, { useState } from 'react'

function PayMember(props) {
  //勾選更新方塊
  const [renew, setRenew] = useState(true)
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
              <form class="td-mt-50" action="POST">
                <div class="row">
                  {/* <姓名區塊 */}
                  <div class="col-12 col-lg-6">
                    <label for="formGroupExampleInput" class="form-label">
                      <span class="text-title-size20">名字</span>
                      <span class="text-danger td-ms-15 text-title-size20">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      value={props.surName}
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="請輸入您的名子"
                      onChange={(e) => {
                        props.setSurName(e.target.value)
                      }}
                    />
                  </div>

                  {/* 姓氏區塊 */}
                  <div class="col-12 td-mt-50 col-lg-6 mt-lg-0">
                    <label for="formGroupExampleInput2" class="form-label">
                      <span class="text-title-size20">姓氏</span>
                      <span class="text-danger td-ms-15 text-title-size20">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      value={props.name}
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="請輸入您的姓氏"
                      onChange={(e) => {
                        props.setName(e.target.value)
                      }}
                    />
                  </div>

                  {/* 連絡電話區塊 */}
                  <div class="col-12 col-lg-6 td-mt-50">
                    <label for="formGroupExampleInput2" class="form-label">
                      <span class="text-title-size20">連絡電話</span>
                      <span class="text-danger td-ms-15 text-title-size20">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      value={props.phone}
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="請輸入您的連絡電話"
                      onChange={(e) => {
                        props.setPhone(e.target.value)
                      }}
                    />
                  </div>
                  {/* 選格國家區塊 */}
                  <div class="col-12 col-lg-6 td-mt-50">
                    <label for="validationDefault04" class="form-label">
                      <span class="text-title-size20">國家/地區</span>
                      <span class="text-danger td-ms-15 text-title-size20">
                        *
                      </span>
                    </label>

                    <select
                      value={props.nation}
                      class="form-select"
                      id="validationDefault04"
                      required
                      onChange={(e) => {
                        props.setNation(e.target.value)
                      }}
                    >
                      <option selected disabled value="">
                        請選擇國家
                      </option>
                      <option>台灣</option>
                      <option>日本</option>
                      <option>韓國</option>
                      <option>其它</option>
                    </select>
                  </div>

                  {/* 聯絡地址 */}
                  <div class="col-12 td-mt-50">
                    <label for="formGroupExampleInput2" class="form-label">
                      <span class="text-title-size20">地址</span>
                      <span class="text-danger td-ms-15 text-title-size20">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      value={props.address}
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="請輸入您的聯絡地址"
                      onChange={(e) => {
                        props.setAddress(e.target.value)
                      }}
                    />
                  </div>

                  {/* 聯絡信箱 */}
                  <div class="col-12 td-mt-50">
                    <label for="formGroupExampleInput2" class="form-label">
                      <span class="text-title-size20">信箱</span>
                      <span class="text-danger td-ms-15 text-title-size20">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      value={props.email}
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="請輸入您的E-mail"
                      onChange={(e) => {
                        props.setEmail(e.target.value)
                      }}
                    />
                  </div>

                  {/* checkbox */}
                  {/* <div class="td-mt-75">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        checked={renew}
                        class="form-check-input checkbox-size"
                        id="flexCheckChecked"
                        onChange={(e) => {
                          setRenew(e.target.checked)
                        }}
                      />
                      <label
                        class="form-check-label text-title-size20 td-ms-15 mt-1"
                        for="flexCheckChecked"
                      >
                        同時更新會員資料
                      </label>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayMember
