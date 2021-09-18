import React, { useState } from 'react'
import JourneyItem from './JourneyItem'

function JourneyList(props) {
  const { products, tags, stars } = props
  const [productsSelected, setProductsSelected] = useState(
    new Array(products.length).fill(false)
  )
  console.log(products)
  return (
    <div className="container td-mt-75 filter-resultcontainer ">
      <h5 className="page-title text-center">篩選結果:{tags.toString()}</h5>
      {products
        .filter((product) => tags.some((tag) => product.tribe.includes(tag)))
        .filter((product) =>
          stars.some((star) => product.rating.includes(star))
        )
        .map((product, i) => {
          return (
            <JourneyItem
              key={i}
              product={product}
              selected={productsSelected[i]}
              handleClick={() => {
                const newProductsSelected = [...productsSelected]
                newProductsSelected[i] = !productsSelected[i]
                setProductsSelected(newProductsSelected)
              }}
            />
          )
        })}
    </div>
  )
}

export default JourneyList
