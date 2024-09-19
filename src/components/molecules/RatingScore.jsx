import React from 'react'
import star from "../../assets/star.png"

const RatingScore = ({ rating }) => {
  return (
    <figcaption className="flex r mt-6 space-x-3 text-left">
    <img
      className="w-8 h-8 rounded-full"
      src={star}
      alt="rating star"
    />
    <div className="pr-3 font-bold text-6xl text-gray-900">{rating}</div>
  </figcaption>
  )
}

export default RatingScore
