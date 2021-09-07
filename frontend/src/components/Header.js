// css引入
import '../style/header.css'
import '../style//spacing.css'

// 圖片引入
import logo from '../img/logo.png'
import hualsland from '../../src/img/花島（黑）.png'
import cart from '../img/cart.png'
import avatar from '../img/avatar.png'

function Header() {
  return (
    <>
      <header className="td-header">
        <div className="container td-header-main d-flex align-items-center  position-relative">
          {/* LOGO區 */}
          <a className="td-logo d-flex" href="/">
            <img className="td-logo-img" src={logo} alt="logo" />
            <img className="td-logo-text" src={hualsland} alt="花島（黑）" />
          </a>
          {/* 導覽列左側 */}
          <nav className="td-nav align-items-center d-flex justify-">
            <ul className="left-nav d-flex my-auto">
              <a href="/">
                <span>部落行程</span>
              </a>
              <a href="/">
                <span>在地導遊</span>
              </a>
            </ul>
            {/* 導覽列登入前右側 */}
            {/* <div className="td-nav-before d-flex align-items-center">
          <a className="btn td-btn-medium-o td-header-login text-center">登入</a>
          <a className="btn td-btn-medium-b td-header-register text-center">註冊</a>
        </div> */}

            {/* 導覽列登入後右側 */}
            <div className="td-right-nav">
              <a href="通知">
                <i className="fas fa-comment-dots"></i>
              </a>
              <a
                className="td-cart"
                href="../pages/shoppingcart/ShoppingcartCartList"
              >
                <img src={cart} alt="cart" />
              </a>
              <a
                className="td-member"
                href="/page/member/member-information.html"
              >
                <img className="td-member-avatar" src={avatar} alt="avatar" />
              </a>
            </div>

            {/* 漢堡 */}
            <div className="td-burger">
              <input type="checkbox" id="td-burger-toggle" />
              <label
                for="td-burger-toggle"
                className="td-burger-btn d-flex flex-column"
              >
                <span></span>
                <span></span>
                <span></span>
              </label>
              {/* 漢堡選單 */}
              <ul className="td-burger-list d-flex flex-column position-absolute text-center justify-content-around">
                <a href="/">
                  <i className="fas fa-home"></i>回到首頁
                </a>
                <a href="/">
                  <i className="fas fa-shoe-prints"></i>花島行程
                </a>
                <a href="/">
                  <i className="fas fa-street-view"></i>在地導遊
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
