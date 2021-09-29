import React, { useState, useEffect, useCallback } from 'react'
import FilterBar from '../filter_bar/FilterBar'
import JourneyList from '../journey_list/JourneyList'
import API from '../../../api'
import Pagination from './Pagination'

function JourneyFilterResult({ tribes }) {
  const [displayProducts, setDisplayProducts] = useState(null)
  //分頁屬性
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerpage] = useState(2)

  const fetchAndUpdateJourneys = useCallback(async () => {
    API.fetchJourneys().then(setDisplayProducts)
  }, [])
  useEffect(() => {
    fetchAndUpdateJourneys()
  }, [fetchAndUpdateJourneys])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const [tags, setTags] = useState(tribes ? tribes : ['靜浦部落'])
  const [stars, setStars] = useState([5])
  const tagTypes = [
    '靜浦部落',
    '新社部落',
    '太巴塱部落',
    '水璉部落',
    '奇美部落',
    '馬太鞍部落',
    '撒固兒部落',
  ]

  // console.dir(displayProducts, { depth: null })
  const starsTypes = [5, 4, 3, 2, 1]

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  return (
    <>
      <FilterBar
        tagTypes={tagTypes}
        tags={tags}
        setTags={setTags}
        stars={stars}
        setStars={setStars}
        starsTypes={starsTypes}
      />
      {displayProducts ? (
        <>
          <div className="container td-mt-75 filter-resultcontainer ">
            <JourneyList
              tags={tags}
              stars={stars}
              products={displayProducts}
              handleClick={fetchAndUpdateJourneys}
              currentPage={currentPage}
              perPage={perPage}
              setPerpage={setPerpage}
            />
          </div>
          <div className="container d-flex justify-content-center td-mt-25 td-mb-25 pagination-container">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item ">
                  <a
                    className="page-link page-sign"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&lt;</span>
                  </a>
                </li>
                <Pagination
                  perPage={perPage}
                  totalPosts={displayProducts.length}
                  paginate={paginate}
                />
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
        </>
      ) : (
        <div>{spinner}</div>
      )}
    </>
  )
}

export default JourneyFilterResult
