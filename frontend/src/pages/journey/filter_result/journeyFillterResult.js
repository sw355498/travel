import React, { useState, useEffect, useCallback, useMemo } from 'react'
import FilterBar from '../filter_bar/FilterBar'
import JourneyList from '../journey_list/JourneyList'
import API from '../../../api'
import Pagination from './Pagination'

function JourneyFilterResult({ tribes, pageNum }) {
  const [displayProducts, setDisplayProducts] = useState(null)

  //分頁屬性
  const [totalPage, setTotalPage] = useState(14)
  const [currentPage, setCurrentPage] = useState(pageNum || 1)
  const [perPage, setPerpage] = useState(2)

  const fetchAndUpdateJourneys = useCallback(async () => {
    API.fetchJourneys().then(setDisplayProducts)
  }, [])
  useEffect(() => {
    fetchAndUpdateJourneys()
  }, [fetchAndUpdateJourneys])

  const [tags, setTags] = useState(tribes || ['靜浦部落'])
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

  const indexOfLastPost = currentPage * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const filteredPosts = useMemo(
    () =>
      displayProducts
        ?.filter((product) => tags.includes(product.tribe))
        ?.filter((product) => stars.includes(product.rating)),
    [displayProducts, tags, stars]
  )
  const slicedPosts = useMemo(
    () => filteredPosts?.slice(indexOfFirstPost, indexOfLastPost),
    [filteredPosts, indexOfFirstPost, indexOfLastPost]
  )

  return (
    <>
      {displayProducts ? (
        <>
          <FilterBar
            tagTypes={tagTypes}
            tags={tags}
            setTags={setTags}
            stars={stars}
            setStars={setStars}
            starsTypes={starsTypes}
            perPage={perPage}
            paginate={setCurrentPage}
            currentPage={currentPage}
            products={displayProducts}
            totalPosts={totalPage}
            setTotalPage={setTotalPage}
            setPerpage={setPerpage}
          />

          <div className="container td-mt-75 filter-resultcontainer ">
            <JourneyList
              tags={tags}
              products={slicedPosts}
              handleClick={fetchAndUpdateJourneys}
            />
          </div>
          <div className="container d-flex justify-content-center td-mt-25 td-mb-25 pagination-container">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item ">
                  <div
                    className="page-link page-sign"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&lt;</span>
                  </div>
                </li>
                <Pagination
                  perPage={perPage}
                  totalPosts={filteredPosts.length}
                  currentPage={currentPage}
                  tribes={tags}
                />
                <li className="page-item">
                  <div
                    className="page-link page-sign page-sign-next"
                    href="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&gt;</span>
                  </div>
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
