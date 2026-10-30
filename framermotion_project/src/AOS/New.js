import React from 'react'
import star from './star.jpg';

export default function New() {
  return (
    <div>
        <div  data-aos="fade-down-right">
            <h1>new experiment</h1>
        </div>

        <div data-aos="fade-down">
            <img src={star} alt="" />
        </div>
    </div>
  )
}

