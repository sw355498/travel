function PayConnection() {
  return (
    <>
      <div class="accordion td-mt-75" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button menu-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <p class="menu-title text-title-size24 my-auto">旅客資料</p>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body menu-bg">
              <form class="td-mt-50" action="">
                <div class="row">
                  {/* 姓名區塊 */}
                  <div class="col-12 col-lg-6">
                    <label for="formGroupExampleInput" class="form-label">
                      <span class="text-title-size20">名字</span>
                      <span class="text-danger td-ms-15 text-title-size20">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="請輸入您的名子"
                    />
                  </div>

                  {/* 姓氏區塊  */}
                  <div class="col-12 td-mt-50 col-lg-6 mt-lg-0">
                    <label for="formGroupExampleInput2" class="form-label">
                      <span class="text-title-size20">姓氏</span>
                      <span class="text-danger td-ms-15 text-title-size20">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="請輸入您的姓氏"
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
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="請輸入您的連絡電話"
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
                      class="form-select"
                      id="validationDefault04"
                      required
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
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="請輸入您的聯絡地址"
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
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="請輸入您的E-mail"
                    />
                  </div>

                  {/* 同訂購人資訊 */}
                  <div class="td-mt-75">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        class="form-check-label text-title-size20 td-ms-15"
                        for="flexCheckChecked"
                      >
                        同訂購人資訊
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayConnection
