import React from 'react'
import Derma from '../components/Derma'
import General from '../components/General'
import Gyno from '../components/Gyno'
import Neuro from '../components/Neuro'
import TopDoctors from '../components/TopDoctors'

const Doctors = () => {
  return (
    <div>
      <TopDoctors hideMore={true}></TopDoctors>
      <Derma></Derma>
      <General></General>
      <Gyno></Gyno>
      <Neuro></Neuro>
    </div>
  )
}

export default Doctors
