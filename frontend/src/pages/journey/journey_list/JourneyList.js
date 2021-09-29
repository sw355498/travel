import React from 'react'
import JourneyItem from './JourneyItem'

function JourneyList(props) {
  const { products, tags, stars, handleClick, currentPage, perPage } = props
  const indexOfLastPost = currentPage * perPage //2
  const indexOfFirstPost = indexOfLastPost - perPage //0
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div className="container td-mt-75 filter-resultcontainer ">
      <h5 className="page-title text-center">篩選結果:{tags.toString()}</h5>
      {currentPosts
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
