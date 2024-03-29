import React from 'react'
import CustomCard from '../Components/CustomCard'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
     
      <div className='card-grid'>
        <CustomCard/>
      </div>
    </main>
  )
}

export default Home