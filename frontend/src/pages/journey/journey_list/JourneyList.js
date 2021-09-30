import React from 'react'
import JourneyItem from './JourneyItem'

function JourneyList(props) {
  const { products, tags, stars, handleClick } = props

  return (
    <div className="container td-mt-75 filter-resultcontainer ">
      <h5 className="page-title text-center">篩選結果:{tags.toString()}</h5>
      {products
        .filter((product) => tags.includes(product.tribe))
        .filter((product) => stars.includes(product.rating))
        .map((product, i) => {
          return (
            <JourneyItem
              key={i}
              product={product}
              selected={product.status}
              handleClick={handleClick}
            />
          )
        })}
    </div>
  )
}

export default JourneyList
