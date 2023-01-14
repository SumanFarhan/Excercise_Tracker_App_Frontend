import React from 'react'
import Excercisegirl from '../Images/Excercise Girl.json'
import Lottie from "lottie-react";

const leftSide = () => {
  return (
    <>
  <h1 className='heading'>Excercise Tracker App</h1>
    <Lottie
    animationData={Excercisegirl}
    loop={true}
    className="animationImage"
  />
    </>
  )
}

export default leftSide