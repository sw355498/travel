import React, { useState, useEffect, useCallback } from 'react'
import FilterBar from '../filter_bar/FilterBar'
import JourneyList from '../journey_list/JourneyList'

import API from '../../../api'

function JourneyFilterResult({ tribes }) {
  const [displayProducts, setDisplayProducts] = useState(null)

  const fetchAndUpdateJourneys = useCallback(async () => {
    API.fetchJourneys().then(setDisplayProducts)
  }, [])

  useEffect(() => {
    fetchAndUpdateJourneys()
  }, [fetchAndUpdateJourneys])

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
        <div className="container td-mt-75 filter-resultcontainer ">
          <JourneyList
            tags={tags}
            stars={stars}
            products={displayProducts}
            handleClick={fetchAndUpdateJourneys}
          />
        </div>
      ) : (
        <div>{spinner}</div>
      )}
    </>
  )
}

export default JourneyFilterResult
