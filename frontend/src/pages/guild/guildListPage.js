import React from 'react'
import qs from 'qs'
import { useHistory } from 'react-router-dom'

const GuildListPage = ({
  perPage,
  totalPosts,
  tribes,
  setCurrentPage,
  currentPage,
  handlePrevClick,
  handleNextClick,
}) => {
  const history = useHistory()
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i)
  }
  const paginate = (number, e) => {
    setCurrentPage(number)
    e.preventDefault()
    const handleClick = (number, e) => {
      const query = qs.stringify({ tribes, pageNum: number })
      history.push(`/Guild?${query}`)
    }
    return handleClick(number)
  }
  //last onClick
  const prevPage = currentPage - 1
  const prevPageNum = prevPage >= 1 ? prevPage : '1'
  const prev = (prevPageNum, e) => {
    setCurrentPage(prevPageNum)
    e.preventDefault()
    const handleClick = (number, e) => {
      const query = qs.stringify({ tribes, pageNum: prevPageNum })
      history.push(`/Guild?${query}`)
    }
    return handleClick(currentPage)
  }
  // next onClick
  const nextPage = currentPage + 1
  const nextPageNum =
    nextPage <= Math.ceil(totalPosts / perPage) ? nextPage : currentPage

  const next = (nextPageNum, e) => {
    setCurrentPage(nextPageNum)
    e.preventDefault()
    const handleClick = (number, e) => {
      const query = qs.stringify({ tribes, pageNum: nextPageNum })
      history.push(`/Guild?${query}`)
    }
    return handleClick(currentPage)
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination mx-auto td-mb-25">
          {/* 前一頁 */}
          <li className="page-item">
            <div
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={(e) => prev(prevPageNum, e)}
            >
              <span aria-hidden="true">&lt; </span>
            </div>
          </li>

          {/* 數字 */}
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <div
                onClick={(e) => paginate(number, e)}
                style={{
                  backgroundColor: currentPage === number ? '#072b7b' : '',
                  color: currentPage === number ? 'white' : '',
                }}
                className="page-link"
              >
                {number}
              </div>
            </li>
          ))}

          {/* <li className="page-item">
          <a className="page-link align-middle" href="#">
            <span>1</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <span className="text-center">2</span>
          </a>
        </li> */}

          {/* 下一頁 */}
          <li className="page-item">
            <div
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={(e) => next(nextPageNum, e)}
            >
              <span className="text-center" aria-hidden="true">
                &gt;
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default GuildListPage
