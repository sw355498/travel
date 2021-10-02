import React from 'react'

const Pagination = ({
  perPage,
  totalPosts,
  paginate,
  currentPage,
  products,
  tags,
  stars,
}) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <>
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <div onClick={() => paginate(number)} className="page-link">
            {number}
          </div>
        </li>
      ))}
    </>
  )
}
export default Pagination
