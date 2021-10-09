import React, { useState, useEffect } from 'react'
import { withRouter, useParams, useHistory } from 'react-router-dom'
import { API_URL } from '../../config'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Oder(props) {
  const { oderPage } = useParams() //取得網址上oderPage的值
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  /*分頁屬性*/
  //目前在第幾頁,預設第1頁;useParams取得的值為字串所以使用parseInt轉為數值
  const [page, setPage] = useState(parseInt(oderPage, 10) || 1)
  //總共有幾頁
  const [totalPage, setTotalPage] = useState(0)

  let history = useHistory()

  const getPages = () => {
    let pages = []
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          style={{
            display: 'inline-block',
            margin: '2px',
            backgroundColor: page === i ? '#00d1b2' : '',
            borderColor: page === i ? '#00d1b2' : '#dbdbdb',
            color: page === i ? '#fff' : '#363636',
            borderWidth: '1px',
            width: '28px',
            height: '28px',
            borderRadius: '3px',
            textAlign: 'center',
          }}
          key={i}
          onClick={(e) => {
            setPage(i)
          }}
        >
          {i}
        </li>
      )
    }
    return pages
  }
  useEffect(() => {
    const getOrderData = async () => {
      try {
        let res = await axios.get(`${API_URL}/order_form?page=${page}`, {
          withCredentials: true,
        })

        let data = res.data.result
        setData(data)
        setTotalPage(res.data.pagination.totalPages)
        setError(null)
        history.push(`/order_form/${page}`) //變更網址
      } catch (e) {
        console.log(e)
        setError(e.message)
      }
    }
    getOrderData()
  }, [page])

  //未登入顯示彈跳視窗
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)

  if (!props.member) {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body className="text-center text-title-size24 td-mt-50 td-mb-25">
            請先登入會員
          </Modal.Body>
          <Modal.Footer>
            <Link
              to="/Login"
              className="btn journey-reservation-button mx-auto"
            >
              前往登入會員
            </Link>
          </Modal.Footer>
        </Modal>
        )
      </>
    )
  }

  return (
    <>
      <div>
        {error && <div>{error}</div>}

        {data &&
          data.map((Oder) => (
            <div key={Oder.data}>
              <h2>清單代碼:{Oder.id}</h2>
              <h2>會員:{Oder.member_id}</h2>
              <h2>導遊:{Oder.guide_id}</h2>
              <h2>行程:{Oder.journey_id}</h2>
              <h2>購單聯絡人-姓氏:{Oder.sur_name}</h2>
              <h2>購單聯絡人-名字:{Oder.first_name}</h2>
              <h2>購單聯絡人-連絡電話:{Oder.phone}</h2>
              <h2>購單聯絡人-地址:{Oder.nation}</h2>
              <h2>購單聯絡人-國家:{Oder.address}</h2>
              <h2>購單聯絡人-信箱:{Oder.email}</h2>
              <h2>人數:{Oder.total_amount}</h2>
              <h2>消費金額:{Oder.total_price}</h2>
              <h2>信用卡卡號:{Oder.card_number}</h2>
              <h2>發票處理方式:{Oder.bill_status}</h2>
              <h2>訂單狀況:{Oder.order_status}</h2>
              <h2>結帳日期:{Oder.order_time}</h2>
            </div>
          ))}
      </div>
      <ul>{getPages()}</ul>
    </>
  )
}

export default withRouter(Oder)
