import '../style/footer.css'

function Footer() {
  return (
    <>
      {/* 頁尾 */}
      <footer className="text-content-footer text-white">
        <div className="td-footer text-decoration-none">
          <div className="td-footer-text mx-auto px-auto justify-content-between">
            <a href="#/">關於花島</a>
            <a href="#/">使用者條款</a>
            <a href="#/">隱私權保護政策</a>
            <a href="#/">常見問題與幫助</a>
          </div>
          <div className="td-footer-contact d-flex justify-content-center mx-auto">
            <p className="td-footer-contact-text my-auto">聯絡我們</p>
            <div>
              <a href="#/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#/">
                <i className="fab fa-line px-0"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="td-footer-line"></div>
        <div className="td-footer-notion d-flex text-center">
          <p className="td-footer-notion-txt mx-auto">
            此為資訊會前端班MFEE17專題使用，如有疑慮請與我們聯絡，E-MAIL:jeny@iii.org.tw，COPYRIGHT
            © 2021 All rights reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
