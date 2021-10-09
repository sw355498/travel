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
        // <li
        //   style={{
        //     display: 'inline-block',
        //     margin: '2px',
        //     backgroundColor: page === i ? '#00d1b2' : '',
        //     borderColor: page === i ? '#00d1b2' : '#dbdbdb',
        //     color: page === i ? '#fff' : '#363636',
        //     borderWidth: '1px',
        //     width: '28px',
        //     height: '28px',
        //     borderRadius: '3px',
        //     textAlign: 'center',
        //   }}
        // key={i}
        // onClick={(e) => {
        //   setPage(i)
        // }}
        // >
        //   {i}
        // </li>
        <li class={`page-item ${page === i ? 'active' : ''} `}>
          <button
            class="page-link"
            key={i}
            onClick={(e) => {
              setPage(i)
            }}
          >
            {i}
          </button>
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
      <div className="container td-mt-75 td-mb-25">
        {error && <div>{error}</div>}

        <table class="table table-hover">
          <thead>
            <tr class="table-dark text-nowrap text-center">
              <th>訂單編號</th>
              <th>消費金額</th>
              <th>付款卡號</th>
              <th>發票處理方式</th>
              <th>訂單狀況</th>
              <th>結帳日期</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((Oder) => (
                <tr className="text-center table-secondary">
                  <td>{Oder.order_number}</td>
                  <td>${Oder.total_cost}</td>
                  <td>{Oder.card_number}</td>
                  <td>{Oder.bill_status}</td>
                  <td>{Oder.order_status}</td>
                  <td>{Oder.order_time}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ul class="pagination td-my-25 mx-auto">{getPages()}</ul>
    </>
  )
}

export default withRouter(Oder)
