import React from 'react'
import qs from 'qs'
import { useHistory } from 'react-router-dom'

const Pagination = ({ perPage, totalPosts, tribes }) => {
  const history = useHistory()

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i)
  }

  const handleClick = (number) => {
    const query = qs.stringify({ tribes, pageNum: number })
    history.push(`/journey?${query}`)
  }

  return (
    <>
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <div onClick={() => handleClick(number)} className="page-link">
            {number}
          </div>
        </li>
      ))}
    </>
  )
}
export default Pagination
