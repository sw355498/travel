import React from 'react'

function GuildListPage() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination mx-auto td-mb-25">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&lt; </span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link align-middle" href="#">
            <span>1</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <span className="text-center">2</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span className="text-center" aria-hidden="true">
              &gt;
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default GuildListPage
