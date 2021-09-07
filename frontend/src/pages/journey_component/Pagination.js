import React from 'react'

function Pagination() {
  return (
    <div className="container d-flex justify-content-center td-mt-25 td-mb-25 pagination-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item ">
            <a className="page-link page-sign" href="#" aria-label="Previous">
              <span aria-hidden="true">&lt;</span>
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link  " href="#">
              1
            </a>
          </li>
          <li className="page-item ">
            <a className="page-link  " href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link page-sign page-sign-next"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&gt;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
