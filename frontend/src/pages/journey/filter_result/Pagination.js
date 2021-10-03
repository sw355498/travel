import React from 'react'
import qs from 'qs'
import { useHistory } from 'react-router-dom'
import { number } from 'prop-types'

const Pagination = ({
  perPage,
  totalPosts,
  tribes,
  setCurrentPage,
  currentPage,
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
      history.push(`/journey?${query}`)
    }
    return handleClick(number)
  }
  console.log(currentPage)

  return (
    <>
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
    </>
  )
}
export default Pagination
