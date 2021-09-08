import React from 'react'

export default function Rating(props) {
  const { rating, amountRating, journey } = props
  return (
    <>
      <div className="d-flex align-items-center reviewStar-point ">
        <label className="ml-5">
          <i
            className={
              rating >= 1
                ? 'fa fa-star'
                : rating >= 0.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
          <i
            className={
              rating >= 2
                ? 'fa fa-star'
                : rating >= 1.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>

          <i
            className={
              rating >= 3
                ? 'fa fa-star'
                : rating >= 2.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>

          <i
            className={
              rating >= 4
                ? 'fa fa-star'
                : rating >= 3.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>

          <i
            className={
              rating >= 5
                ? 'fa fa-star'
                : rating >= 4.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
          <span className="td-ms-15">{amountRating + '則評論'}</span>
        </label>
      </div>
    </>
  )
 
}
